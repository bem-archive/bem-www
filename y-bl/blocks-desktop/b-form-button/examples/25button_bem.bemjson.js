({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_25button_bem.css', ie: false },
        { elem: 'css', url: '_25button_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_25button_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_25button_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_25button_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_25button_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        js: true,
        content: [
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-s', size: 's', action: 'click' },
                    type: 'button',
                    content: 'Я.Button'
                }
            },
            {
                block: 'b-popupa',
                content: [{
                    elem: 'tail'
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'b-form',
                            url: 'aaa',
                            content: [
                                {
                                    block: 'b-form-input',
                                    mods: { theme: 'grey', size: 's'},
                                    js: { autofocus: true },
                                    content: [
                                        { elem: 'label', content: 'Введите свой адресс' },
                                        { elem: 'input' },
                                        {
                                            elem: 'samples',
                                            content: [
                                                {
                                                    elem: 'sample',
                                                    content: {
                                                        block: 'b-link',
                                                        mods: { pseudo: 'yes' },
                                                        content: 'lento4ka@yandex-team.ru'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-form-button',
                                    mods: {theme: 'grey-s', size: 's'},
                                    attrs: { type: 'submit' },
                                    content: 'Отправить'
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    }
})
