BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nah' }, {
    onBlock : function(ctx) {

        ctx.content(ctx.param('data')[1])

    }
});
