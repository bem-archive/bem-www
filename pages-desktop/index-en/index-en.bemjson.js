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
        { block: 'gh-ribbon'  },
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
                                'rapidly and independently. ',
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
                            content: 'bem-tools'
                        },
                        {
                            block: 'description',
                            content: 'Toolkit to work with files based on BEM methodology: create entities, dev server, build final runtime.'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/borschik/',
                            content: 'Borschik'
                        },
                        {
                            block: 'description',
                            content: 'Borschik is a simple but powerful builder for text-based file formats (CSS, JS, etc.).'
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
                                '(SVG Optimizer) is a NodeJS-based tool for optimizing SVG vector graphics files.'
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
                },
                {
                    block: 'island',
                    mix: [{ block: 'articles' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/articles/',
                                content: 'Articles'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/yamapsbem/',
                            content: 'Yandex.Maps API and BEM'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'One of the most popular cases where Yandex.Maps API is used is a case to create a menu that shows different types of organizations (collections of geoobjects) on the map. Lets make it according to BEM methodology!'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/smartcd/',
                            content: 'smartcd: how to launch tools locally'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Find out how you can launch bem-tools faster right from the command line using smartcd.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/start-with-project-stub/',
                            content: 'Full stack quick start'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'This article shows you how to develop an online shop web page using BEM principles in CSS, JavaScript and BEMHTML templates.'
                            }
                        },
                        // {
                        //     block: 'b-link',
                        //     mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                        //     url: '/articles/yandex-frontend-dev/',
                        //     content: 'What you can borrow from Yandex frontend dev'
                        // },
                        // {
                        //     block: 'description',
                        //     content: {
                        //         content: 'The article sums up Yandex over 7-year experience in finding solutions for efficient frontend development.'
                        //     }
                        // },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/borschik/',
                            content: 'Borschik'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Borschik is a simple but powerful builder for text-based file formats.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bem-js-main-terms/',
                            content: 'JavaScript for BEM: The Main Terms'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'How to write client side JS using i-bem.js from bem-bl library.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/firm-card-story/',
                            content: 'BEM app with Leaflet and 2GIS API'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'An example of map service made with BEM.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-intro/',
                            content: 'Hello, BEMHTML!'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'THis document will help to start writing BEMHTML templates and get the main principles in 7 simple steps.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-reference/',
                            content: 'BEMHTML reference'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'This is BEMHTML reference manual.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-rationale/',
                            content: 'BEMHTML: template engine for BEM'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'BEMHTML rationale.'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'blog' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/blog/',
                                content: 'Blog'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-cli',
                            content: 'bem-cli: launch bem-tools locally'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Find out more, what to do when you can not use npm i -g bem, and how to launch locally installed bem-tools using bem-cli.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-tools-0-6-4',
                            content: 'bem-tools v0.6.4'
                        },
                        {
                            block: 'description',
                            content: {
                                content: "New technologies API added, while using new API bem make / server building speed increased. Npm v1.2.14 or higher needed on installation."
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-tools-0-5-33',
                            content: 'bem-tools v0.5.33'
                        },
                        {
                            block: 'description',
                            content: {
                                content: "Npm-dependancies refreshed including Borshik version with Windows build fixes."
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/anygrid-bem-notations',
                            content: 'AnyGrid – CSS Grids Generator that uses BEM-notations'
                        },
                        {
                            block: 'description',
                            content: {
                                content: "Find out more about how this service works and how you can contribute to it's development."
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/02/maintainable-frontend-dev-with-bem/',
                            content: 'BEM at MetaRefresh 2013'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Video and presentation of the talk about maintainable frontend development with BEM given by Varvara Stepanova at MetaRefresh 2013 in Bangalore.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/02/bem-goes-to-india/',
                            content: 'BEM goes to India'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Promo video of the talk about maintainable frontend development with BEM by Varvara Stepanova for MetaRefresh 2013 in Bangalore, abstract and some ideas behind the talk.'
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
