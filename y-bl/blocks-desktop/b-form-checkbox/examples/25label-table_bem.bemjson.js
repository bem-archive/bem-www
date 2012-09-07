({
    block: 'b-page',
    title: 'b-form-checkbox',
    head: [
        { elem: 'css', url: '_25label-table_bem.css', ie: false },
        { elem: 'css', url: '_25label-table_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_25label-table_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_25label-table_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_25label-table_bem.ie9.css', ie: 'IE 9' },
        { elem: 'css', url: '_25label-table_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_25label-table_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            elem: 'table',
            tag: 'table',
            attrs: { style: 'border-collapse: collapse' },
            content: {
                elem: 'tr',
                tag: 'tr',
                content: {
                    elem: 'td',
                    tag: 'td',
                    content: {
                        block: 'b-form-checkbox',
                        mods: { theme: 'grey-m', size: 'm' },
                        checkboxAttrs: { id: 'login' },
                        content: { elem: 'label', content: 'запомнить меня' }
                    }
                }
            }
        }
    }
})
