(function() {

BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        js : function() {

            BEM.blocks['b-popupa'].on('show', function(e) {

                /**
                 * Принудительно пересчитываем ширину form-select-а,
                 * при отображении.
                 *
                 * NOTE: В качестве сайд-эффекта возможно некоректное отображении
                 * попапа при первом открытии.
                 */
                var popup = e.target;
                popup.afterCurrentEvent(function() {
                    var switcher = popup.findBlockInside('b-form-switch');
                    switcher.hasMod('dim', 'inited') ||
                        switcher.updateDimmensions().setMod('dim', 'inited');
                });

            });

        }

    }

}, {

    live: false

});

}());
