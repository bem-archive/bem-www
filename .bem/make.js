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
                npmPackages: false
            },

            'content/bem-tools': {
                type: 'git',
                url: 'git://github.com/bem/bem-tools.git',
                npmPackages: false
            },

            'content/csso': {
                type: 'git',
                url: 'git://github.com/css/csso.git',
                npmPackages: false
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

                                    var pageContent = _this.getTemplateBemJson(item.block, source, lang),
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
    structureConfig: JSON.parse(FS.readFileSync('content/site-structure-config.json', 'utf8')),
    getCurrentPageInfo: function(sourceDir, lang) {
        lang = lang || 'en';
        return this.pagesConfig[lang][sourceDir] || {
            title: 'BEM: block, element, modificator',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso',
            menu: sourceDir.split('/').pop()
        };
    },

    getNavBemJson: function(cfg, sourceDir, lang) {
        var _this = this,
            navBemJson = [],
            currentDir,
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

            checkParent = function(dir, currentStructureLevel) {
                if (dir == sourceDir) return true;

                var children = currentStructureLevel[dir].children;
                if (!children) return false;

                for (var child in children) {
                    if (child == sourceDir || checkParent(child, children)) return true;
                }

                return false;
            };

        for (var dir in cfg) {
            var isParent = checkParent(dir, cfg),
                isCurrent = dir == sourceDir,
                title = this.getCurrentPageInfo(dir, lang).menu;

            isParent && (currentDir = dir);

            currentNavLevelResult.content.push({
                elem: 'item',
                elemMods: isCurrent ? { state: 'current' } : isParent ? { state: 'parent' } : undefined,
                content: isCurrent ? title : {
                    block: 'b-link',
                    url: '/' + cfg[dir].url + '/',
                    content: title
                }
            });
        }

        navBemJson.push(currentNavLevelResult);

        sub = cfg[currentDir] ? cfg[currentDir].children : null;
        sub && navBemJson.push(this.getNavBemJson(sub, sourceDir, lang));

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
        var sourceDir = source + '/' + pagename,
            pageInfo = this.getCurrentPageInfo(sourceDir, lang),
            resourceFileName = '_' + source.split('/').shift() + '-' + pagename + '-' + lang,
            nav = this.getNavBemJson(this.structureConfig, sourceDir, lang),
            mainNav = [],
            subNav = nav[1][1];

        mainNav.push(nav[0], nav[1][0]);

        return {
            block: 'b-page',
            title: pageInfo.title,
            favicon: '/favicon.ico',
            head: [
                { elem: 'css', url: resourceFileName + '.css' },
                // { elem: 'css', url: resourceFileName + '.css', ie: false },
                // { elem: 'css', url: resourceFileName, ie: true },
                // { block: 'i-jquery', elem: 'core' },
                // { elem: 'js', url: resourceFileName + '.js' },
                { elem: 'meta', attrs: { name: 'description', content: pageInfo.description }},
                { elem: 'meta', attrs: { name: 'keywords', content: pageInfo.keywords }}
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
