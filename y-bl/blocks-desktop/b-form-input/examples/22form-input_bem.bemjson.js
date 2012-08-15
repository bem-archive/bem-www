({
    block: 'b-page',
        title: 'b-form-input: Поле ввода с подсказкой в разных размерах',
        head: [
            {
                elem: 'css',
                url: '_22form-input_bem.css',
                ie: false
            },
            { elem: 'css', url: '_22form-input_bem.ie6.css', ie: 'IE 6' },
            { elem: 'css', url: '_22form-input_bem.ie7.css', ie: 'IE 7' },
            { elem: 'css', url: '_22form-input_bem.ie8.css', ie: 'IE 8' },
            { elem: 'css', url: '_22form-input_bem.ie9.css', ie: 'IE 9' },
            { block: 'i-jquery', elem: 'core' },
            { elem: 'js', 'url': '_22form-input_bem.js' }
        ],
    content: [
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 's' },
                content: [
                    { elem: 'hint', content: 'Хинт для инпута' },
                    { elem: 'input' }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'm' },
                content: [
                    { elem: 'hint', content: 'Хинт для инпута' },
                    { elem: 'input' }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'l' },
                content: [
                    { elem: 'hint', content: 'Хинт для инпута' },
                    { elem: 'input' }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                mods: { theme: 'grey', size: 'xl' },
                content: [
                    { elem: 'hint', content: 'Хинт для инпута' },
                    { elem: 'input' }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px;' },
            content: {
                block: 'b-form-input',
                js: { autofocus: true },
                mods: { theme: 'grey', size: 's' },
                content: [
                    { elem: 'hint', content: 'Хинт для инпута' },
                    { elem: 'input' }
                ]
            }
        }
    ]
})
