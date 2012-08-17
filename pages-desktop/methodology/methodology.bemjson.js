([
// {
//     block: 'i-global',
//     params: {
//         'key': 'val'
//     }
// },
{
    block: 'b-page',
    title: 'БЭМ: Методология ведения и использования исходного кода проекта',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_methodology.css', ie: false },
        { elem: 'css', url: '_methodology.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_methodology.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    content: 'b_'
                },
                {
                    block: 'b-menu-horiz',
                    mods: { layout: 'normal' },
                    content: [
                        {
                            elem: 'item',
                            elemMods: { state: 'current' },
                            content: {
                                block: 'b-link',
                                mods: { pseudo: 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Новости'
                            }
                        },
                        {
                            elem: 'item',
                            elemMods: { state: 'disabled' },
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Методология'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Технологии'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Туториалы'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Блоки'
                            }
                        },
                        {
                            elem: 'item',
                            content: [
                                {
                                    block: 'b-link',
                                    mods: { pseudo : 'yes' },
                                    mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                    url: '/',
                                    content: 'Инструменты'
                                },
                                {
                                    block: 'b-menu-horiz',
                                    mods: { layout: 'normal' },
                                    content: [
                                        {
                                            elem: 'item',
                                            elemMods: { state: 'current' },
                                            content: {
                                                block: 'b-link',
                                                mods: { pseudo: 'yes' },
                                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                                url: '/',
                                                content: 'bem-tools'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            elemMods: { state: 'current' },
                                            content: {
                                                block: 'b-link',
                                                mods: { pseudo: 'yes' },
                                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                                url: '/',
                                                content: 'bem-server'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            elemMods: { state: 'current' },
                                            content: {
                                                block: 'b-link',
                                                mods: { pseudo: 'yes' },
                                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                                url: '/',
                                                content: 'borschik'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Блоги'
                            }
                        },
                        {
                            elem: 'item',
                            content: {
                                block: 'b-link',
                                mods: { pseudo : 'yes' },
                                mix: [{ block: 'b-menu-horiz', elem : 'item-selector' }],
                                url: '/',
                                content: 'Команда'
                            }
                        }
                    ]
                }
            ]
            
        },
        {
            block: 'content',
            content: [
                {
                    block: 'sidebar',
                    content: [
                        {
                            content: 'Туториалы'
                        }
                    ]
                },
                {
                    block: 'main',
                    content: [
                        {
                            block: 'title',
                            content: 'bem tools'
                        },
                        {
                            content: 'bem-tools в данный момент содержат одну утилиту командной строки bem, которая упрощает работу с различными BEM-сущностями.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: 'b_ Built with BEM'
        } 
    ]
}
])