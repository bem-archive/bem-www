({
    block: 'b-page',
        title: 'b-form-input: Поле ввода неактивно',
        head: [
            {
                elem: 'css',
                url: '_45form-input-disabled_bem.css',
                ie: false
            },
            { elem: 'css', url: '_45form-input-disabled_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_45form-input-disabled_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_45form-input-disabled_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_45form-input-disabled_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_45form-input-disabled_bem.js' }
        ],
    content: {
        attrs: { style: 'width: 400px; margin: 20px' },
        content: [
            {
                block: 'b-form-input',
                mods: { theme: 'grey', disabled: 'yes' },
                value: 'Я неактивная текстовая область',
                content: { elem: 'input' }
            },
            '<br/><br/>',
            {
                block: 'b-form-input',
                mods: { theme: 'grey', type: 'textarea', disabled: 'yes' },
                value: 'Я неактивная текстовая область',
                content: { elem: 'input' }
            }
        ]
    }
})
