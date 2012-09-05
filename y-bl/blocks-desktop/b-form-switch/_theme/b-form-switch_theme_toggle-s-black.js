BEM.DOM.decl({ name : 'b-form-switch', modName : 'theme', modVal : 'toggle-s-black' }, {

    getButtonWidth: function() {
        return 9;
    },

    _updateDimmensions : function() {
        this.__base();
        this.elem('body').css('width', this._maxWidth + this.getButtonWidth() - this.__self.BORDER);
        this.elem('label-inner').css('width', this._maxWidth - this.__self.BORDER);
    },

    _setLabelsWidth : function(pos) {
        pos || (pos = this.position());
        this.elem('label', 'position', (pos  == 'left'? 'right' : 'left')).css('width', '');
        this.elem('label', 'position', pos).css('width', this._maxWidth - this.__self.BORDER);
    },

    _getWidthLabel: function(leftPos){
        return leftPos - this.__self.BORDER;
    }

});