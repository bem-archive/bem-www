({
    block: 'b-page',
    title: 'b-form-radio',
    head: [
        { elem: 'css', url: '_42radio-ico-empty_bem.css', ie: false },
        { elem: 'css', url: '_42radio-ico-empty_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_42radio-ico-empty_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_42radio-ico-empty_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_42radio-ico-empty_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js',  url: '_42radio-ico-empty_bem.js' }
    ],
    content: {
        attrs: { style: 'margin: 20px' },
        content: {
            block: 'b-form-radio',
            mods: { size: 'm', theme: 'grey' },
            inputAttrs: { name: 'show_to' },
            content: [
                {
                    elem: 'button',
                    content: [
                        {
                            block: 'b-icon',
                            mix: [{ block: 'b-form-radio', elem: 'ico' }],
                            url: '//yandex.st/lego/_/OSPjMStBlQpYbBPuDuQTWJ_XjxE.png'
                        }
                    ]
                },
                {
                    elem: 'button',
                    content: [
                        {
                            block: 'b-icon',
                            mix: [{ block: 'b-form-radio', elem: 'ico' }],
                            url: '//yandex.st/lego/_/d-mo7JOY5GbMNIBudWygPtPRmJk.png'
                        }
                    ]
                },
                {
                    elem: 'button',
                    content: [
                        {
                            block: 'b-icon',
                            mix: [{ block: 'b-form-radio', elem: 'ico' }],
                            url: '//yandex.st/lego/_/5wB5gPeXKRYg_LYk2bZtm3LiWGA.png'
                        }
                    ]
                },
                {
                    elem: 'button',
                    content: [
                        {
                            block: 'b-icon',
                            mix: [{ block: 'b-form-radio', elem: 'ico' }],
                            url: '//yandex.st/lego/_/sLwtMSa9DguOdmJSiEXkzi8HsPg.png'
                        }
                    ]
                }
            ]
        }
    }
})
