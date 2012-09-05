({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_33-toggle_custom_bem.css', ie: false },
        { elem: 'css', url: '_33-toggle_custom_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_33-toggle_custom_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_33-toggle_custom_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_33-toggle_custom_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_33-toggle_custom_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'margin: 20px' },
            content: {
                block: 'b-form-switch',
                mods: { position: 'left', type: 'toggle', theme: 'toggle-s-grey', custom: 'my' },
                name: 'on-off',
                content: [ { elem: 'option' }, { elem: 'option' } ]
            }
        }
    ]
})
