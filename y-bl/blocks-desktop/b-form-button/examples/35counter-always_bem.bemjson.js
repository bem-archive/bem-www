({
    block: 'b-page',
    title: 'b-form-button with-counter',
    head: [
        { elem: 'css', url: '_35counter-always_bem.css', ie: false },
        { elem: 'css', url: '_35counter-always_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_35counter-always_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_35counter-always_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_35counter-always_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_35counter-always_bem.js' }
    ],
    content: {
        block: 'b-form',
        attrs: { action: 'http://ya.ru/', method: 'get' },
        content: [
        {
            attrs: { style: 'margin: 20px 0 20px 20px;' },
            content: [
                {
                    block: 'b-form-button',
                    type: 'button',
                    mods: { theme: 'grey-m', size: 'm', counter: 'yes', valign: 'middle' },
                    counter: 123,
                    content: 'Я.Кнопка'
                },
                ' — со счётчиком с вероятностью показа по умолчанию'
            ]
        },
        {
            attrs: { style: 'margin: 20px 0 20px 20px;' },
            content: [
                {
                    block: 'b-form-button',
                    type: 'submit',
                    mods: { theme: 'grey-m', size: 'm',  counter: 'yes', valign: 'middle' },
                    counter: 123,
                    'show-counter': 50,
                    content: 'Я.Сабмит'
                },
                ' — у которой есть счётчик в половине случаев'
            ]
        },
        {
            attrs: { style: 'margin: 20px 0 20px 20px;' },
            content: [
                {
                    block: 'b-form-button',
                    mods: { theme: 'grey-m', size: 'm', counter: 'yes', valign: 'middle' },
                    counter: 123,
                    'show-counter': 100,
                    url: 'http://ya.ru',
                    content: 'Я.Ссылка'
                },
                ' — у которой всегда есть счётчик'
            ]
        }
    ]
    }
})
