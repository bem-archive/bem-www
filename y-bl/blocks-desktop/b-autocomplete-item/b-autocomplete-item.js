BEM.DOM.decl('b-autocomplete-item', {

    /**
     * Возвращает значение, которое надо вставить в input.
     * @returns {String}
     */
    val : function() {
        return this.params.val || this.elem('text').text() || this.domElem.text();
    },

    /**
     * Действие на наведение на пункт клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит подставлять значение пункта не надо
     */
    enter : function() {},

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select : function(byKeyboard) {}

}, {

    live : function() {

        this.liveBindTo('mouseover mouseout mousedown', function(e) {
            this.trigger(e.type);
        });

    }

});

BEM.HTML.decl('b-autocomplete-item', {

    onBlock : function(ctx) {

        ctx
            .tag('li')
            .content(ctx.param('data'))
            .js(true);

    }

});
