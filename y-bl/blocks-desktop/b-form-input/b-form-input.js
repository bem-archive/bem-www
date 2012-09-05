(function() {

var instances,
    sysChannel,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) instance.val(instance.elem('input').val());
    },
    getActiveElement = function (doc) {
        // В iframe в IE9: "Error: Unspecified error."
        try { return doc.activeElement } catch (e) {}
    };

BEM.DOM.decl('b-form-input', {

    onSetMod : {

        'js' : function() {

            var _this = this,
                input = _this.elem('input'),
                activeElement = getActiveElement(_this.__self.doc[0]),
                haveToSetAutoFocus =
                    _this.params.autoFocus &&
                    !(activeElement && $(activeElement).is('input, textarea'));

            _this._val = input.val();

            if (activeElement === input[0] || haveToSetAutoFocus) {
                _this.setMod('focused', 'yes')._focused = true;
            }
            
            // факт подписки
            if(!sysChannel) {
                instances = [];
                sysChannel = _this.channel('sys')
                    .on({
                        'tick' : update,
                        'idle' : function() {
                            sysChannel.un('tick', update);
                        },
                        'wakeup' : function() {
                            sysChannel.on('tick', update);
                        }});
            }

            // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
            _this._instanceIndex = instances.push(
                _this.bindTo(input, {
                    focus : _this._onFocus,
                    blur  : _this._onBlur
                })
            ) - 1;

            // шорткат для перехода в инпут - crtl+стрелка вверх
            _this.params.shortcut && _this.bindToDoc('keydown', function(e) {
                if(e.ctrlKey && e.keyCode == 38 && !$(e.target).is('input, textarea')) {
                    _this.setMod('focused', 'yes');
                }
            });
        },

        'disabled' : function(modName, modVal) {

            this.elem('input').attr('disabled', modVal == 'yes');

        },

        'focused' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused? 'focus' : 'blur');
            });

        }

    },

    onElemSetMod : {

        'message' : {

            'visibility' : function(elem, modName, modVal) {

                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] && _this.hasMod($(this), 'visibility', 'visible') && (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', '', modVal === 'visible');
                }

            }

        }

    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        if(this._val != val) {
            var input = this.elem('input');
            input.val() != val && input.val(val);
            this._val = val;
            this.trigger('change', data);
        }

        return this;

    },

    name : function(name) {
        return this.elem('input').attr('name');
    },

    _onFocus : function() {

        this._focused = true;
        return this.setMod('focused', 'yes');

    },

    _onBlur : function() {

        this._focused = false;
        return this.delMod('focused');

    },

    /**
     * Нормализует установку фокуса для IE
     * @private
     */
    _focus : function() {

        var input = this.elem('input')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }

    },

    _blur : function() {

        this.elem('input').blur();

    },

    destruct : function() {

        this.__base.apply(this, arguments);

        this.params.shortcut && this.unbindFromDoc('keydown');
        instances.splice(this._instanceIndex, 1);

        var i = this._instanceIndex,
            instance;

        while(instance = instances[i++]) --instance._instanceIndex;

    }

});

BEM.HTML.decl('b-form-input', {

    onBlock : function(ctx) {

        var id = ctx.param('id') || ctx.generateId();

        ctx
            .tag('span')
            .tParam('id', id)
            .tParam('has-clear', ctx.mod('has-clear') === 'yes')
            .afterContent(
                {
                    elem : 'box',
                    tag : 'span',
                    content : {
                        elem : 'input',
                        attrs : {
                            value : ctx.param('value'),
                            name : ctx.param('name'),
                            id : id
                        }
                    }
                })
            .js(true);

    },

    onElem : {

        'input' : function(ctx) {

            ctx.tag(ctx.mod('type') || 'input');

        },

        'label' : function(ctx) {

            ctx
                .tag('label')
                .attr('for', ctx.tParam('id'));

        },

        'box': function (ctx) {

            if (ctx.tParam('has-clear')) {
                ctx.afterContent({elem: 'clear', tag: 'span'});
            }

        },

        'hint' : function(ctx) {

            ctx
                .tag('label')
                .attr('for', ctx.tParam('id'))

        }

    }

});

})();
