({
    block: 'b-page',
    title: 'b-popupa',
    head: [
        { elem: 'css', url: '_60popup_bem.css', ie: false },
        { elem: 'css', url: '_60popup_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_60popup_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_60popup_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_60popup_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_60popup_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        js: true,
        content:
        [
            {
                block: 'b-link',
                mods: { pseudo: 'yes', 'is-bem': 'yes' },
                content: 'Кликать сюда'
            },
            {
                block: 'b-popupa',
                mods: { theme: 'ffffff', direction: 'down' },
                content:[
                {
                   elem: 'tail'
                },
                {
                    elem: 'content',
                    content: {
                        block: 'b-form-select',
                        name: 'mail',
                        mods: { size: 's', theme: 'grey' },
                        content: [
                            {
                                block: 'b-form-button',
                                type: 'button',
                                mods: { size: 's', theme: 'grey-s', valign: 'middle' },
                                content: 'Отправленные'
                            },
                            {
                                elem: 'select',
                                content: [
                                    {
                                        elem: 'option',
                                        attrs: { value: 'send' },
                                        content: 'Отправленные'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'draft' },
                                        content: 'Черновики'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'inbox' },
                                        content: 'Входящие'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'del' },
                                        content: 'Удаленные'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'ring' },
                                        content: 'Звенящие'
                                    },
                                    {
                                        elem: 'option-group',
                                        attrs: { label: 'Опшен груп' },
                                        content: [
                                            {
                                                elem: 'option',
                                                attrs: { value: 'tvc' },
                                                content: 'ТВЦ'
                                            },
                                            {
                                                elem: 'option',
                                                attrs: { value: 'ng' },
                                                content: 'National Geographic'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'option-group',
                                        attrs: { label: 'Еще группа' },
                                        content: [
                                            {
                                                elem: 'option',
                                                attrs: { value: 'poisoned' },
                                                content: 'Отравленные'
                                            },
                                            {
                                                elem: 'option',
                                                attrs: { value: 'exploded' },
                                                content: 'Взорванные'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'unknown' },
                                        content: 'Непознанные'
                                    }
                                ]
                            }
                        ]
                    }
                }]
            }
        ]
    }
})
