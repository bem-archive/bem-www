({
    block: 'b-page',
    title: 'b-form-radio',
    head: [
        { elem: 'css', url: '_60complex_bem.css', ie: false },
        { elem: 'css', url: '_60complex_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_60complex_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_60complex_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_60complex_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_60complex_bem.js' }
    ],
    content: {
        block: 'my-form',
        tag: 'form',
        attrs: { action: 'bbb' },
        content: {
            block: 'my-table',
            tag: 'table',
            content: [
                {
                    tag: 'tr',
                    attrs: { style: 'background: #66cc33;' },
                    content: {
                        tag: 'td',
                        content: [
                            'Для того, чтобы Яндекс выглядел аккуратнее и развивался в одном стиле, были разработаны декоративные ',
                            '(нестандартные для операционной системы) элементы. ',
                            'Одним из таких элементов является ',
                            {
                                block: 'b-form-radio',
                                mods: { size: 's', theme: 'grey' },
                                inputAttrs: { name: 'sex' },
                                content: [
                                    {
                                        elem: 'button',
                                        elemMods: { checked: 'yes' },
                                        content: 'М'
                                    },
                                    {
                                        elem: 'button',
                                        content: 'Ж'
                                    },
                                    {
                                        elem: 'button',
                                        content: '—'
                                    }
                                ]
                            },
                            'радио-кнопка. У радио-кнопки можно поменять цвет текста и тон. ',
                            'Если поставить на цветной фон, то она принимает тон фона-подложки.'
                        ]
                    }
                },
                {
                    tag: 'tr',
                    attrs: { style: 'background: #36c; color: #fff;' },
                    content: {
                        tag: 'td',
                        attrs: { style: 'text-align: left' },
                        content: [
                            'Радиогруппа: ',
                            {
                                block: 'b-form-radio',
                                mods: { size: 'm', theme: 'grey' },
                                inputAttrs: { name: 'sex' },
                                content: [
                                    {
                                        elem: 'button',
                                        elemMods: { checked: 'yes' },
                                        content: 'М'
                                    },
                                    {
                                        elem: 'button',
                                        content: 'Ж'
                                    },
                                    {
                                        elem: 'button',
                                        content: '—'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }
})
