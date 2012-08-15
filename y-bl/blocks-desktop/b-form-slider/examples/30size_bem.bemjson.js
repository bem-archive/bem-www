({
    block: 'b-page',
    title: 'b-form-slider_size',
    head: [
        { elem: 'css', url: '_30size_bem.css', ie: false },
        { elem: 'css', url: '_30size_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_30size_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_30size_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_30size_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_30size_bem.js' }
    ],
    content: [
        {
            block: 'b-layout-table',
            mods: { layout: '30-70'},
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            content: 'Размер XS'
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'r'},
                            content: [
                                {
                                    block: 'i-lego-example',
                                    content: {
                                        block: 'b-form-slider',
                                        mods: { theme: 'grey', size: 'xs' },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                { value: 0, label: '0', step: 10 },
                                                { value: 100, label: '100' }
                                            ]
                                        },
                                        content: {
                                            elem: 'info',
                                            elemMods: { preset: 'inline' },
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Цена'
                                                },
                                                {
                                                    block: 'b-form-input',
                                                    mods: { theme: 'grey' },
                                                    value: 70,
                                                    content: { elem: 'input' }
                                                },
                                                {
                                                    elem: 'unit',
                                                    content: 'руб.'
                                                }
                                            ]

                                        }
                                    }
                                }

                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            content: {
                                block: 'b-form-button',
                                mods: { theme: 'grey-s', size: 's' },
                                url: 'http://ya.ru',
                                content: 'Размер S'
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'r'},
                            content: [
                                {
                                    block: 'i-lego-example',
                                    content: {
                                        block: 'b-form-slider',
                                        mods: { theme: 'grey', size: 's' },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                { value: 0, label: '0', step: 10 },
                                                { value: 100, label: '100' }
                                            ]
                                        },
                                        content: {
                                            elem: 'info',
                                            elemMods: { preset: 'inline' },
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Цена'
                                                },
                                                {
                                                    block: 'b-form-input',
                                                    mods: { theme: 'grey' },
                                                    value: 70,
                                                    content: { elem: 'input' }
                                                },
                                                {
                                                    elem: 'unit',
                                                    content: 'руб.'
                                                }
                                            ]

                                        }
                                    }
                                }

                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            content: {
                                block: 'b-form-button',
                                mods: { theme: 'grey-m', size: 'm' },
                                url: 'http://ya.ru',
                                content: 'Размер M'
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'r'},
                            content: [
                                {
                                    block: 'i-lego-example',
                                    content: {
                                        block: 'b-form-slider',
                                        mods: { theme: 'grey', size: 'm' },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                { value: 0, label: '0', step: 10 },
                                                { value: 100, label: '100' }
                                            ]
                                        },
                                        content: {
                                            elem: 'info',
                                            elemMods: { preset: 'inline' },
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Цена'
                                                },
                                                {
                                                    block: 'b-form-input',
                                                    mods: { theme: 'grey' },
                                                    value: 70,
                                                    content: { elem: 'input' }
                                                },
                                                {
                                                    elem: 'unit',
                                                    content: 'руб.'
                                                }
                                            ]

                                        }
                                    }
                                }

                            ]
                        }
                    ]
                },
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            content: {
                                block: 'b-form-button',
                                mods: { theme: 'grey-l', size: 'l' },
                                url: 'http://ya.ru',
                                content: 'Размер L'
                            }
                        },
                        {
                            elem: 'cell',
                            elemMods: { position: 'r'},
                            content: [
                                {
                                    block: 'i-lego-example',
                                    content: {
                                        block: 'b-form-slider',
                                        mods: { theme: 'grey', size: 'l' },
                                        js: {
                                            min: 10,
                                            max: 90,
                                            scale: [
                                                { value: 0, label: '0', step: 10 },
                                                { value: 100, label: '100' }
                                            ]
                                        },
                                        content: {
                                            elem: 'info',
                                            elemMods: { preset: 'inline' },
                                            content: [
                                                {
                                                    elem: 'title',
                                                    content: 'Цена'
                                                },
                                                {
                                                    block: 'b-form-input',
                                                    mods: { theme: 'grey' },
                                                    value: 70,
                                                    content: { elem: 'input' }
                                                },
                                                {
                                                    elem: 'unit',
                                                    content: 'руб.'
                                                }
                                            ]

                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
