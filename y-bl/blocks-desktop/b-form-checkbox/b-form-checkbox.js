BEM.DOM.decl('b-form-checkbox', {

    onSetMod : {

        'js' : function() {

            var _this = this,
                checkboxElem = _this.elem('checkbox');

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this.setMod('checked', checkboxElem.attr('checked')? 'yes' : '');
            activeNode === checkboxElem[0] && _this.setMod('focused', 'yes');

        },

        'focused' : {

            'yes' : function() {

                if(this.isDisabled())
                    return false;

                this.elem('checkbox').focus();

            },

            '' : function() {

                this.elem('checkbox').blur();

            }

        },

        'checked' : function(modName, modVal) {
            this.elem('checkbox').attr('checked', modVal == 'yes');
            this.elem('tick').attr('alt', ((modVal == 'yes')? ' v' : ''));
            this.afterCurrentEvent(function(){
               this.trigger('change');
            });
        },

        'disabled' : function(modName, modVal) {
            this.elem('checkbox').attr('disabled', modVal == 'yes');
        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    isChecked : function() {
        return this.hasMod('checked', 'yes');
    },

    toggle : function() {
        this.toggleMod('checked', 'yes', '');
    },

    val : function(val) {
        var checkbox = this.elem('checkbox');
        return val == undefined?
            checkbox.val() :
            checkbox.val(val);
    },

    _onClick : function(e) {
        // Нам нужен только клик левой кнопки мыши и нажатие пробела
        if (e.button) return;

        this.isDisabled() || this.setMod('focused', 'yes');
    },

    _onChange : function(e) {
        e.target.checked?
            this.setMod('checked', 'yes') :
            this.delMod('checked');
    }

}, {

    live : function() {

        this
            .liveBindTo('checkbox', 'click', function(e) {
                this._onClick(e);
            })
            .liveBindTo('checkbox', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('checkbox', 'focusin focusout', function(e) {
                this.setMod('focused', e.type == 'focusin'? 'yes' : '');
            });

        return false;
    }

});

BEM.HTML.decl('b-form-checkbox', {

    onBlock: function(ctx){
        var checkboxAttrs = ctx.param('checkboxAttrs') || {};
        ctx
            .js(true)
            .mix(!ctx.mod('size') ? [{ block: 'b-form-checkbox', mods: { size: 'm' } }] : '')
            .tag('span')
            .tParam('checkboxAttrs', $.extend(checkboxAttrs || {}, {
                id: ctx.param('id') || checkboxAttrs.id || $.identify(),
                checked: ctx.mod('checked') ? 'checked' : undefined,
                disabled: ctx.mod('disabled') ? 'disabled' : undefined
            }))
            .beforeContent({
                elem: 'inner',
                content: [
                    {
                        elem: 'checkbox',
                        attrs: ctx.tParam('checkboxAttrs')
                    },
                    { elem: 'bg' }
                ]
            });
    },

    onElem: {

        'label': function(ctx) {
            ctx
                .tag('label')
                .attr('for', ctx.tParam('checkboxAttrs').id)
        },

        'checkbox': function(ctx){
            ctx
                .tag('input')
                .attrs($.extend(ctx.attrs(), { type: 'checkbox' }))
        },

        'bg': function(ctx){
            ctx
                .tag('i')
                .content({elem: 'tick'})
        },

        'tick': function(ctx){
            ctx.tag('i')
        },

        'inner': function(ctx){
            ctx.tag('span')
        }

    }

});
