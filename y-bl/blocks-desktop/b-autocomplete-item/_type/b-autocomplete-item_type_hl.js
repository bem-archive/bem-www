BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'hl' }, {

    onBlock : function(ctx) {

        ctx.content($.map(ctx.param('data').slice(1), function(chunk) {
            return $.isArray(chunk)?
                { tag : 'span', elem : 'highlight', content : chunk[0] } :
                chunk;
        }));

    }

});

