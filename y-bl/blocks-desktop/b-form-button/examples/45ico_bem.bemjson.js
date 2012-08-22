({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_45ico_bem.css', ie: false },
        { elem: 'css', url: '_45ico_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_45ico_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_45ico_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_45ico_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_45ico_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-l', size: 'l' },
                    url: 'http://ya.ru',
                    content: [
                        {
                            block: 'b-icon',
                            url: 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt: 'Иконка Серпа'
                        },
                        'Я.Ссылка с иконкой серпа'
                    ]
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'simple-grey', type: 'simple', size: 'l' },
                    url: 'http://ya.ru',
                    content: [
                        {
                            block: 'b-icon',
                            url: 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt: 'Иконка Серпа'
                        },
                        'Я.Простая ссылка с иконкой серпа'
                    ]
                }
            }
        ]

    }
})
