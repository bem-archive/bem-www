({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_20-switch_disabled_bem.css', ie: false },
        { elem: 'css', url: '_20-switch_disabled_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_20-switch_disabled_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_20-switch_disabled_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_20-switch_disabled_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_20-switch_disabled_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'left', type: 'switch', theme: 'switch-m-grey', disabled: 'yes' },
                content: [
                    {
                        elem: 'option',
                        attrs: { value: '0' },
                        content: 'ноль'
                    },
                    {
                        elem: 'option' ,
                        attrs: { value: '1' },
                        content: 'один'
                    }
                ]
            }
        },
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'right', type: 'switch', theme: 'switch-s-grey', disabled: 'yes' },
                content: [
                    {
                        elem: 'option',
                        attrs: { value: '0' },
                        content: 'ноль'
                    },
                    {
                        elem: 'option',
                        attrs: { value: '1' },
                        content: 'один'
                    }
                ]
            }
        }
    ]
})
