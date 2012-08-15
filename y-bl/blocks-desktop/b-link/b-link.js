/** @requires BEM */
/** @requires BEM.HTML */

BEM.HTML.decl('b-link', {
    onBlock: function(ctx) {
        ctx
            .tag('a')
            .attr('href', ctx.param('url'));

        var props = ['title', 'target'], p;
        while(p = props.pop()) ctx.param(p) && (ctx.attr(p, ctx.param(p)));
    }
});