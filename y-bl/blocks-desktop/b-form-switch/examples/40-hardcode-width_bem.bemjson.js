({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_40-hardcode-width_bem.css', ie: false },
        { elem: 'css', url: '_40-hardcode-width_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_40-hardcode-width_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_40-hardcode-width_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_40-hardcode-width_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_40-hardcode-width_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            js: true,
            content: [
                {
                    tag: 'p',
                    content: 'По умолчанию, b-form-switch неправильно работает внутри скрытого блока. '
                },
                {
                    tag: 'p',
                    content: [
                        'Для того, чтобы это исправить необходимо самостоятельно вызвать метод ',
                        {
                            tag: 'b', content: 'updateDimmensions()'
                        },
                        ' при отображение. ',
                        {
                            block: 'b-dropdowna',
                            content: [
                                {
                                    elem: 'switcher',
                                    content: {
                                        block: 'b-link',
                                        mods: { pseudo: 'yes' },
                                        url: 'http://www.yandex.ru/all',
                                        content: 'Нажимать тут'
                                    }
                                },
                                {
                                    block: 'b-popupa',
                                    mods: { theme: 'ffffff', direction: 'down' },
                                    content: [
                                        { elem: 'tail' },
                                        {
                                            elem: 'content',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    mods: { 'is': 'first' },
                                                    content: 'Экваториальный дип-скай объект: гипотеза и теории'
                                                },
                                                {
                                                    elem: 'row',
                                                    content: {
                                                        block: 'b-form-switch',
                                                        mods: { position: 'left', type: 'toggle', theme: 'toggle-s-grey' },
                                                        name: 'sex',
                                                        content: [
                                                            {
                                                                elem: 'option',
                                                                attrs: { value: 'on' },
                                                                content: 'Вкл.'
                                                            },
                                                            {
                                                                elem: 'option',
                                                                attrs: { value: 'off' },
                                                                content: 'Выкл.'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'row',
                                                    mods: { 'is': 'last' },
                                                    content: {
                                                        block: 'b-form-button',
                                                        mods: { theme: 'grey-s', size: 's' },
                                                        type: 'submit',
                                                        content: 'Установить значение по умолчанию'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'i-lego-example',
            js: true,
            content: [
                'Либо задайте ширину сами, переопределив метод ',
                {
                    tag: 'b', content: 'getLabelWidth()'
                },
                '. ',
                {
                    block: 'b-dropdowna',
                    content: [
                        {
                            elem: 'switcher',
                            content: {
                                block: 'b-link',
                                mods: { pseudo: 'yes', 'is-bem': 'yes' },
                                url: 'http://www.yandex.ru/all',
                                content: 'Ткни меня'
                            }
                        },
                        {
                            block: 'b-popupa',
                            mods: { theme: 'ffffff', direction: 'down' },
                            content: [
                                { elem: 'tail' },
                                {
                                    elem: 'content',
                                    content: {
                                        block: 'b-form-switch',
                                        mods: { position: 'left', type: 'toggle', theme: 'toggle-m-grey' },
                                        name: 'sex',
                                        content: [
                                            {
                                                elem: 'option',
                                                attrs: { value: 'on' },
                                                content: 'Вкл.'
                                            },
                                            {
                                                elem: 'option',
                                                attrs: { value: 'off' },
                                                content: 'Выкл.'
                                            }
                                        ]
                                    }
                                }
                            ]
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
})
