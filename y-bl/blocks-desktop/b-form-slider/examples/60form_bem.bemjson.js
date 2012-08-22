({
    block: 'b-page',
    title: 'b-form-slider',
    head: [
        { elem: 'css', url: '_60form_bem.css', ie: false },
        { elem: 'css', url: '_60form_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_60form_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_60form_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_60form_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_60form_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            mods: { row: 'yes'},
            content:[
                {
                    block: 'b-form-button',
                    mods: { valign: 'middle', theme: 'grey-s', size: 's' },
                    type: 'submit',
                    content: 'Кнопка'
                },
                {
                    block: 'b-form-radio',
                    mods: { size: 's', theme: 'grey' },
                    content: [
                        {
                            elem: 'button',
                            elemMods: { checked: 'yes' },
                            inputAttrs: { value: 'radio' },
                            content: 'Радио'
                        },
                        {
                            elem: 'button',
                            inputAttrs: { value: 'group' },
                            content: 'группа'
                        }
                    ]
                },
                {
                    block: 'b-form-checkbox',
                    mods: { theme: 'grey-m', size: 'm' },
                    content: { elem: 'label', content: 'чекбокс' }
                },
                {
                    block: 'b-form-select',
                    name: 'mail',
                    mods: { size: 's', theme: 'grey' },
                    content: [
                        {
                            block: 'b-form-button',
                            type: 'button',
                            mods: { size: 's', theme: 'grey-s', valign: 'middle' },
                            content: 'Селект'
                        },
                        {
                            elem: 'select',
                            content: [
                                {
                                    elem: 'option',
                                    attrs: { value: 'select' },
                                    content: 'Селект'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: '1' },
                                    content: '1'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: '2' },
                                    content: '2'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'i-lego-example',
            mods: { row: 'yes'},
            content: [
                {
                    block: 'b-form-slider',
                    mods: { type: 'range', theme: 'grey', size: 'xs', input: 'hidden' },
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            { value: 0, step: 10 },
                            { value: 100 }
                        ]
                    },
                    content: {
                        elem: 'info',
                        content: [
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 30,
                                content: { elem: 'input' }
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 70,
                                content: { elem: 'input' }
                            }
                        ]
                    }
                }
            ]
        },
        {
            block: 'i-lego-example',
            mods: { row: 'yes'},
            content: [
                {
                    block: 'b-form-input',
                    mods: { theme: 'grey', size: 's', 'has-clear': 'yes' },
                    content: [
                        { elem: 'hint', content: 'Инпут' },
                        { elem: 'input', clear: { elem: 'clear' } }
                    ]
                }
            ]
        },
        {
            block: 'i-lego-example',
            mods: { row: 'yes'},
            content: [
                {
                    block: 'b-form-input',
                    mods: { theme: 'grey', type: 'textarea' },
                    content: [
                        { elem: 'hint', content: 'Текстовая область' },
                        { elem: 'input' }
                    ]
                }
            ]
        }
    ]

})
