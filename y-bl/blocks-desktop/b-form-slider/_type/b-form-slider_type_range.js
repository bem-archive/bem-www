/**
 * @requires BEM
 * @requires BEM.DOM
 */

(function(BEM, undefined) {


/**
 * @namespace Слайдер, для выбора диапазона значений
 * @name Block
 */
BEM.DOM.decl({ block: 'b-form-slider',
        modName: 'type', modVal: 'range' }, /** @lends Block.prototype */ {

    onSetMod : {

        'collapsed' : function(modName, modVal) {
            this.trigger(modVal === 'yes' ? 'collapse' : 'separate');
        }

    },

    _update : function() {
        this.__base();

        // определяем «схлопывание» ползунков

        var i = 0,
            vals = this._vals,
            n = vals.length - 1,
            isSeparated = false;

        while(i < n && (isSeparated = vals[i] !== vals[++i]));

        this.toggleMod('collapsed', '', 'yes', isSeparated);
    },

    /**
     * Выставить значение `val` в индекс `idx`.
     * Дополнительно обновить значения ближайших ползунков, если необходимо.
     * @private
     * @param {Number} idx Индекс изменяемого значения
     * @param {Number} val Новое значение
     * @returns {Boolean} Измелилось ли значение?
     */
    _val : function(idx, val) {
        var i = idx,
            vals = this._vals,
            prev = vals[idx], next, inc;

        if(!this.__base(idx, val))
            return false;

        // обновляем значения соседних по направлению движения ползунков, если необходимо
        val = vals[idx];
        inc = prev > val ? -1 : 1;

        while((i += inc, next = vals[i],
                (typeof next !== 'undefined' &&
                        (inc > 0 ? (next <= val) : (next >= val)) ))) {
            vals[i] = val;
        }

        return true;
    }

});

}(BEM));
