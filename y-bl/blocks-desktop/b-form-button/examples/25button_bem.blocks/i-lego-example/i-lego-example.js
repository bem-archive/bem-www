(function(){

BEM.DOM.decl('i-lego-example', {

    onSetMod: {

        js: function() {

            var popup = this.findBlockInside('b-popupa');
            this.findBlockInside('b-form-button').on('click', function(e) {
                popup.show(e.block.domElem);
            });

        }

    }

});

}());