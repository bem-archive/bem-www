({
    block: 'b-page',
    title: 'BEM: Methodology of Effective Site Development',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index-en.css', ie: false },
        { elem: 'css', url: '_index-en', ie: true },
        // { block: 'i-jquery', elem: 'core' },
        // { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
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
                                {
                                    content: 'BEM is abbreviation for Block-Element-Modifier. It\'s a way to write code which is easy to support and develop.'
                                },
                                {
                                    content: 'It can be used for the individual development of the site or for a large team.'
                                }
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
                                            content: 'Simplify the development and support'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Easy switching between projects'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Ability for code reuse'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Growth of the project does not worsen code quality'
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
                                {
                                    content: 'In some ways, BEM is similar to OOP. It\'s a way of describing reality in code, a range of patterns, and a way of thinking about program entities regardless of programming languages being used.'
                                },
                                {
                                    content: 'We used BEM principles to create a set of front-end development techniques and tools, that allow us to build websites quickly and maintain them over a long time.'
                                }
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/method/definitions/',
                                content: 'Definitions'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'The meaning of blocks, elements and modifiers is will be described further in the article.'
                                }
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
                            url: 'https://github.com/bem/bem-tools#bem-tools-',
                            content: 'BEM tools'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Toolkit to work with files based on BEM methodology: create entities, dev server, build final runtime.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'https://github.com/css/csso/',
                            content: 'CSSO'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'CSSO (CSS Optimizer) is a CSS minimizer unlike others. In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers.'
                            }
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
                                {
                                    content: '(SVG Optimizer) is a NodeJS-based tool for optimizing SVG vector graphics files.'
                                },
                                {
                                    content: 'SVGO has a plugin-based architecture, so almost every optimization is a separate plugin, and you can easily add your own.'
                                },
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
                            content: {
                                content: [
                                    {
                                        content: 'This is an open source UI block library implemented accroding to the BEM methodology.'
                                    },
                                    {
                                        content: 'Blocks are implemented at bemhtml (templates), css, client-side js.'
                                    },
                                    {
                                        content: 'You need BEM tools to use the library.'
                                    }
                                ]
                            }
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
                                    {
                                        content: 'It\'s the Bootstrap, but better!'
                                    },
                                    {
                                        content: 'bootstrap-bl — half-assed attempt to implement original bootstrap using BEM methodology, modularity and stuff.'
                                    }
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
