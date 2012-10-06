var BEM = require('bem'),
    Q = BEM.require('q'),
    PATH = require('path'),
    FS = require('fs'),
    shmakowiki = require('shmakowiki'),
    MD = require('marked'),
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
            'ie9.css',
            'i18n',
            'i18n.js',
            'i18n.html'
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
                packages: false
            }

        };

    },

    createCustomNodes: function(common, libs, blocks, bundles) {

        var node = new (MAKE.getNodeClass('PagesGeneratorNode'))({
                id: 'pages-generator',
                root: this.root,
                sources: ['bem-method', 'bem-tools/docs', 'tools']
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
            promises = [],
            _this = this;

        this.sources.forEach(function(source) {
            var level = BEM.createLevel(PATH.resolve(this.root, 'content', source));

            level.getItemsByIntrospection()
                .filter(function(item) {
                    return BEM.util.bemType(item) === 'block' && ~['md', 'wiki'].indexOf(item.tech);
                })
                //.reduce(BEM.util.uniq(BEM.util.bemKey), [])
                .forEach(function(item) {

                    var suffix = item.suffix.substr(1),
                        lang = suffix.split('.').shift(),
                        page = { block: source.split('/').shift() + '-' + item.block + '-' + lang },
                        srcPath = PATH.join(level.getPathByObj(item, suffix)),
                        outPath = PATH.join(bundlesLevel.getPathByObj(page, 'bemjson.js'));

                    return BEM.util.isFileValid(outPath, srcPath)
                        .then(function(valid) {

                            if (valid) return;

                            promises.push(BEM.util.readFile(srcPath)
                                .then(function(src) {

                                    var pageContent = _this.getTemplateBemJson(page.block, source, lang),
                                        content = item.tech === 'wiki'?
                                            shmakowiki.shmakowikiToBemjson(src) :
                                            {
                                                block: 'b-text',
                                                mods: { 'type': 'global' },
                                                content: MD(src)
                                            };

                                    pageContent.content[1].content.push(content);

                                    mkdirp.sync('pages-desktop/' + page.block);

                                    var outContent = '(' + JSON.stringify(pageContent, null, 1) + ')';
                                    return BEM.util.writeFile(outPath, outContent);

                                }));

                        });

                }, this);

        }, this);

        this.done = true;

        return Q.all(promises);

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
        },


        {
            page: 'bem-tools-api-ru',
            title: 'API – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-api-en',
            title: 'API – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-build-ru',
            title: 'bem build – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-build-en',
            title: 'bem build – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-create-ru',
            title: 'bem create – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-create-en',
            title: 'bem create – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-decl-ru',
            title: 'bem decl – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-decl-en',
            title: 'bem decl – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-make-ru',
            title: 'bem make – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-make-en',
            title: 'bem make – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-server-ru',
            title: 'bem server – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-bem-server-en',
            title: 'bem server – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-contribute-ru',
            title: 'Contribute – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-contribute-en',
            title: 'Участие в разработке – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-customization-ru',
            title: 'Настройка – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-customization-en',
            title: 'Сustomization – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-installation-ru',
            title: 'Установка – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-installation-en',
            title: 'Installation – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-levels-ru',
            title: 'Levels – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-levels-en',
            title: 'Уровни переопределения – bem tools',
            description: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.',
            keywords: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-tech-modules-ru',
            title: 'Tech modules  – bem tools',
            description: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области',
            keywords: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso'
        },
        {
            page: 'bem-tools-tech-modules-en',
            title: 'Модули технологий – bem tools',
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
                title: {
                    en: 'Tools',
                    ru: 'Инструменты'
                },
                url: 'tools',
                sub: [
                    {
                        page: 'bem-tools-installation',
                        title: {
                            en: 'Installation',
                            ru: 'Установка'
                        },
                        url: 'tools/installation'
                    },
                    {
                        page: 'bem-tools-bem-create',
                        title: {
                            en: 'bem create',
                            ru: 'bem create'
                        },
                        url: 'tools/bem-create'
                    },
                    {
                        page: 'bem-tools-bem-build',
                        title: {
                            en: 'bem build',
                            ru: 'bem build'
                        },
                        url: 'tools/bem-build'
                    },
                    {
                        page: 'bem-tools-bem-decl',
                        title: {
                            en: 'bem decl',
                            ru: 'bem decl'
                        },
                        url: 'tools/bem-decl'
                    },
                    {
                        page: 'bem-tools-bem-make',
                        title: {
                            en: 'bem make',
                            ru: 'bem make'
                        },
                        url: 'tools/bem-make'
                    },
                    {
                        page: 'bem-tools-bem-server',
                        title: {
                            en: 'bem server',
                            ru: 'bem server'
                        },
                        url: 'tools/bem-server'
                    },
                    {
                        page: 'bem-tools-levels',
                        title: {
                            en: 'Levels',
                            ru: 'Уровни переопределения'
                        },
                        url: 'tools/levels'
                    },
                    {
                        page: 'bem-tools-customization',
                        title: {
                            en: 'Customization',
                            ru: 'Настройка'
                        },
                        url: 'tools/customization'
                    },
                    {
                        page: 'bem-tools-tech-modules',
                        title: {
                            en: 'Techs',
                            ru: 'Модули технологий'
                        },
                        url: 'tools/tech-modules'
                    },
                    {
                        page: 'bem-tools-api',
                        title: {
                            en: 'API',
                            ru: 'API'
                        },
                        url: 'tools/api'
                    },
                    {
                        page: 'bem-tools-contribute',
                        title: {
                            en: 'Сontribute',
                            ru: 'Участие в разработке'
                        },
                        url: 'tools/contribute'
                    }
                ]
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
            var isParent = (item.source == source || (item.source == 'tools' && source == 'bem-tools/docs'));

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
