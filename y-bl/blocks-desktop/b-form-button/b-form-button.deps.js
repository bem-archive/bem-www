({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: {
        elems: [ 'input', 'click', 'left', 'content', 'text' ]
        // ,
        // mods: {
        //     'focused': 'yes',
        //     'hovered': 'yes',
        //     'disabled': 'yes',
        //     'pressed': 'yes'
        // }
    }
})
