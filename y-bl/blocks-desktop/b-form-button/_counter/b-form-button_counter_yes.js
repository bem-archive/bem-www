(function(Lego) {

    var random = (Math.floor((Math.random() * 100)));

    BEM.DOM.decl({ name : 'b-form-button', modName : 'counter', modVal : 'yes' }, {

        _onCounterClick : function(e) {

            random <= (this.params['show-counter'] || 10) &&
                Lego.ch(this.params.counter, this.elem('input')[0] || this.domElem[0]);

        }

    }, {

        live : function() {

            this.liveBindTo({ modName : 'counter', modVal : 'yes' }, 'mousedown', function(e) {
                this._onCounterClick(e);
            });

            return this.__base.apply(this, arguments);

        }

    });

}(window.Lego));

