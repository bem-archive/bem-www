({
    block: 'b-page',
    title: 'b-form-slider',
    head: [
        { elem: 'css', url: '_70custom_bem.css', ie: false },
        { elem: 'css', url: '_70custom_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_70custom_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_70custom_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_70custom_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_70custom_bem.js' }
    ],
    content: [
        {
            block: 'i-lego-example',
            content: [
                {
                    block: 'b-form-slider',
                    mods: { type: 'range', theme: 'custom', size: 'xs' },
                    js: {
                        min: 50,
                        max: 175,
                        scale: [
                            { value: 0, step: 10 },
                            { value: 50, step: 10, percent: 20, label: '50' },
                            { value: 160, step: 10, percent: 60, label: '160' },
                            { value: 180, step: 10, percent: 80, label: '180' },
                            { value: 250 }
                        ]
                    },
                    content: {
                        elem: 'info',
                        elemMods: { preset: 'custom' },
                        content: [
                            {
                                elem: 'title',
                                content: 'ПлЮшки да РоГалики'
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 70,
                                content: { elem: 'input' }
                            },
                            {
                                elem: 'unit',
                                content: 'рогаликов'
                            },
                            {
                                block: 'b-form-input',
                                mods: { theme: 'grey' },
                                value: 150,
                                content: { elem: 'input' }
                            },
                            {
                                elem: 'unit',
                                content: 'бубликов'
                            }
                        ]

                    }
                }
            ]
        }
    ]
})
