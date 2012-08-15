/**
 * @require BEM
 * @require BEM.DOM
 */

(function() {

BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        'js' : function() {

            var dataMap = {
                    'ru' : ['msk', 'spb', 'krs'],
                    'ua' : ['simf', 'sev', 'krc'],
                    'be' : ['minsk', 'brest']
                },
                /** {Array<BEM.DOM>} */
                select = this.findBlocksInside('b-form-select');

            function updateCity(country) {
                var sobj = select[1],
                    data = dataMap[country] || [];

                var items = sobj.elem('option').attr('disabled', 'yes').filter(function(i) {
                    return data.indexOf(this.value) > -1;
                }).removeAttr('disabled');

                sobj.val(items.attr('value')).updateItems();
            }

            select[0].on('change', function(e) {
                updateCity(this.val());
            });

            updateCity(select[0].val());

        }

    }

}, {

    live : false

});

}());

