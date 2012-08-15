({
    block: 'b-page',
    title: 'b-form-radio',
    head: [
        { elem: 'css', url: '_90radio-size-black_bem.css', ie: false },
        { elem: 'css', url: '_90radio-size-black_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_90radio-size-black_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_90radio-size-black_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_90radio-size-black_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_90radio-size-black_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 's', theme: 'black' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        content: 'только друзьям'
                    },
                    {
                        elem: 'button',
                        content: 'только мне'
                    },
                    {
                        elem: 'button',
                        elemMods: { checked: 'yes' },
                        content: 'только не мне'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 'm', theme: 'black' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        content: 'только друзьям'
                    },
                    {
                        elem: 'button',
                        content: 'только мне'
                    },
                    {
                        elem: 'button',
                        elemMods: { checked: 'yes' },
                        content: 'только не мне'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 'l', theme: 'black' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        content: 'только друзьям'
                    },
                    {
                        elem: 'button',
                        content: 'только мне'
                    },
                    {
                        elem: 'button',
                        elemMods: { checked: 'yes' },
                        content: 'только не мне'
                    }
                ]
            }
        }
    ]
})
