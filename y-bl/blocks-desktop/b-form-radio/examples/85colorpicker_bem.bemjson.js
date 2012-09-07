([{
block: 'b-page',
        title: '85colorpicker_bem',
        head: [
            { elem: 'css', url: '_85colorpicker_bem.css', ie: false },
            { elem: 'css', url: '_85colorpicker_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_85colorpicker_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_85colorpicker_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_85colorpicker_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_85colorpicker_bem.js' }
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
                            elemMods: { color: 'ff2400' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'orange' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'yellow' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: '00fd00' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'cyan' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: '0d76fc' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'magenta' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'white' }
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
                            elemMods: { color: 'ff2400' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'orange' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'yellow' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: '00fd00' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'cyan' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: '0d76fc' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'magenta' }
                        }
                    },
                    {
                        elem: 'colorpicker',
                        content: {
                            elem: 'button',
                            elemMods: { color: 'white' }
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
