({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_90-toggle-few-more_bem.css', ie: false },
        { elem: 'css', url: '_90-toggle-few-more_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_90-toggle-few-more_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_90-toggle-few-more_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_90-toggle-few-more_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_90-toggle-few-more_bem.js' }
    ],
    content: {
        block: 'b-example',
        js: true,
        content: [
            {
                tag: 'h2',
                attrs: { style: 'font-size:150%; margin-top:.5em;' },
                content: 'В тексте'
            },
            {
                tag: 'p',
                content: [
                    'Пол ',
                    {
                        block: 'b-form-switch',
                        mods: { position: 'left', type: 'toggle', theme: 'toggle-m-grey' },
                        name: 'sex',
                        content: [
                            {
                                elem: 'option',
                                attrs: { value: 'male' },
                                content: 'мужской'
                            },
                            {
                                elem: 'option',
                                attrs: { value: 'female' },
                                content: 'женский'
                            }
                        ]
                    },
                    '. Мы спрашиваем это исключительно потому что склоняем все обращения по сайту и для этого нам нужно знать, как к вам обращаться, дорогой/ая. Ну, это и статистика.'
                ]
            },
            {
                tag: 'h2',
                attrs: { style: 'font-size:150%; margin-top:1em;' },
                content: 'Текст в лейбе разной длины'
            },
            {
                tag: 'p',
                content: 'А сейчас мы поинтересуемся вашим полом.'
            },
            {
                block: 'b-form-switch',
                mods: { position: 'left', type: 'toggle', theme: 'toggle-m-grey' },
                name: 'sex2',
                content: [
                    {
                        elem: 'option',
                        attrs: { value: 'male' },
                        content: 'Вы знаете, я мужчина'
                    },
                    {
                        elem: 'option',
                        attrs: { value: 'female' },
                        content: 'Ура, я женщина!'
                    }
                ]
            },
            {
                tag: 'div',
                attrs: { style: 'background: #1B4F88; color: white; margin-top:1em; padding:.5em;' },
                content: [
                    {
                        tag: 'p',
                        content: 'Открывать ссылки в новом окне?'
                    },
                    {
                        block: 'b-form-switch',
                        mods: { position: 'left', type: 'toggle', theme: 'toggle-m-grey' },
                        name: 'smoke',
                        content: [
                            {
                                elem: 'option',
                                attrs: { value: 'male' },
                                content: 'Да, пожалуйста'
                            },
                            {
                                elem: 'option',
                                attrs: { value: 'female' },
                                content: 'Нет, спасибо'
                            }
                        ]
                    }
                ]
            },
            {
                block: 'i-global',
                content: { elem: 'reset' }
            }
        ]
    }
})
