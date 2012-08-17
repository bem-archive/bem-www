({
    block: 'b-page',
        title: 'b-form-input: Автокомплит маркета',
        head: [
            { elem: 'css', url: '_125form-input-autocomplete_slovari_bem.css', ie: false },
            { elem: 'css', url: '_125form-input-autocomplete_slovari_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_125form-input-autocomplete_slovari_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_125form-input-autocomplete_slovari_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_125form-input-autocomplete_slovari_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_125form-input-autocomplete_slovari_bem.js' }
        ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: {
                        url: 'http://suggest-slovari.yandex.ru/suggest-lingvo?v=5&lang=en&callback=?'
                    },
                    popupMods: { 'size': 'l', fade: 'yes' }
                },
                content: { elem: 'input', attrs: { name: 'suggest' } }
            }
        }
    ]
})
