BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'fact' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1);

        ctx.content([
            { tag : 'span', elem : 'text', content : data[0] },
            { tag : 'span', elem : 'fact', content : [' — ', data[1]] }
        ]);

    }

});
