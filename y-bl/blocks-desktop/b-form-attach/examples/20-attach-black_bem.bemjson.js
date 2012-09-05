({
    block: 'b-page',
    title: 'b-form-attach',
    head: [
        { elem: 'css', url: '_20-attach-black_bem.css', ie: false },
        { elem: 'css', url: '_20-attach-black_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_20-attach-black_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_20-attach-black_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_20-attach-black_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url: '_20-attach-black_bem.js' }
    ],
    content: {
        block: 'b-form-attach',
        content: [
            {
                block: 'b-form-button',
                mods: { size: 's', theme: 'black-s', valign: 'middle' },
                type: 'file',
                name: 'attachment',
                content: 'Выбрать файл'
            },
            {
                elem: 'holder',
                content: [
                    {
                        block: 'b-icon'
                    },
                    {
                        elem: 'text',
                        content: 'файл не выбран'
                    },
                    {
                        block: 'b-icon',
                        mix: [{ block: 'b-form-attach', elem: 'reset' }]
                    }
                ]
            }
        ]
    }
})