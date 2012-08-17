({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_30link_bem.css', ie: false },
        { elem: 'css', url: '_30link_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_30link_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_30link_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_30link_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_30link_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'grey-s', size: 's' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка'
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { type: 'simple', theme: 'simple-grey', size: 's' },
                    url: 'http://ya.ru',
                    content: 'Я.Простая ссылка'
                }
            }
        ]
    }
})
