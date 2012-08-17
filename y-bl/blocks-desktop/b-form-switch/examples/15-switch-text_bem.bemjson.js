({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_15-switch-text_bem.css', ie: false },
        { elem: 'css', url: '_15-switch-text_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_15-switch-text_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_15-switch-text_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_15-switch-text_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_15-switch-text_bem.js' },
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: [
                'Переключатель в тексте ',
                {
                    block: 'b-form-switch',
                    mods: { position: 'left', type: 'switch', theme: 'switch-s-grey' },
                    name: 'color1',
                    content: [
                        {
                            elem: 'option',
                            content: 'белый'
                        },
                        {
                            elem: 'option',
                            content: 'чёрный'
                        }
                    ]
                },
                ' этот текст размером как в переключателе размера S'
            ]
        },
        {
            attrs: { style: 'margin: 20px' },
            content: [
                'Переключатель в тексте ',
                {
                    block: 'b-form-switch',
                    mods: { position: 'right', type: 'switch', theme: 'switch-m-grey' },
                    content: [
                        {
                            elem: 'option',
                            content: 'белый'
                        },
                        {
                            elem: 'option',
                            content: 'чёрный'
                        }
                    ]
                },
                ' размер перелючателя M'
            ]
        }
    ]
})
