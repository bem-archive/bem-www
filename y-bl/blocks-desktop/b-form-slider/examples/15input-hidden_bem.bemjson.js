({
    block: 'b-page',
    title: 'b-form-slider_type_range',
    head: [
        { elem: 'css', url: '_15input-hidden_bem.css', ie: false },
        { elem: 'css', url: '_15input-hidden_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_15input-hidden_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_15input-hidden_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_15input-hidden_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_15input-hidden_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            content: [
                {
                    block: 'b-form-slider',
                    mods: { theme: 'grey', size: 'xs', input: 'hidden' },
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            { value: 0, label: '0', step: 10 },
                            { value: 100, label: '100' }
                        ]
                    },
                    content: {
                        elem: 'info',
                        content: [
                            {
                                elem: 'title',
                                content: 'Слайдер'
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 30,
                                content: { elem: 'input' }
                            }
                        ]
                    }
                }
            ]
        }
    ]
})
