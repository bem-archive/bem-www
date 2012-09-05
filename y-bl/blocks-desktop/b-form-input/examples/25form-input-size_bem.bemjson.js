({
    block: 'b-page',
        title: 'b-form-input: Поле ввода в разных размерах с соответствующими кнопками',
        head: [
            {
                elem: 'css',
                url: '_25form-input-size_bem.css',
                ie: false
            },
            { elem: 'css', url: '_25form-input-size_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_25form-input-size_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_25form-input-size_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_25form-input-size_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_25form-input-size_bem.js' }
        ],
    content: {
        tag: 'table',
        attrs: { style: 'width: 400px;  margin: 0 20px; border-collapse: collapse' },
        content: [
            {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        attrs: { style: 'width: 70%' },
                        content: {
                            block: 'b-form-input',
                            mods: { theme: 'grey', size: 's', 'has-clear': 'yes' },
                            content: [
                                { elem: 'hint', content: 'Подсказка' },
                                { elem: 'input', clear: { elem: 'clear' } }
                            ]
                        }
                    },
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-button',
                            mods: { theme: 'grey', size: 's', theme: 'grey-s' },
                            url: '//ya.ru',
                            content: 'Кнопка размером s'
                        }
                    }
                ]
            },
            {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-input',
                            mods: { theme: 'grey', size: 'm', 'has-clear': 'yes' },
                            content: [
                                { elem: 'hint', content: 'Подсказка' },
                                { elem: 'input', clear: { elem: 'clear' } }
                            ]
                        }
                    },
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-button',
                            mods: { theme: 'grey', size: 'm', theme: 'grey-m' },
                            url: '//ya.ru',
                            content: 'Кнопка размером m'
                        }
                    }
                ]
            },
            {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-input',
                            mods: { theme: 'grey', size: 'l', 'has-clear': 'yes' },
                            content: [
                                { elem: 'hint', content: 'Подсказка' },
                                { elem: 'input', clear: { elem: 'clear' } }
                            ]
                        }
                    },
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-button',
                            mods: { theme: 'grey', size: 'l', theme: 'grey-l' },
                            url: '//ya.ru',
                            content: 'Кнопка размером l'
                        }
                    }
                ]
            },
            {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-input',
                            mods: { theme: 'grey', size: 'xl', 'has-clear': 'yes' },
                            content: [
                                { elem: 'hint', content: 'Подсказка' },
                                { elem: 'input', clear: { elem: 'clear' } }
                            ]
                        }
                    },
                    {
                        tag: 'td',
                        content: {
                            block: 'b-form-button',
                            mods: { theme: 'grey', size: 'xl', theme: 'grey-xl' },
                            url: '//ya.ru',
                            content: 'Кнопка размером xl'
                        }
                    }
                ]
            }
        ]
    }
})
