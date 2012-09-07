BEM.DOM.decl('i-lego-example', {

    onSetMod: {

        'js' : function() {

            $.each(this.findBlocksInside('b-form-button'), function() {

                this.on('click', function() {

                    myWin = open ('http://ya.ru', 'displayWindow;',
                                  'width = 600,' +
                                  'height = 500,' +
                                  'status = no,' +
                                  'toolbar = no,' +
                                  'menubar = no');
                });

            });
        }

    }

});
