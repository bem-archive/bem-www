({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_60link-float_bem.css', ie: false },
        { elem: 'css', url: '_60link-float_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_60link-float_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_60link-float_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_60link-float_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_60link-float_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: {
            block: 'b-form',
            url: 'bbb',
            content: {
                tag: 'table',
                cls: 'b-form__table',
                attrs: { cellpadding: 0, cellspacing: 0 },
                content: {
                    tag: 'tr',
                    content: [
                        {
                            tag: 'td',
                            attrs: { style: 'background: #9acd32;' },
                            content: [
                                {
                                    block: 'b-form-button',
                                    mods: { 'float': 'right', theme: 'grey-s', size: 's' },
                                    url: 'http://ya.ru',
                                    content: 'Ссылка float right'
                                },
                                {
                                    block: 'b-form-button',
                                    mods: { 'type': 'simple', 'theme': 'simple-grey', 'size': 's', 'float': 'left' },
                                    url: '//ya.ru',
                                    content: 'Простая ссылка float left'
                                },
                                {
                                    tag: 'p',
                                    content: 'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и играя, грохочет в небе голубом. Гремят раскаты молодые, вот дождик брызнул, пыль летит, повисли перлы дождевые и солнце нити золотит. С горы бежит поток проворный, в лесу не молкнет птичий гам. И гам лесной, и шум нагорный - все вторит весело громам.'
                                }
                            ]
                        },
                        {
                            tag: 'td',
                            attrs: { style: 'background: #6495ed;' },
                            content: [
                                {
                                    block: 'b-form-button',
                                    mods: { 'float': 'left', 'theme': 'grey-s', 'size': 's' },
                                    type: 'button',
                                    content: 'Button float left'
                                },
                                {
                                    block: 'b-form-button',
                                    mods: { type: 'simple', 'float': 'right', 'theme': 'simple-grey', 'size': 's' },
                                    type: 'button',
                                    content: 'Просто button float right'
                                },
                                {
                                    tag: 'p',
                                    content: 'Люблю грозу в начале мая, когда весенний, первый гром как бы резвяся и играя, грохочет в небе голубом. Гремят раскаты молодые, вот дождик брызнул, пыль летит, повисли перлы дождевые и солнце нити золотит. С горы бежит поток проворный, в лесу не молкнет птичий гам. И гам лесной, и шум нагорный - все вторит весело громам.'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
})
