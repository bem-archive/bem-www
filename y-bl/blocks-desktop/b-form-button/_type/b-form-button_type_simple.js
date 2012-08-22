BEM.HTML.decl({ name: 'b-form-button', modName: 'type', modVal: 'simple' }, {

    onBlock : function(ctx) {

        ctx
            .tag(ctx.param('url')? 'a' : 'span')
            .attrs({ href : ctx.param('url'), target : ctx.param('target') })
            .mods({
                size : ctx.mod('size') || 's',
                theme : ctx.mod('theme') || (ctx.mod('type') + '-grey')
            })
            .content(
                {
                    tag : 'span',
                    elem : 'simple',
                    content : ctx.content()
                },
                true)
            .afterContent(
                ctx.param('type')?
                    {
                        elem : 'input',
                        attrs : {
                            value : '',
                            type : ctx.param('type'),
                            disabled : ctx.mod('disabled') && 'disabled'
                        }
                    } :
                    { elem : 'click' })
            .js(true)
            .stop();

    }

});
