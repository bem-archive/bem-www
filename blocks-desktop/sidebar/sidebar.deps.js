({
    shouldDeps: [
        { elem: 'inner' },
        { block: 'companies' },
        { block: 'github' },
        { block: 'b-text', mods: { size: '12'} },
        { block: 'b-text', mods: { size: '18'} },
        { block: 'b-menu-vert', mods: { position: 'sidebar' } },
        { block: 'companies', elems: [ { elem: 'company' , mods: { name: [ 'yandex', 'rambler', 'thk', 'hh' ]}} ] }
    ]
})