BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        'js' : function() {

            this.domElem.append(BEM.HTML.build(
                    {
                        block : 'b-form-input',
                        value : 'Значение по умолчанию'
                    }
                ));

        }

    }

});
