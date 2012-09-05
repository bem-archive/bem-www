({
    block: 'b-page',
        title: 'b-form-input: Простая форма',
        head: [
            {
                elem: 'css',
                url: '_97form-input-form_bem.css',
                ie: false
            },
            { elem: 'css', url: '_97form-input-form_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_97form-input-form_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_97form-input-form_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_97form-input-form_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_97form-input-form_bem.js' }
        ],
    content: {
        content: [
            {
                tag: 'h1',
                content: 'Инпуты'
            },
            {
                tag: 'table',
                content: [
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-input',
                                    mods: { theme: 'grey', size: 's' },
                                    content: { elem: 'input' }
                                }
                            },
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-button',
                                    mods: { theme: 'grey', size: 's', theme: 'grey-s' },
                                    type: 'submit',
                                    content: 'Я.Submit'
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
                                    mods: { theme: 'grey' },
                                    content: { elem: 'input' }
                                }
                            },
                            { tag: 'td', content: { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' } } }
                        ]
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-input',
                                    mods: { theme: 'grey' },
                                    content: [
                                        { elem: 'label', content: 'Метка для инпута' },
                                        { elem: 'input' }
                                    ]
                                }
                            },
                            { tag: 'td' }
                        ]
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-input',
                                    mods: { theme: 'grey', size: 's' },
                                    content: { elem: 'input' }
                                }
                            },
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-button',
                                    mods: { size: 's', theme: 'grey-s' },
                                    type: 'submit',
                                    content: 'Я.Submit'
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
                                    mods: { type: 'textarea', theme: 'grey' },
                                    content: [
                                        { elem: 'label', content: 'Метка для текстарии, текстария тянется только вниз' },
                                        { elem: 'input' }
                                    ]
                                }
                            },
                            { tag: 'td' }
                        ]
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                content: [
                                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' }, checkboxAttrs: { id: 'a' } },
                                    '&nbsp;',
                                    { tag: 'label', attrs: { 'for': 'a' }, content: 'Выбери меня' },
                                    '<br/>',
                                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' }, checkboxAttrs: { id: 'b' } },
                                    '&nbsp;',
                                    { tag: 'label', attrs: { 'for': 'b' }, content: 'Выбери меня' },
                                    '<br/>',
                                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' }, checkboxAttrs: { id: 'c' } },
                                    '&nbsp;',
                                    { tag: 'label', attrs: { 'for': 'c' }, content: 'Птица счастья' },
                                    '<br/>',
                                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' }, checkboxAttrs: { id: 'd' } },
                                    '&nbsp;',
                                    { tag: 'label', attrs: { 'for': 'd' }, content: 'Завтрашнего дня' }
                                ]
                            },
                            { tag: 'td' }
                        ]
                    },
                    {
                        tag: 'tr',
                        content: [
                            {
                                tag: 'td',
                                content: {
                                    block: 'b-form-button',
                                    mods: { size: 's', theme: 'grey-s' },
                                    type: 'submit',
                                    content: 'Я.Submit'
                                }
                            },
                            { tag: 'td' }
                        ]
                    }
                ]
            }
        ]
    }
})
