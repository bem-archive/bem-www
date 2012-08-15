({
    block: 'b-page',
    title: 'b-form-slider',
    head: [
        { elem: 'css', url: '_10slider_bem.css', ie: false },
        { elem: 'css', url: '_10slider_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_10slider_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_10slider_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_10slider_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_10slider_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            content: [
                {
                    block: 'b-form-slider',
                    mods: { theme: 'grey',  size: 'xs' },
                    js: {
                        min: 10,
                        max: 300,
                        scale: [
                            { value: 0, step: 10, label: '0' },
                            { value: 10, step: 5, label: '10', percent: 10 },
                            { value: 40, step: 10, label: '40', percent: 40 },
                            { value: 300, step: 20, label: '300', percent: 80 },
                            { value: 500, label: '500' }
                        ]
                    },
                    content: {
                        elem: 'info',
                        elemMods: { preset: 'inline' },
                        content: [
                            {
                                elem: 'title',
                                content: 'Цена'
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                content: { elem: 'input' },
                                value: 40
                            },
                            {
                                elem: 'unit',
                                content: 'руб.'
                            }
                        ]
                    }

                }
            ]
        }
    ]
})
