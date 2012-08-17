({
    block: 'b-page',
    title: 'b-form-input: Автокомплит с кастомными элементами (на примере Метро)',
    head: [
        { elem: 'css', url: '_120form-input-autocomplete_sticky-line_bem.css', ie: false },
        { elem: 'css', url: '_120form-input-autocomplete_sticky-line_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_120form-input-autocomplete_sticky-line_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_120form-input-autocomplete_sticky-line_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_120form-input-autocomplete_sticky-line_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_120form-input-autocomplete_sticky-line_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'p',
            content: 'Саджест показывается только при изменении исходного запроса'
        },
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px 0;' },
            content: {
                block: 'b-form-input',
                mods: {
                    theme: 'grey',
                    autocomplete: 'yes',
                    size: 'l'
                },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    showListOnFocus: false,
                    popupMods: { 'size': 'l' }
                },
                content: { elem: 'input', attrs: { name: 'suggest' } },
                value: 'Samsung'
            }
        }
    ]
})
