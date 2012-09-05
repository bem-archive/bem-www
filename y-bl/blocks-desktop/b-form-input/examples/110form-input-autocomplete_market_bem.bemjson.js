({
    block: 'b-page',
        title: 'b-form-input: Автокомплит маркета',
        head: [
            { elem: 'css', url: '_110form-input-autocomplete_market_bem.css', ie: false },
            { elem: 'css', url: '_110form-input-autocomplete_market_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_110form-input-autocomplete_market_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_110form-input-autocomplete_market_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_110form-input-autocomplete_market_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_110form-input-autocomplete_market_bem.js' }
        ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', autocomplete: 'yes', size: 'm' },
                js: {
                    dataprovider: {
                        name: 'i-href-dataprovider',
                        url: 'http://suggest.market.yandex.ru/suggest-market?callback=?'
                    }
                },
                content: { elem: 'input', attrs: { name: 'suggest' } }
            }
        }
    ]
})
