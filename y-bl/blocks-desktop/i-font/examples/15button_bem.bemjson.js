({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_15button_bem.css', ie: false },
        { elem: 'css', url: '_15button_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_15button_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_15button_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_15button_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_15button_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            content: {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-l', size: 'l' },
                    type: 'submit',
                    content: 'Кнопонька'
                }
            }
        }
    ]
})
