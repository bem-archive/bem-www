({
    block: 'b-page',
        title: 'b-form-input: Поле ввода с сообщением об ошибке',
        head: [
            {
                elem: 'css',
                url: '_40form-input_bem.css',
                ie: false
            },
            { elem: 'css', url: '_40form-input_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_40form-input_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_40form-input_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_40form-input_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_40form-input_bem.js' }
        ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px' },
        content: {
            block: 'b-form-input',
            mods: { theme: 'grey' },
            content: [
                { elem: 'input' },
                {
                    elem: 'message',
                    elemMods: { type: 'error', visibility: 'visible' },
                    content: 'ошибка!'
                }
            ]
        }
    }
})
