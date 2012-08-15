({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_55-toggle-black_bem.css', ie: false },
        { elem: 'css', url: '_55-switch-black_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_55-switch-black_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_55-switch-black_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_55-switch-black_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_55-toggle-black_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'left', type: 'toggle', theme: 'toggle-s-black' },
                name: 'on-off',
                content: [
                    {
                        elem: 'option',
                        content: 'вкл'
                    },
                    {
                        elem: 'option',
                        content: 'выкл'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'right', type: 'toggle', theme: 'toggle-m-black' },
                name: 'on-off',
                content: [
                    {
                        elem: 'option',
                        content: 'вкл'
                    },
                    {
                        elem: 'option',
                        content: 'выкл'
                    }
                ]
            }
        }
    ]
})
