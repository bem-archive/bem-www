({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_47theme-black_bem.css', ie: false },
        { elem: 'css', url: '_47theme-black_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_47theme-black_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_47theme-black_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_47theme-black_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_47theme-black_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'black-s', size: 's' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка чёрного цвета размером S'
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-s', size: 's' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета размером S'
                    }
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                        content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-s', size: 's', disabled: 'yes' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета неактивный размером S'
                    }
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'black-m', size: 'm' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка чёрного цвета размером M'
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-m', size: 'm' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета размером M'
                    }
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-m', size: 'm', disabled: 'yes' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета неактивный размером M'
                    }
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'black-l', size: 'l' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка чёрного цвета размером L'
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-l', size: 'l' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета размером L'
                    }
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-l', size: 'l', disabled: 'yes' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета неактивный размером L'
                    }
                }
            },
            {
                tag: 'p',
                content: {
                    block: 'b-form-button',
                    mods: { theme: 'black-xl', size: 'xl' },
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка чёрного цвета размером XL'
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-xl', size: 'xl' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета размером XL'
                    }
                }
            },
            {
                tag: 'form',
                attrs: { action: 'bbb' },
                content: {
                    tag: 'p',
                    content: {
                        block: 'b-form-button',
                        mods: { theme: 'black-xl', size: 'xl', disabled: 'yes' },
                        type: 'submit',
                        name: 'my-submit',
                        value: 'my-value',
                        content: 'Я.Submit чёрного цвета неактивный размером XL'
                    }
                }
            }
        ]
    }
})