({
    mustDeps: [
        { block: 'i-bem', elem: 'dom' }
    ],
    shouldDeps: [
        { mods: { loading: 'no', disabled: 'yes', animation: 'yes' } },
        { elems: [
            { elem: 'scale' },
            { elem: 'allowed-range' },
            { elem: 'range' },
            { elem: 'input' },
            { elem: 'click' },
            { elem: 'runner', mods: { 'focused': 'yes' } },
            { elem: 'runner', mods: ['state'] }
        ]},
        { block: 'b-form-input' }
    ]
})