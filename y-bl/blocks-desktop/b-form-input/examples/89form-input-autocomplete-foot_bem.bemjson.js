({
    block: 'b-page',
        title: 'b-form-input: Простой автокомплит',
        head: [
            { elem: 'css', url: '_89form-input-autocomplete-foot_bem.css', ie: false },
            { elem: 'css', url: '_89form-input-autocomplete-foot_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_89form-input-autocomplete-foot_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_89form-input-autocomplete-foot_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_89form-input-autocomplete-foot_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_89form-input-autocomplete-foot_bem.js' }
        ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'margin: 0 2%' },
            content: {
                block: 'b-form-input',
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    foot: [
                        'foot',
                        'слово какккк <a class="b-link" href="ya.ru">Мои находки</a>'
                    ]
                },
                mods: { theme: 'grey', autocomplete: 'yes' },
                content: [
                    {
                        elem: 'input',
                        attrs: { name: 'suggest' }
                    }
                ]
            }
        }
    ]
})
