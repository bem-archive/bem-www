({
    block: 'b-page',
    title: 'b-form-radio',
    head: [
        { elem: 'css', url: '_35radio-empty_bem.css', ie: false },
        { elem: 'css', url: '_35radio-empty_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_35radio-empty_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_35radio-empty_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_35radio-empty_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_35radio-empty_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 's', theme: 'grey' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        inputAttrs: { value: 'all' },
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'friends' },
                        content: 'только друзьям'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'me' }
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'other' },
                        content: 'только не мне'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 'm', theme: 'grey' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        inputAttrs: { value: 'all' },
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'friends' }
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'me' },
                        content: 'только мне'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'other' },
                        content: 'только не мне'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-radio',
                mods: { size: 'l', theme: 'grey' },
                inputAttrs: { name: 'show_to' },
                content: [
                    {
                        elem: 'button',
                        inputAttrs: { value: 'all' },
                        content: 'виден всем'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'friends' },
                        content: 'только друзьям'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'me' },
                        content: 'только мне'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'other' }
                    }
                ]
            }
        }
    ]
})
