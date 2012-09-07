({
    block: 'b-page',
    title: 'b-form-checkbox',
    head: [
        { elem: 'css', url: '_20label_bem.css', ie: false },
        { elem: 'css', url: '_20label_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_20label_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_20label_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_20label_bem.ie9.css', ie: 'IE 9' },
        { elem: 'css', url: '_20label_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_20label_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                block: 'b-form-checkbox',
                mods: { theme: 'grey-m', size: 'm' },
                checkboxAttrs: { id: 'login' },
                content: { elem: 'label', content: 'запомнить меня' }
            }
        ]
    }
})
