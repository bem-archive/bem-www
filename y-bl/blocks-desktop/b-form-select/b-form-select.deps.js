({
    mustDeps: [
        { block: 'i-bem', elems: ['dom', 'html'] },
        { block: 'b-form-button' },
        { block: 'b-popupa', mods: { 'direction': 'down' } }
    ],
    shouldDeps: [
        {
            elem: 'item',
            mods: {
                'disabled': 'yes',
                'focused': 'yes',
                'hovered': 'yes',
                'selected': 'yes',
                'inner': 'yes',
                'label': 'yes'
            }
        },
        {
            elem: 'popup',
            mods: { 'scrollable': 'yes' }
        },
        { elems: [ 'select', 'list', 'fade', 'separator' ] }
    ]
})
