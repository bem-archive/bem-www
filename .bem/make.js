var BEM = require('bem'),
    PATH = require('path'),
    FS = require('fs'),
    shmakowiki = require('shmakowiki'),
    mkdirp = require('mkdirp');

process.env.YENV = 'production';
process.env.BEM_I18N_LANGS = 'en ru';

/** @name MAKE */

MAKE.decl('BundleNode', {

    getTechs: function() {

        var arr = this.__base();

        // remove js tech
        arr.splice(arr.indexOf('js'), 1);

        // remove html tech
        arr.splice(arr.indexOf('html'), 1);

        // add i18n techs
        return arr.concat([
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css','i18n', 'i18n.js', 'i18n.html'
        ]);

    },

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
                url: 'git://github.com/bem/bem-method.git'
            },

            'content/bem-tools': {
                type: 'git',
                url: 'git://github.com/bem/bem-tools.git',
                treeish: 'doc-split',
                packages: false
            }

        };

    },

    createCustomNodes: function(common, libs, blocks, bundles) {

        var node = new (MAKE.getNodeClass('PagesGeneratorNode'))({
                id: 'pages-generator',
                root: this.root,
                sources: ['bem-method', 'tools']
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

       // return;

        if (this.done) return;

        var bundlesLevel = BEM.createLevel(PATH.resolve(this.root, 'pages-desktop'));

        this.sources.forEach(function(source) {
            var level = BEM.createLevel(PATH.resolve(this.root, 'content/' + source));

            level.getItemsByIntrospection()
                .filter(function(item) {
                    return BEM.util.bemType(item) === 'block';
                })
                //.reduce(BEM.util.uniq(BEM.util.bemKey), [])
                .forEach(function(item) {

                    var suffix = item.suffix.substr(1),
                        lang = suffix.split('.')[0],
                        wiki = FS.readFileSync(PATH.join(level.getPathByObj(item, suffix)), 'utf8'),
                        page = { block: source + '-' + item.block + '-' + lang },
                        bemjson = shmakowiki.shmakowikiToBemjson(wiki),
                        pageContent = this.getTemplateBemJson(page.block, source, lang);

                    pageContent.content[1].content.push(bemjson);

                    mkdirp.sync('pages-desktop/' + page.block);

                    FS.writeFileSync(PATH.join(bundlesLevel.getPathByObj(page, 'bemjson.js')), '(' + JSON.stringify(pageContent, null, ' ') + ')');

                    console.log('file to read: %s', PATH.join(level.getPathByObj(item, item.tech)));
                    console.log('file to generate: %s', PATH.join(bundlesLevel.getPathByObj(page, 'bemjson.js')));

                }, this);

        }, this);

        this.done = true;

    },
    pagesConfig: [
        {
            page: 'bem-method-index-en',
            title: 'BEM Methodology',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-index-ru',
            title: 'Методология БЭМ',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-definitions-en',
            title: 'Definitions — BEM',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-definitions-ru',
            title: 'Определения — БЭМ',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-filesystem-en',
            title: 'Filesystem Organization — BEM',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-filesystem-ru',
            title: 'Организация файловой системы — БЭМ',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-history-en',
            title: 'History — BEM',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-method-history-ru',
            title: 'История создания БЭМ',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'tools-index-ru',
            title: 'Инструменты для работы в предметной области БЭМ',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'tools-index-en',
            title: 'BEM Tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        }
    ],
    nav: {
        main: [
            {
                page: 'bem-method-index',
                source: 'bem-method',
                title: {
                    en: 'Methodology',
                    ru: 'Методология'
                },
                url: 'method',
                sub: [
                    {
                        page: 'bem-method-definitions',
                        title: {
                            en: 'Definitions',
                            ru: 'Определения'
                        },
                        url: 'method/definitions'
                    },
                    {
                        page: 'bem-method-filesystem',
                        title: {
                            en: 'Filesystem',
                            ru: 'Организация файловой системы'
                        },
                        url: 'method/filesystem'
                    },
                    {
                        page: 'bem-method-history',
                        title: {
                            en: 'History',
                            ru: 'История создания'
                        },
                        url: 'method/history'
                    }
                ]
            },
            {
                page: 'tools-index',
                source: 'tools',
                url: 'tools',
                title: {
                    en: 'Tools',
                    ru: 'Инструменты'
                }
            }
        ]
    },
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
    getNavBemJson: function(pagename, source, lang) {
        var _this = this,
            navBemJson = [],
            hasSub = false,
            main = {
                block: 'b-menu-horiz',
                mods: { layout: 'normal' },
                mix: [{ block: 'nav', mods: { type: 'main' } }],
                js: false,
                content: []
            },
            sub = {
                block: 'b-menu-horiz',
                mods: { layout: 'normal' },
                mix: [{ block: 'nav', mods: { type: 'sub' } }],
                js: false,
                content: []
            };

        this.nav.main.forEach(function(item, idx) {
            var isCurrent = item.page + '-' + lang == pagename;
            var isParent = item.source == source;

            main.content.push({
                elem: 'item',
                elemMods: isCurrent ? { state: 'current' } : isParent ? { state: 'parent' } : undefined,
                content: isCurrent ? item.title.en : {
                    block: 'b-link',
                    url: '/' + item.url + '/',
                    content: item.title.en
                }
            });

            if (isParent && _this.nav.main[idx].sub && _this.nav.main[idx].sub.length) {
                hasSub = true;

                _this.nav.main[idx].sub.forEach(function(item) {
                    var isCurrent = item.page + '-' + lang == pagename;

                    sub.content.push({
                        elem: 'item',
                        elemMods: isCurrent ? { state: 'current' } : undefined,
                        content: isCurrent ? item.title.en : {
                            block: 'b-link',
                            url: '/' + item.url + '/',
                            content: item.title.en
                        }
                    });
                });
            }
        });

        navBemJson.push(main);
        hasSub && navBemJson.push(sub);

        return navBemJson;
    },
    getTemplateBemJson: function(pagename, source, lang) {
        return {
            block: 'b-page',
            title: this.getCurrentPageInfo(pagename).title,
            favicon: '/favicon.ico',
            head: [
                { elem: 'css', url: '_' + pagename + '.css', ie: false },
                { elem: 'css', url: '_' + pagename, ie: true },
                // { block: 'i-jquery', elem: 'core' },
                // { elem: 'js', url: '_' + pagename + '.js' },
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
                        this.getNavBemJson(pagename, source, lang)
                    ]
                },
                {
                    block: 'content',
                    content: []
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
