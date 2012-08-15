({
    block: 'b-page',
    title: 'b-form-input: Автокомплит с кастомными элементами (на примере Метро)',
    head: [
        { elem: 'css', url: '_115form-input-autocomplete_custom_bem.css', ie: false },
        { elem: 'css', url: '_115form-input-autocomplete_custom_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_115form-input-autocomplete_custom_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_115form-input-autocomplete_custom_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_115form-input-autocomplete_custom_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_115form-input-autocomplete_custom_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'p',
            content: 'Начните вводить одно из названий Метро - Шаболовская, Парк Культуры, Библиотека им. Ленина, Алексеевская, Авиамоторная'
        },
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px 0;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { name: 'i-my-dataprovider' },
                    popupMods: { size: 'l' }
                },
                content: { elem: 'input', attrs: { name: 'suggest' } }
            }
        }
    ]
})
