({
    block: 'b-page',
    title: 'b-form-checkbox',
    head: [
        { elem: 'css', url: '_30complex_bem.css', ie: false },
        { elem: 'css', url: '_30complex_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_30complex_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_30complex_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_30complex_bem.ie9.css', ie: 'IE 9' },
        { elem: 'css', url: '_30complex_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_30complex_bem.js' }
    ],
    content: {
        block: 'b-my-table',
        tag: 'table',
        content: [{
            tag: 'tr',
            attrs: { style: 'background: #F4C724;' },
            content: [{
                tag: 'td',
                attrs: { colspan: 3 },
                content: {
                    block: 'b-static-text',
                    content: {
                        tag: 'p',
                        content: [
                            'Для того, чтобы Яндекс выглядел аккуратнее и развивался в одном стиле, были разработаны декоративные ',
                            '(нестандартные для операционной системы) элементы. Одним из таких элементов является ',
                            { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' } },
                            ' чекбокс. ',
                            'У чекбокса можно поменять цвет текста и тон. Если поставить на цветной фон, то она принимает тон фона-подложки.'
                        ]
                    }
                }
            }]
        },
        {
            tag: 'tr',
            attrs: { style: 'background: #1B4F88; color: #FFF;' },
            content: [{
                tag: 'td',
                attrs: { style: 'text-align: left; vertical-align: top;' },
                content: [
                    'Влево ',
                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' } }
                ]
            },
            {
                tag: 'td',
                attrs: { style: 'text-align: center; vertical-align: middle;' },
                content: [
                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' } },
                    ' по центру'
                ]
            },
            {
                tag: 'td',
                attrs: { style: 'text-align: right; vertical-align: bottom;' },
                content: [
                    { block: 'b-form-checkbox', mods: { theme: 'grey-m', size: 'm' } },
                    ' и внизу'
                ]
            }]
        }]
    }
})
