BEM.DOM.decl('b-form-select', {

    _buildItem : function(node, block, content, elMods) {

        var item = this.__base.apply(this, arguments);

        elMods.disabled && (item.mods.hidden = 'yes');

        return item;

    }

});

