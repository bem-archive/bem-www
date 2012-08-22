BEM.DOM.decl({ name : 'b-form-switch', modName : 'type', modVal : 'switch' }, {

    _onBodyClick : function() {

        if(this.isDisabled()) return;

        this
            .setMod('focused', 'yes')
            .toggle();

    },

    _onTouchStart : function(e) {

        var moved,
            // XXX: `progid:DXImageTransform.Microsoft.Shadow` увеличивает значение `.width()`
            maxLeft = this.elem('body')[0].clientWidth - this.elem('button').width(),
            x = this._getXFromEvent(e),
            left = parseInt(this.elem('button').css('left'));

        function onMouseUp(e) {
            this
                .unbindFromDomElem(this.__self._root, 'mouseup touchend mousemove touchmove')
                .unbindFromDoc('mouseleave')
                .delMod('pressed');

            if(moved)
                this
                    [parseInt(this.elem('button').css('left')) > maxLeft / 2? 'right' : 'left']()
                    .elem('button').css('left', '');
            else
                this.toggle();

            this.afterCurrentEvent(function() {
                this.setMod('focused', 'yes');
            });

        }

        this.bindToDoc('mouseleave', onMouseUp);

        this.bindToDomElem(this.__self._root, {
            'mousemove touchmove' : function(e) {
                moved && this.position('');
                moved = true;

                var newX = this._getXFromEvent(e),
                    deltaX = newX - x,
                    leftPos = this._getLeftPos(left, deltaX, maxLeft);

                this.elem('button').css('left', leftPos);

            },
            'mouseup touchend' : onMouseUp
        });

        e.preventDefault();

    },

    _getLeftPos: function(left, deltaX, maxLeft){
        return Math.min(Math.max(left + deltaX, this.__self.BORDER), maxLeft - this.__self.BORDER);
    }

});
