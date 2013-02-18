({
    block: 'b-page',
    title: 'BEM: Methodology of Effective Site Development',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '/bundles-desktop/index/_index.css' },
        // { elem: 'css', url: '/bundles-desktop/index/_index', ie: true },
        // { block: 'i-jquery', elem: 'core' },
        // { elem: 'js', url: '/bundles-desktop/index/_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'lang-switcher',
            content: [
                'English | ',
                {
                    block: 'b-link',
                    url: '//ru.bem.info/',
                    content: 'Русский'
                }
            ]
        },
        {
            block: 'logo',
            mods: { type: 'main' }
        },
        {
            block: 'content',
            content: [
                {
                    block: 'island',
                    mix: [{ block: 'whatisbem' }],
                    content: [
                        {
                            block: 'heading',
                            content: 'What is BEM'
                        },
                        {
                            block: 'description',
                            content: [
                                'BEM stands for Block-Element-Modifier. It\'s a way to modularize the development of pages. ',
                                'By breaking things into Blocks, being able to break those into Elements, and then use ',
                                'Modifiers on them, we get a neat TLA and a methodology where each part can advance ',
                                'rapidly and independently.',
                                'No matter if you are a large team or a single developer. ',
                                'BEM gives its benefits for all.'
                            ]
                        },
                        {
                            block: 'col',
                            content: [
                                {
                                    block: 'heading',
                                    mods: { size: 's' },
                                    content: 'Pros for developer'
                                },
                                {
                                    block: 'list',
                                    tag: 'ul',
                                    content: [
                                        {
                                            tag: 'li',
                                            content: 'Simplifies the development and support'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Eases switching between projects'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Enables reusing code'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Prevents code degradation when the project team grows'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'col',
                            content: [
                                {
                                    block: 'heading',
                                    mods: { size: 's' },
                                    content: 'Pros for team'
                                },
                                {
                                    block: 'list',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: 'Rapid involving new team members'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Different professionals share the same code base'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Independent work on the parts of the project'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Using someone else\'s code without diving into implementation'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'methodology' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/method/',
                                content: 'Methodology'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                'BEM gives useful patterns and methodological recommendations on ',
                                'writing CSS, JavaScript, templates (and other web-related techs) in an extra-semantic way.<br/>',
                                'Besides it\'s a pleasure for developers, it also helps to keep interfaces fast-to-develop ',
                                'and easy-to-maintain in the long run.'
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/method/definitions/',
                                content: 'Block, Element, Modifier'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                'The three terms uncover their meaning in this well-illustrated article.'
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/articles/start-with-project-stub/',
                                content: 'Quick start full BEM stack'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                'Try BEM idea of independent blocks, BEMHTML template engine, writing extra ',
                                'semantic JavaScript, linking a library to the project and redefining its ',
                                'functionality at the project level.'
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/method/history/',
                                content: 'The history of BEM'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Once upon a time, in a distant country far-far away, an IT company named Yandex started developing web search and affiliated services...'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'tools' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/tools/',
                                content: 'Tools'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/tools/bem/',
                            content: 'BEM tools'
                        },
                        {
                            block: 'description',
                            content: 'Toolkit to work with files based on BEM methodology: create entities, dev server, build final runtime.'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/tools/csso/',
                            content: 'CSSO'
                        },
                        {
                            block: 'description',
                            content: 'CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'https://github.com/svg/svgo/#readme',
                            content: 'SVGO'
                        },
                        {
                            block: 'description',
                            content: [
                                '(SVG Optimizer) is a NodeJS-based tool for optimizing SVG vector graphics files.<br/>',
                                'SVGO has a plugin-based architecture, so almost every optimization is a separate plugin, and you can easily add your own.'
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'tools/',
                            content: 'All tools developed by BEM team'
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'libraries' }],
                    content: [
                        {
                            block: 'heading',
                            content: 'Block libraries'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 'm' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'http://bem.github.com/bem-bl/index.en.html',
                            content: 'bem-bl'
                        },
                        {
                            block: 'description',
                            content: [
                                'This is an open source UI block library implemented accroding to the BEM methodology.<br/>',
                                'Blocks are implemented at bemhtml (templates), css, client-side js.<br/>',
                                'You need BEM tools to use the library.'
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 'm' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'http://gfranco.github.com/bootstrap-bl/',
                            content: 'bootstrap-bl'
                        },
                        {
                            block: 'description',
                            content: {
                                content: [
                                    'It\'s the Bootstrap, but better!<br/>',
                                    'bootstrap-bl — half-assed attempt to implement original bootstrap using BEM methodology, modularity and stuff.'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
/*
        {
            block: 'portfolio',
            content: [
                {
                    elem: 'title',
                    content: 'Showcase'
                },
                {
                    block: 'companies',
                    content: [
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'yandex' } }],
                            target: '_blank',
                            url: '//www.yandex.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'thk' } }],
                            target: '_blank',
                            url: '//www.tnk-racing.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'hh' } }],
                            target: '_blank',
                            url: '//hh.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'rambler' } }],
                            target: '_blank',
                            url: '//rambler.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'nile' } }],
                            target: '_blank',
                            url: '//nile.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'yota' } }],
                            target: '_blank',
                            url: '//yota.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lj' } }],
                            target: '_blank',
                            url: '//livejournal.com/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lenta' } }],
                            target: '_blank',
                            url: '//lenta.ru/'
                        }
                    ]
                }
            ]
        },
*/
        {
            block: 'footer'
        },
        {
            block: 'metrika'
        }
    ]
})
