({
    block: 'b-page',
        title: 'b-form-input: Черная тема',
        head: [
            {
                elem: 'css',
                url: '_12form-input-black_bem.css',
                ie: false
            },
            { elem: 'css', url: '_12form-input-black_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_12form-input-black_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_12form-input-black_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_12form-input-black_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_12form-input-black_bem.js' }
        ],
    content: [
        {
            attrs: { style: 'width: 400px; padding: 20px 20px; background: #272727;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'black', 'has-clear': 'yes', size: 's' },
                content: [
                    { elem: 'hint', content: 'Текст надписи' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ] 
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 20px 20px; background: #272727;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'black', disabled: 'yes', size: 's' },
                value: 'задисейбленное поле',
                content: { elem: 'input' }
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 20px 20px; background: #000;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'black', 'has-clear': 'yes', size: 's' },
                content: [
                    { elem: 'hint', content: 'Текст надписи' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 20px 20px; background: #000;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'black', disabled: 'yes', size: 's' },
                value: 'задисейбленное поле',
                content: { elem: 'input' }
            }
        }
    ]
})
