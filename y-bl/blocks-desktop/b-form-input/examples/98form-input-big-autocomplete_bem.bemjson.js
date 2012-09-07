({
    block: 'b-page',
        title: 'b-form-input: Автокомплит с установкой ширины по ширине инпута и фэйдингом',
        head: [
            {
                elem: 'css',
                url: '_98form-input-big-autocomplete_bem.css',
                ie: false
            },
            { elem: 'css', url: '_98form-input-big-autocomplete_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_98form-input-big-autocomplete_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_98form-input-big-autocomplete_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_98form-input-big-autocomplete_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_98form-input-big-autocomplete_bem.js' }
        ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; margin: 0 2% 0; padding: 20px 0;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    popupMods: { 'size': 'l' }
                },
                content: [
                    { elem: 'hint', content: 'Набери одноклассники' },
                    { elem: 'input', attrs: { name: 'suggest' } }
                ]
            }
        }
    ]
})
