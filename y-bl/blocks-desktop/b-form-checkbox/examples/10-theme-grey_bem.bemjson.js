 ({
    block: 'b-page',
    title: 'b-form-checkbox',
    head: [
        { elem: 'css', url: '_10-theme-grey_bem.css', ie: false },
        { elem: 'css', url: '_10-theme-grey_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_10-theme-grey_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_10-theme-grey_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_10-theme-grey_bem.ie9.css', ie: 'IE 9' },
        { elem: 'css', url: '_10-theme-grey_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_10-theme-grey_bem.js' }
    ],
    content: [
        {
            tag: 'p',
            content: [
                '_size_m: ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-m' } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm', checked: 'yes' } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm', disabled: 'yes' } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm', disabled: 'yes', checked: 'yes' } }
            ]
        },
        '<br/>',
        {
            tag: 'p',
            content: [
                '_size_l: ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-l', size: 'l' }, checkboxAttrs: { id: 'nnn', value: 'iu', accesskey: 'kj', name: 'text', tabindex: 1 } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-l', size: 'l', checked: 'yes' } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-l', size: 'l', disabled: 'yes' } }, ' ',
                { block: 'b-form-checkbox', mods: { theme: 'grey-l', size: 'l', disabled: 'yes', checked: 'yes' } }
            ]
        }
    ]
})
