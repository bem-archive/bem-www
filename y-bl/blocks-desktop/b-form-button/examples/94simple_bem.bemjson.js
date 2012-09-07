({
    block: 'b-page',
        title: 'b-form-button',
        head: [
            { elem: 'css', url: '_94simple_bem.css', ie: false },
            { elem: 'css', url: '_94simple_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_94simple_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_94simple_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_94simple_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_94simple_bem.js' }
        ],
    content: [
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', theme: 'simple-grey', size: 's' },
                url: '/',
                content: 'Я.Простая кнопка-ссылка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', theme: 'simple-grey', size: 'm' },
                url: '/',
                content: 'Я.Простая кнопка-ссылка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', theme: 'simple-grey', size: 'l' },
                url: '/',
                content: 'Я.Простая кнопка-ссылка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', theme: 'simple-grey', size: 'xl' },
                url: '/',
                content: 'Я.Простая кнопка-ссылка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', theme: 'simple-blue', size: 's' },
                type: 'button',
                content: 'Я.Простая кнопка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', size: 'm', theme: 'simple-blue' },
                type: 'button',
                content: 'Я.Простая кнопка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', size: 'l', theme: 'simple-blue' },
                type: 'button',
                content: 'Я.Простая кнопка'
            }
        },
        {
            tag: 'p',
            content: {
                block: 'b-form-button',
                mods: { type: 'simple', size: 'xl', theme: 'simple-blue', disabled: 'yes' },
                type: 'button',
                content: 'Я.Простая кнопка'
            }
        }

    ]
})
