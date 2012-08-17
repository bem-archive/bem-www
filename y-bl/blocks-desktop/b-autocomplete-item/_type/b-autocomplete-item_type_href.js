BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'href' }, {

    url : function() {
        
        return this.findBlockInside('b-link').domElem.attr('href');

    },

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
//        byKeyboard && $('<form style="display:none" method="get" action="' + this.url() + '" />')
//            .appendTo('body')
//            .submit()
//            .remove();
        
        byKeyboard && (location.href = this.url());

        return false;

    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'href' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1);

        ctx.content(
            { block: 'b-link', content : data[0], url: data[1] }
        );

    }

});
