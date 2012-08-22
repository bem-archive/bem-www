(function() {

BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        'js' : function() {

            var kFormSelect = this.findBlockInside('b-form-select');

            kFormSelect.on('change', function(e, data) {
                $('#val').text('// ' + this.val());
                $('#index').text(data.index);
            });

            kFormSelect.trigger('change', { index: 1 });

            this.findBlocksInside('b-link').forEach(function(block, i) {
                block.on('click', function() {
                    kFormSelect.val(this.params.val);
                });
            });

        }

    }

});

}());
