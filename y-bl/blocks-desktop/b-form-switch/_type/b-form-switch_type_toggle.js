BEM.DOM.decl({ name : 'b-form-switch', modName : 'type', modVal : 'toggle' }, {

    onSetMod : {
        js : function(name, val) {
            this.__base(name, val);

            this._updateDimmensions();

            // Клик по правому лейблу должен включать левый инпут, по левому — правый
            var labels = this.elem('label'),
                firstLabelId = labels.eq(0).attr('for');
            labels.eq(0).attr('for', labels.eq(1).attr('for'));
            labels.eq(1).attr('for', firstLabelId);
            // В Firefox нужно вынести инпут за пределы лейбла, иначе аттрибут for ничего не делает
            this.elem('label', 'position', 'left').before(this.elem('input-left'));
            this.elem('label', 'position', 'right').before(this.elem('input-right'));

            this.__self.transitionEnd && this.bindTo(this.elem('label', 'position', 'left'), this.__self.transitionEnd, function() {
                this.delMod('transition');
            });
        }
    },

    onElemSetMod : {
        body : {
            position : function(elem, name, val) {
                this.__base(elem, name, val);
                this._setLabelsWidth(val);
                this.__self.transitionEnd && this.setMod('transition', 'progress');
            }
        }
    },

    /**
     * @nosideeffects
     * @returns {Number}
     */
    getLabelWidth : function() {
        var widths = [];
        this.elem('label-inner').css('width', '').width(function(i, width) {
            widths[i] = width;
        });
        return Math.max.apply(null, widths) + this.__self.PADDING;
    },

    _updateDimmensions : function() {
        this._maxWidth = this.getLabelWidth();
        this.elem('body').css('width', this._maxWidth + this.getButtonWidth() + this.__self.BORDER);
        this.elem('label-inner').css('width', this._maxWidth);
        this._setLabelsWidth();
        return this;
    },

    /**
     * @nosideeffects
     */
    updateDimmensions : function() {
        var animModVal = this.getMod('animation');

        this.delMod('animation')._updateDimmensions();
        this.afterCurrentEvent(function() {
            this.setMod('animation', animModVal);
        });

        return this;
    },

    /**
     * @param {String} [pos]
     */
    _setLabelsWidth : function(pos) {
        pos || (pos = this.position());
        this.elem('label', 'position', (pos  == 'left'? 'right' : 'left')).css('width', '');
        this.elem('label', 'position', pos).css('width', this._maxWidth);
    },

    _onTouchStart : function(e) {

        var moved,
            x = this._getXFromEvent(e),
            left = this.position() == 'left'? this._maxWidth : this.__self.BORDER;

        function onMouseUp(e) {
            this
                .unbindFromDomElem(this.__self._root, 'mouseup touchend mousemove touchmove')
                .unbindFromDoc('mouseleave')
                .delMod('pressed');

            if(moved) {
                var pos = parseInt(this.elem('label', 'position', 'left').css('width')) > this._maxWidth / 2?
                    'left' :
                    'right';
                this.position() == pos?
                    this._setLabelsWidth() :
                    this.position(pos);
            } else
                this.toggle();

            this.afterCurrentEvent(function() {
                this.setMod('focused', 'yes');
            });

        }

        this.bindToDoc('mouseleave', onMouseUp);

        this.bindToDomElem(this.__self._root, {
            'mousemove touchmove' : function(e) {
                moved || this.position('');
                moved = true;

                var newX = this._getXFromEvent(e),
                    deltaX = newX - x,
                    leftPos = Math.min(Math.max(this.__self.BORDER, left + deltaX), this._maxWidth);

                this.elem('label', 'position', 'left').css('width', this._getWidthLabel(leftPos));
                this.elem('label', 'position', 'right').css('width', this._maxWidth - leftPos + this.__self.BORDER);
            },
            'mouseup touchend' : onMouseUp
        });

        e.preventDefault();

    },

    _getWidthLabel: function(leftPos){
        return leftPos;
    },

    _onBodyClick : function() {}

}, {

    PADDING: 10,

    live: function() {
        this.transitionEnd = 'TransitionEvent' in window? 'transitionend' :
            'onwebkittransitionend' in window? 'webkitTransitionEnd' :
            'OTransition' in document.documentElement.style? 'oTransitionEnd' :
            '';

        this.__base();
        return false;
    }

});
