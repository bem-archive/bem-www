var BEM = require('bem'),
    Q = BEM.require('q'),
    PATH = require('path'),
    FS = require('fs'),
    shmakowiki = require('shmakowiki'),
    MD = require('marked'),
    HL = require('highlight.js'),
    mkdirp = require('mkdirp');

process.env.YENV = 'production';
process.env.BEM_I18N_LANGS = 'en ru';
process.env.SHMAKOWIKI_HL = 'server';

function processMarkdown(src) {

    var langs = {};

    return MD(src, {
            gfm: true,
            pedantic: false,
            sanitize: false,
            highlight: function(code, lang) {
                if (!lang) return code;
                var res = HL.highlight(translateAlias(lang), code);
                langs[lang] = res.language;
                return res.value;
            }
        })
        .replace(/<pre><code class="lang-(.+?)">([\s\S]+?)<\/code><\/pre>/gm, function(m, lang, code) {

            return '<pre class="highlight"><code class="highlight__code ' + langs[lang] + '">' +
                code +
                '</code></pre>';

        });

}

function translateAlias(alias) {

    var lang = alias;

    switch (alias) {

        case 'js':
            lang = 'javascript';
            break;

        case 'patch':
            lang = 'diff';
            break;

        case 'md':
            lang = 'markdown';
            break;

    }

    return lang;

}

/** @name MAKE */

MAKE.decl('BundleNode', {

    getTechs: function() {

        var arr = this.__base();

        // remove js tech
        // arr.splice(arr.indexOf('js'), 1);

        // remove html tech
        // arr.splice(arr.indexOf('html'), 1);

        // add i18n techs
        return arr;
/*
.concat([
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'i18n',
            'i18n.js',
            'i18n.html'
        ]);
*/
    }
/*,
    'create-i18n.js-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    },

    'create-i18n.html-node': function(tech, bundleNode, magicNode) {

        return this.setBemCreateNode(
            tech,
            this.level.resolveTech(tech),
            bundleNode,
            magicNode);

    }
*/
});

MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                // NOTE: Will be renamed in the nearest future
                treeish: '0.3'
            },

            'content/bem-method': {
                type: 'git',
                url: 'git://github.com/bem/bem-method.git',
                packages: false
            },

            'content/bem-tools': {
                type: 'git',
                url: 'git://github.com/bem/bem-tools.git',
                packages: false
            },

            'content/csso': {
                type: 'git',
                url: 'git://github.com/css/csso.git',
                packages: false
            }
        };

    },

    createCustomNodes: function(common, libs, blocks, bundles) {

        var node = new (MAKE.getNodeClass('PagesGeneratorNode'))({
                id: 'pages-generator',
                root: this.root,
                sources: ['bem-method', 'tools', 'bem-tools/docs', 'csso/docs']
            });

        this.arch.setNode(node, bundles, libs);

        return node.getId();

    }

});

MAKE.decl('PagesGeneratorNode', 'Node', {

    __constructor: function(o) {
        this.root = o.root;
        this.sources = o.sources;
        this.__base(o);
    },

    make: function() {

        // skip rebuild if this was already done in the same process
        // TODO: this will not with `bem server`
        if (this.done) return;

        var bundlesLevel = BEM.createLevel(PATH.resolve(this.root, 'pages-desktop')),
            _this = this,
            ctx = this.ctx,
            promises;

        promises = this.sources.reduce(function(res, source) {

            var level = BEM.createLevel(PATH.resolve(_this.root, 'content', source));

            return res.concat(level.getItemsByIntrospection()
                .filter(function(item) {
                    return BEM.util.bemType(item) === 'block' && ~['md', 'wiki'].indexOf(item.tech);
                })
                //.reduce(BEM.util.uniq(BEM.util.bemKey), [])
                .map(function(item) {

                    var suffix = item.suffix.substr(1),
                        lang = suffix.split('.').shift(),
                        page = { block: source.split('/').shift() + '-' + item.block + '-' + lang },
                        srcPath = PATH.join(level.getPathByObj(item, suffix)),
                        outPath = PATH.join(bundlesLevel.getPathByObj(page, 'bemjson.js'));

                    return BEM.util.isFileValid(outPath, srcPath)
                        .then(function(valid) {

                            if (valid && !ctx.force) return;

                            return BEM.util.readFile(srcPath)
                                .then(function(src) {

                                    var pageContent = _this.getTemplateBemJson(page.block, source, lang),
                                        content = item.tech === 'wiki'?
                                            shmakowiki.shmakowikiToBemjson(src) :
                                            {
                                                block: 'b-text',
                                                mods: { 'type': 'global' },
                                                content: processMarkdown(src)
                                            };

                                    pageContent.content[1].content.push(content);

                                    mkdirp.sync('pages-desktop/' + page.block);

                                    var outContent = '(' + JSON.stringify(pageContent, null, 1) + ')';
                                    return BEM.util.writeFile(outPath, outContent);

                                });

                        });

                }, _this));

        }, []);

        return Q.all(promises)
            .then(function() {
                _this.done = true;
            });

    },
    pagesConfig: JSON.parse(FS.readFileSync('content/pages-config.json', 'utf8')),
    _navLevelIdx: 0,
    nav: JSON.parse(FS.readFileSync('content/site-structure-config.json', 'utf8')),
    getCurrentPageInfo: function(pagename) {
        var conf = this.pagesConfig;

        for (var pageIdx = 0; pageIdx < conf.length; pageIdx++) {
            if (conf[pageIdx].page == pagename) {
                return conf[pageIdx];
            }
        }

        // Костыль на случай, если в конфиге нет описания для данной страницы
        return {
            page: pagename,
            title: pagename,
            description: pagename,
            keywords: pagename
        };
    },

    getNavBemJson: function(nav, pagename, source, lang, parent) {
        var _this = this,
            navBemJson = [],
            currentIdx,
            sub,
            level = ['first', 'second', 'third', 'fourth'],
            getMenuBemJson = function(mods) {
                _this._navLevelIdx++;

                return {
                    block: 'b-menu-horiz',
                    mods: { layout: 'normal' },
                    mix: [{ block: 'nav' , mods: mods }],
                    js: false,
                    content: []
                };
            },

            currentNavLevelResult = getMenuBemJson({ level: level[_this._navLevelIdx] }),

            checkParent = function(item, parent) {
                if (item.page + '-' + lang == pagename) return true;

                var content = item.content;
                if (!content || !content.length) return false;

                for (var pageIdx = 0; pageIdx < content.length; pageIdx++) {
                    if (checkParent(content[pageIdx], pageIdx)) return true;
                    if (content[pageIdx].page == pagename) return true;
                }

                return false;
            };

        nav.forEach(function(item, idx) {

            var isParent = checkParent(item, parent),
                isCurrent = item.page + '-' + lang == pagename;

            (isCurrent || isParent) && (currentIdx = idx);

            currentNavLevelResult.content.push({
                elem: 'item',
                elemMods: isCurrent ? { state: 'current' } : isParent ? { state: 'parent' } : undefined,
                content: isCurrent ? item.title[lang] : {
                    block: 'b-link',
                    url: '/' + item.url + '/',
                    content: item.title[lang]
                }
            });
        });

        navBemJson.push(currentNavLevelResult);

        if (nav[currentIdx]) {
            sub = nav[currentIdx].content;
            sub && sub.length && navBemJson.push(this.getNavBemJson(sub, pagename, source, lang, currentIdx));
        }

        _this._navLevelIdx = 0;
        return navBemJson;
    },

    getTemplateBemJson: function(pagename, source, lang) {
        /*
        * upyachka:
        * this.getNavBemJson returns array with two elements:
        * first element is first level menu
        * second element consists of second and third level menues
        */
        var nav = this.getNavBemJson(this.nav, pagename, source, lang),
            mainNav = [],
            subNav = nav[1][1];

        mainNav.push(nav[0], nav[1][0]);

        return {
            block: 'b-page',
            title: this.getCurrentPageInfo(pagename).title,
            favicon: '/favicon.ico',
            head: [
/*
                { elem: 'css', url: '_' + pagename + '.css', ie: false },
                { elem: 'css', url: '_' + pagename, ie: true },
*/
                // { block: 'i-jquery', elem: 'core' },
                // { elem: 'js', url: '_' + pagename + '.js' },
                { elem: 'css', url: '_' + pagename + '.css' },
                { elem: 'meta', attrs: { name: 'description', value: this.getCurrentPageInfo(pagename).description }},
                { elem: 'meta', attrs: { name: 'keywords', value: this.getCurrentPageInfo(pagename).keywords }}
            ],
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'b-link',
                            mix: [{ block: 'header', elem: 'logo' }],
                            url: '/'
                        },
                        mainNav
                    ]
                },
                {
                    block: 'content',
                    content: [subNav]
                },
                {
                    block: 'footer'
                }
            ]
        };
    }
}, {

    createId: function(o) {
        return o.id;
    }

});
