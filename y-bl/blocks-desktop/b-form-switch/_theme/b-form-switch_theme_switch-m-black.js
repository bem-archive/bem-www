BEM.DOM.decl({ name : 'b-form-switch', modName : 'theme', modVal : 'switch-m-black' }, {

    _getLeftPos: function(left, deltaX, maxLeft){
        return Math.min(Math.max(left + deltaX, this.__self.BORDER), maxLeft + this.__self.BORDER);
    }

});
