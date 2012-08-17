({
    block: 'b-page',
    title: 'b-form-button',
    head: [
        { elem: 'css', url: '_80disabled_bem.css', ie: false },
        { elem: 'css', url: '_80disabled_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_80disabled_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_80disabled_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_80disabled_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_80disabled_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                block: 'b-form-button',
                attrs: { id: 'ya_button' },
                tabindex: 1,
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                type: 'button',
                content: 'Я.Button'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_submit' },
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                type: 'submit',
                content: 'Я.Submit'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_link' },
                mods: { disabled: 'yes', theme: 'grey-s', size: 's' },
                url: '/',
                content: 'Я.Ссылка'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-button' },
                mods: { type: 'simple', disabled: 'yes', theme: 'simple-grey', size: 's' },
                type: 'button',
                content: 'Я.Просто button'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-submit' },
                mods: { type: 'simple', disabled: 'yes', theme: 'simple-grey', size: 's' },
                type: 'submit',
                content: 'Я.Просто submit'
            },
            {
                block: 'b-form-button',
                attrs: { id: 'ya_simple-link' },
                mods: { type: 'simple', disabled: 'yes', theme: 'simple-grey', size: 's' },
                url: '/',
                content: 'Я.Просто сcылка'
            }
        ]
    }
})
