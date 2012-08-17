BEM.DOM.decl({ name : 'b-form-input', modName : 'suggest', modVal : 'yes' }, {

    onSetMod : {

        'js' : function() {

            this.__base();

            $.extend(true, this.params, {
                popupMods: {
                    suggest: 'yes'
                }
            });

        }

    }

});
