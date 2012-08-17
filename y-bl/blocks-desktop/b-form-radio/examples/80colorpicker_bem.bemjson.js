([{
block: 'b-page',
        title: '80colorpicker_bem',
        head: [
            { elem: 'css', url: '_80colorpicker_bem.css', ie: false },
            { elem: 'css', url: '_80colorpicker_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_80colorpicker_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_80colorpicker_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_80colorpicker_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_80colorpicker_bem.js' }
        ],
        content: [
            {
                tag: 'h2',
                content: '_size_m'
            },
            {
                block: 'b-form-radio',
                mods: { size: 'm', theme: 'grey' },
                inputAttrs: { name: 'color' },
                content: [
                    {
                        elem: 'button',
                        content: 'Все цвета'
                    },
                    {
                        elem: 'button',
                        content: 'Черно-белые'
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'red' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'green' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'blue' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'black', side: 'right' }
                        }
                    }
                ]
            },
            {
                tag: 'h2',
                content: '_size_s'
            },
            {
                block: 'b-form-radio',
                mods: { size: 's', theme: 'grey' },
                inputAttrs: { name: 'color' },
                content: [
                    {
                        elem: 'button',
                        content: 'Все цвета'
                    },
                    {
                        elem: 'button',
                        content: 'Черно-белые'
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'red' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'green' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'blue' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'black', side: 'right' }
                        }
                    }
                ]
            }
        ]
    }
])
