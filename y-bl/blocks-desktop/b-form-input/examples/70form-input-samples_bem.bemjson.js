({
    block: 'b-page',
        title: 'b-form-input: Поля ввода в таблице',
        head: [
            {
                elem: 'css',
                url: '_70form-input-samples_bem.css',
                ie: false
            },
            { elem: 'css', url: '_70form-input-samples_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_70form-input-samples_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_70form-input-samples_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_70form-input-samples_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_70form-input-samples_bem.js' }
        ],
    content: {
        tag: 'form',
        attrs: { action: '/' },
        content: {
            block: 'mytable',
            tag: 'table',
            content: {
                tag: 'tr',
                content: [
                    {
                        elem: 'td',
                        mods: { type: 'first' },
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                content: [
                                    { elem: 'label', content: 'Метка для инпута' },
                                    { elem: 'input' },
                                    { elem: 'message', elemMods: { type: 'error', visibility: 'visible' }, content: 'Ошиблись, бывает' },
                                    {
                                        elem: 'samples',
                                        content: [
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 1' }
                                            },
                                            ', ',
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 2' }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    {
                        elem: 'td',
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                content: [
                                    { elem: 'hint', content: 'Подсказка' },
                                    { elem: 'input' },
                                    {
                                        elem: 'samples',
                                        content: [
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 1' }
                                            },
                                            ', ',
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 2' }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    {
                        elem: 'td',
                        mods: { type: 'last' },
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'b-form-input',
                                mods: { type: 'textarea', theme: 'grey' },
                                content: [
                                    { elem: 'hint', content: 'Подсказка для текстовой области' },
                                    { elem: 'input' },
                                    {
                                        elem: 'samples',
                                        content: [
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 1' }
                                            },
                                            ', ',
                                            {
                                                elem: 'sample',
                                                content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 2' }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
})
