/**
 * require BEM
 * require BEM.DOM
 */

(function($) {

BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        'js' : function() {

            /** Data map */
            var dataMap = {
                    'ru' : [
                        { item: 'option', value: '1', content: 'Москва' },
                        { item: 'option', value: '2', content: 'Санкт-Петербург' },
                        { item: 'option', value: '3', content: 'Красноярск' }
                    ],
                    'ua' : [
                        { item: 'option', value: '4', content: 'Киев' },
                        {
                            item: 'optgroup',
                            label: 'Крым',
                            content: [
                                { item: 'option', value: '0val1', content: 'Симферополь' },
                                { item: 'option', value: '0val1', content: 'Севастополь', disabled: 1 },
                                { item: 'option', value: '0val1', content: 'Керчь' },
                                { item: 'option', value: '0val1', content: 'Евпатория' }
                            ]
                        },
                        { item: 'option', value: '6', content: 'Одесса' },
                        { item: 'option', value: '7', content: 'Алушта' }
                    ],
                    'be' : [
                        { item: 'option', value: '8', content: 'Минск' },
                        { item: 'option', value: '9', content: 'Витебск' },
                        { item: 'option', value: '10', content: 'Брест' }
                    ]
                },
                /** {Array.<BEM.DOM>} */
                select = this.findBlocksInside('b-form-select');

            /**
             * Обновить список городов в зависимости от переданного кода страны
             * @param {String} country
             */
            function updateCity(country) {
                select[1].setOptions(dataMap[country]);
            }

            select[0].on('change', function(e, data) {
                updateCity(this.val());
            });

            updateCity(select[0].val());

        }

    }

});

}(jQuery));

