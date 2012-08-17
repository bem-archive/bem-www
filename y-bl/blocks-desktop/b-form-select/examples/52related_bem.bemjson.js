({
    block: 'b-page',
    title: 'b-form-select dynamic',
    head: [
        { elem: 'css', url: '_52related_bem.css', ie: false },
        { elem: 'css', url: '_52related_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_52related_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_52related_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_52related_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_52related_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        js: true,
        content: {
            block: 'b-form',
            attrs: { action: '#!/' },
            content: [
                'Страна: ',
                {
                    block: 'b-form-select',
                    name: 'country',
                    mods: { size: 'm', theme: 'grey' },
                    content: [
                        {
                            block: 'b-form-button',
                            mods: { valign: 'middle', size: 'm', theme: 'grey-m' },
                            type: 'button',
                            content: 'Россия'
                        },
                        {
                            elem: 'select',
                            content: [
                                {
                                    elem: 'option',
                                    attrs: { value: 'ru' },
                                    content: 'Россия'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'ua' },
                                    content: 'Украина'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'be' },
                                    content: 'Беларусь'
                                }
                            ]
                        }
                    ]
                },
                ' город: ',
                {
                    block: 'b-form-select',
                    name: 'city',
                    mods: { size: 'm', theme: 'grey' },
                    content: [
                        {
                            block: 'b-form-button',
                            mods: { valign: 'middle', size: 'm', theme: 'grey-m' },
                            type: 'button',
                            content: 'Москва'
                        },
                        {
                            elem: 'select',
                            content: [
                                {
                                    elem: 'option',
                                    attrs: { value: 'msk' },
                                    content: 'Москва'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'spb' },
                                    content: 'Санкт-Петербург'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'krs' },
                                    content: 'Красноярск'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'simf' },
                                    content: 'Симферополь'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'sev' },
                                    content: 'Севастополь'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'krc' },
                                    content: 'Керчь'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'minsk' },
                                    content: 'Минск'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'brest' },
                                    content: 'Брест'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
})
