BEM.DOM.decl('i-lego-example', {

    onSetMod : {

        'js' : function() {

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    mods: { type: 'simple', theme: 'simple-grey', size: 's', valign: 'middle' },
                    content : 'Я.Простая кнопка',
                    type : 'button'
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    mods: { type: 'simple', theme: 'simple-lite-grey', size: 'm', valign: 'middle' },
                    content : 'Я.Простая кнопка',
                    type : 'button'
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    mods: { valign: 'middle', theme: 'grey-s', size: 's' },
                    content : 'Я.Submit',
                    type : 'submit'
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    mods: { valign: 'middle', theme: 'grey-s', size: 's' },
                    content : 'Я.Ссылка',
                    url : 'http://www.yandex.ru'
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    mods: { valign: 'middle', theme: 'grey-s', size: 's' },
                    content : 'Я.Ссылка с target',
                    url : 'http://www.yandex.ru',
                    target : '_blank'
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    content : 'Большая кнопка',
                    type : 'button',
                    mods : { size : 'l', theme : 'grey-l', valign: 'middle' }
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    content : [
                        {
                            block : 'b-icon',
                            src : 'http://yandex.st/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png',
                            alt : 'Иконка Серпа'
                        },
                        'Кнопка с иконкой серпа'
                        ],
                    type : 'button',
                    mods : { size : 'l', theme : 'grey-l', valign: 'middle' }
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    content : 'Неактивная кнопка',
                    type : 'submit',
                    mods : { 'disabled': 'yes', valign: 'middle', theme: 'grey-s', size: 's' }
                }
            ));

            this.domElem.append(BEM.HTML.build(
                {
                    block : 'b-form-button',
                    content : 'Голубая кнопка-ссылка высотой 33 пикселя',
                    url : 'http://www.yandex.ru',
                    mods : { 'theme': 'blue-xl', 'size': 'xl', valign: 'middle' }
                }
            ));

            BEM.DOM.init(this.domElem);

        }

    }

});
