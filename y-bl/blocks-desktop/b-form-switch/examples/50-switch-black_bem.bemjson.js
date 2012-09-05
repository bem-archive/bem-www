({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_50-switch-black_bem.css',ie: false },
        { elem: 'css', url: '_50-switch-black_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_50-switch-black_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_50-switch-black_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_50-switch-black_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_50-switch-black_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'left', type: 'switch', theme: 'switch-s-black' },
                name: 'color1',
                content: [
                    {
                        elem: 'option',
                        content: 'белый'
                    },
                    {
                        elem: 'option',
                        content: 'чёрный'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'right', type: 'switch', theme: 'switch-m-black' },
                name: 'color2',
                content: [
                    {
                        elem: 'option',
                        content: 'белый'
                    },
                    {
                        elem: 'option',
                        content: 'чёрный'
                    }
                ]
            }
        }
    ]
})
