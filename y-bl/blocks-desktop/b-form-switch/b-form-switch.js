BEM.DOM.decl('b-form-switch', {

    onSetMod : {

        js : function() {

            var _this = this,
                checked = this.elem('input').filter(':checked');

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            this[checked.is(this.buildSelector('input-right'))? 'right' : 'left']();

            activeNode && this.elem('input').each(function() {
                activeNode === this && _this.setMod('focused', 'yes');
                return false;
            });

            this.bindTo('button', 'click', function() {
                return false;
            });

            this.afterCurrentEvent(function() {
                this.setMod('animation', 'yes');
            });

        },

        focused : {

            yes : function() {
                this._focusChecked();
            }

        }

    },

    onElemSetMod : {
        body : {
            position : function(elem, name, value) {

                var input = this.elem('input-' + value),
                    isFocused = this.hasMod('focused', 'yes');

                input.attr('checked', true);
                isFocused && input.focus();

                this
                    .delMod(this.elem('label', 'active', 'yes'), 'active')
                    .setMod(this.elem('label', 'position', value), 'active', 'yes');

                value && this.trigger('change', {
                    state: value
                });

                isFocused && this.setMod('focused', 'yes');
            }
        }
    },

    /**
     * @param {String} [val]
     * @returns {String|BEM.DOM} value выбранного инпута
     */
    val : function(val) {

        if(typeof val == 'undefined') {
            return this.elem('input').filter(':checked').val();
        } else {
            var input = this.elem('input').filter(function() {
                return this.value === val;
            });
            input.length && this[input.is(this.buildSelector('input-right'))? 'right' : 'left']();
            return this;
        }
    },

    /**
     * @param {String} [pos]
     * @returns {String|BEM.DOM}
     */
    position : function(pos) {

        if (typeof pos == 'undefined')
            return this.getMod(this.elem('body'), 'position');
        else
            this.setMod(this.elem('body'), 'position', pos);
            return this;

    },

    left : function() {

        this.setMod(this.elem('body'), 'position', 'left');
        return this;

    },

    right : function() {

        this.setMod(this.elem('body'), 'position', 'right');
        return this;

    },

    toggle : function() {

        this.toggleMod(this.elem('body'), 'position', 'right', 'left');
        return this;

    },

    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    _getXFromEvent : function(e) {
        return typeof e.clientX == 'number'?
            e.clientX :
            e.originalEvent.touches[0].clientX;
    },

    _focusChecked : function() {
        this.elem('input').filter(':checked').focus();
    },

    _onLeftInputClick : function() {

        if (this.isDisabled()) return;

        this.left();
    },

    _onRightInputClick : function() {

        if (this.isDisabled()) return;

        this.right();
    }

}, {

    live : function() {

        var root = this._root = $('onmousedown' in window? window : document /* IE < 9 */);

        this
            .liveBindTo('input', 'keydown', function(e) {
                if (e.which == 32/* Space */ && (!this._lastSpacePress || new Date - this._lastSpacePress > 300)) {
                    this._lastSpacePress = +new Date;
                    this.toggle();
                }
            })
            .liveBindTo('input', 'keyup', function(e) {
                if (e.which == 32)
                    this._lastSpacePress = false;
            })
            .liveBindTo('input', 'focusin', function() {
                this.hasMod('disabled', 'yes') || this.setMod('focused', 'yes');
            })
            .liveBindTo('input', 'focusout', function() {
                this._isMouseDown || this.hasMod('disabled', 'yes') || this.delMod('focused');
            })
            .liveBindTo('input-left', 'change', function() {
                this._onLeftInputClick();
            })
            .liveBindTo('input-right', 'change', function() {
                this._onRightInputClick();
            })
            .liveBindTo('body', 'click', function() {
                this._onBodyClick();
            })
            .liveBindTo('button', 'mousedown touchstart', function(e) {
                if(this.isDisabled() || e.which != 1) return;

                this
                    .setMod('pressed', 'yes')
                    ._onTouchStart(e);
            })

            /* Dirty way to prevent losing focus while clicking */
            .liveBindTo('mousedown', function() {
                if (this.hasMod('disabled', 'yes')) return;
                this.setMod('focused', 'yes');
                this._isMouseDown = true;
                this.bindTo(root, 'mouseup', function() {
                    this.unbindFrom(root, 'mouseup');
                    this._focusChecked();
                    this._isMouseDown = false;
                });
            });

        return false;
    },

    BORDER: 1

});
