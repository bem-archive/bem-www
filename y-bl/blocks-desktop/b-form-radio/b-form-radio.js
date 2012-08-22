(function(BEM, undefined) {

/**
@namespace JS-API блока b-form-radio
@name block */

BEM.DOM.decl('b-form-radio', /** @lends block.prototype */ {

    onSetMod: {

        'js' : function() {

            var _this = this;

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this._val = this.findElem(this.elem('button', 'checked', 'yes'), 'radio').val();

            _this.elem('radio').each(function() {
                var mods = [];

                activeNode === this && (mods.push('focused'));
                this.checked && (mods.push('checked'));

                if(mods[0]) {
                    var button = _this.__self._getButtonByElem($(this));
                    $.each(mods, function(i, modName) {
                        _this.setMod(button, modName, 'yes');
                    });
                }
            });

        }

    },

    onElemSetMod : {

        'button' : {

            'focused' : {

                'yes' : function(elem) {
                    this
                        .delMod(this.elem('button', 'focused', 'yes'), 'focused')
                        .findElem(elem, 'radio').focus();
                }

            },

            'checked' : {

                'yes' : function(elem) {
                    this.setMod(elem.next(), 'next-for-checked', 'yes');

                    this._val = this
                        .findElem(elem, 'radio')
                        .attr('checked', true)
                        .val();

                    var prev = this.elem('button', 'checked', 'yes');
                    this.delMod(prev, 'checked');

                    this.trigger('change', {
                        current: elem,
                        prev: prev
                    });
                },

                '' : function(elem) {
                    this.delMod(elem.next(), 'next-for-checked');
                }

            },

            'next-for-checked' : {

                'yes' : function() {
                    this.delMod(this.elem('button', 'next-for-checked', 'yes'), 'next-for-checked');
                }

            },

            'disabled' : function(elem, modName, modVal) {

                elem.find(this.buildSelector('radio')).attr('disabled', modVal == 'yes');

            }

        }

    },

    /**
    Метод можно вызывать с параметром и без.
    Вызвав без парамерта получаем значение аттрибута value элемента radio, соответствующего активной кнопке.
    Вызвав с парамертом, в котором передаем значение аттрибута value произвольного элемента radio, делаем активной кнопку, соответствующую этому элементу radio.

    @param {String} [val] Значение аттрибута value какого-либо элемента radio данного блока.

    @returns {String|BEM.DOM} Аттрибут value активного элемента radio, либо объект блока */
    val : function(val) {

        if(typeof val == 'undefined') {
            return this._val;
        } else {
            var _this = this;
            this.elem('radio').each(function() {
                if(this.value == val) {
                    _this.setMod(_this.__self._getButtonByElem($(this)), 'checked', 'yes');
                    return false;
                }
            });
            return _this;
        }

    },

    /**
    Метод позволяет перевести все кнопки блока в ненажатое состояние.

    @returns {BEM.DOM} Объект блока */
    uncheckAll : function() {

        var button = this.elem('button', 'checked', 'yes');

        this
            .delMod(button, 'checked')
            .findElem(button, 'radio').attr('checked', false);

        this._val = undefined;

        return this;

    },

    _onChange : function(e) {
        var button = this.__self._getButtonByElem(e.data.domElem);
        e.target.checked?
            this.setMod(button, 'checked', 'yes') :
            this.delMod(button, 'checked');
    }

}, /** @lends block */ {

    live : function() {

        this
            .liveBindTo('radio', 'leftclick', function(e) {
                if(!e.target.disabled) {
                    var button = this.__self._getButtonByElem(e.data.domElem);
                    this
                        .setMod(button, 'focused', 'yes')
                        .setMod(button, 'checked', 'yes');
                }
            })
            .liveBindTo('radio', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('radio', 'focusin focusout', function(e) {
                this.setMod(
                    this.__self._getButtonByElem(e.data.domElem),
                    'focused',
                    e.type == 'focusin'? 'yes' : '');
            });

        return false;
    },

    /**
    Позволяет получить элемент button (b-form-radio__button) по какому-либо потомку этого элемента в DOM-дереве.

    @example
    var block = this,
        descendant_of_some_button = block.elem('radio')[3],
        button = block.__self._getButtonByElem($(radio))
    ;
    @param {jQuery} elem Элемент, являющийся потомком элемента button.

    @returns {jQuery} Ближайший предок elem, являющийся элементом button,
                      либо сам элемент elem, если он является элементом button */
    _getButtonByElem : function(elem) {

        return elem.closest(this.buildSelector('button'));

    }

});


})(BEM);
