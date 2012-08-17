({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            {
                elem: 'css',
                url: '_93arrow_bem.css',
                ie: false
            },

            { elem: 'css', url: '_93arrow_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_93arrow_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_93arrow_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_93arrow_bem.ie9.css', ie: 'IE 9' },

            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_93arrow_bem.js' }
        ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-no-transparent-m', size: 'm' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером m, непрозрачная'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { theme: 'grey-arrow-no-transparent-l', size: 'l' },
                url: 'http://ya.ru',
                content: 'Я.Ссылка-стрелка серого цвета размером l, непрозрачная'
            }
        }

    ]
})
