({
    block: 'b-page',
        title: 'b-form-input: Поле ввода с кнопкой очистки',
        head: [
            {
                elem: 'css',
                url: '_35form-input-clear_bem.css',
                ie: false
            },
            { elem: 'css', url: '_35form-input-clear_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_35form-input-clear_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_35form-input-clear_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_35form-input-clear_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_35form-input-clear_bem.js' }
        ],
    content: [
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 's', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'm', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'l', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'xl', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        }
    ]
})
