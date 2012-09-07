BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nav' }, {

   enter : function() {

       return false;

   },

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select : function(byKeyboard) {
        // открываем ссылку только когда выбрали с помощью клавиатуры, если выбрали мышкой, то сработает обычная ссылка
        byKeyboard && $('<form style="display:none" action="' + this.val() + '" target="_blank"/>')
            .appendTo('body')
            .submit()
            .remove();

        return false;

    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nav' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data'),
            urlData = data[3] || data[2],
            url = (urlData.match(/^\w[\w-]*:\/\//g)? '' : 'http://') + urlData;

        ctx
            .js({ val : url })
            .content({
                elem : 'link',
                url  : url,
                data : data });

    },

    onElem : {

        'link' : function(ctx) {

            var data = ctx.param('data');
            ctx
                .tag('a')
                .attrs({ href : ctx.param('url'), target : '_blank' })
                .content([
                    { elem : 'link-url', tag : 'span', content : data[2] },
                    { elem : 'link-info', tag : 'span', content : '&nbsp;&mdash; ' + data[1] }
                    ]);

        }


    }

});
