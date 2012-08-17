/**
 * @requires BEM
 * @requires BEM.DOM
 */

(function($, BEM, undefined) {

var KEYDOWN_EVENT = $.browser.opera ? 'keypress' : 'keydown';

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-form-slider', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this._setScale();

            this._setVals();

            this.on('change', this._onChange, this);
        },

        'disabled' : function(modName, modVal) {
            this.setMod(this.elem('runner'), modName, modVal);
        }

    },

    onElemSetMod : {

        'runner' : {

            'disabled' : function(elem, modName, modVal) {
                var isDisabled = modVal === 'yes';

                isDisabled && this.delMod(elem, 'focused');

                elem.attr('tabindex', ((isDisabled)? '-1' : '0'));

                this._getInputs()[this._getRunnerIdx(elem)].toggleMod(modName, 'yes', '', isDisabled);
            },

            'focused' : {

                'yes' : function(elem, modName, value) {
                    if(this.isRunnerDisabled(elem) || this.isDisabled())
                        return false;

                    this.delMod(this.elem('runner'), modName);

                    this.bindToDoc(KEYDOWN_EVENT, function(e){
                        switch(e.keyCode) {

                        case 40:
                        case 37:
                            e.preventDefault();
                            this.prev();
                            break;

                        case 38:
                        case 39:
                            e.preventDefault();
                            this.next();
                            break;

                        }
                    });

                    this._interval = this._getIntervalByValue(this._vals[this._getRunnerIdx(elem)]);

                    elem.focus();
                },

                '' : function(elem, modName, value, prev) {
                    this.unbindFromDoc(KEYDOWN_EVENT);

                    elem.eq(this._activeRunner) && (this._activeRunner = null);
                }

            }

        }

    },

    _setScale : function() {
        var scale = this._scale = this.params.scale;

        scale[0].percent = 0;
        scale.length > 1 && (scale[scale.length - 1].percent = 100);
    },

    _setVals : function() {
        this._vals = this._getInputs().map(function(block) {
            var v = parseFloat(block.val());
            return isNaN(v) ? _this.min() : v;
        });
    },

    _getInputs : function() {
        return this._inputs || (this._inputs = this.findBlocksInside('b-form-input'));
    },

    _getInputIdx : function(input) {
        return $.inArray(input, this._getInputs());
    },

    _getRunnerIdx : function(runner) {
        return this.hasMod(runner, 'pos') ?
                this.getMod(runner, 'pos') - 1 : 0;
    },

    _getActiveRunner : function() {
        return this._activeRunner || (this._activeRunner = this.elem('runner', 'focused', 'yes'));
    },

    _getClosestRunnerByValue : function(val) {
        var sc = this._scale,
            distance = sc[sc.length - 1].value - sc[0].value, //this.max() - this.min(),
            runner;

        this._vals.forEach(function(value, i) {
            var valDistance = value - val,
                absDistance = Math.abs(valDistance),
                cRunner;

            if(absDistance <= distance) {
                // проверяем случай если ползунки схлопнуты
                if(runner && absDistance === distance && valDistance > 0) return;

                distance = absDistance;

                cRunner = this.elem('runner').eq(i);
                this.isRunnerDisabled(cRunner) || (runner = cRunner);
            }
        }, this);

        return runner;
    },

    /* Math */

    _getCoordFromEvent : function(e) {
        return typeof e.clientX === 'number'?
            e.clientX :
            e.originalEvent.touches[0].clientX;
    },

    _calcPercentByValue : function(val) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByValue(val) : 0;
        return calcPercentForInterval(scale[it], scale[it + 1], val);
    },

    _calcPercentsByValue : function(vals) {
        var _this = this;
        return vals.map(function(val){
            return _this._calcPercentByValue(val);
        });
    },

    _calcPercentByCoord : function(coord) {
        return (coord * 100 / this.elem('body').width()).toFixed();
    },

    _calcValueByPercent : function(percent) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByPercent(percent) : 0;
        return calcValueForInterval(scale[it], scale[it + 1], percent);
    },

    _calcPercentByEvent : function(e) {
        // TODO: учитывать ширину ползунка при расчетах
        var coord = this._getCoordFromEvent(e) - this.elem('body').offset().left;
        return this._calcPercentByCoord(coord);
    },

    _calcValueByEvent : function(e) {
        return this._calcValueByPercent(this._calcPercentByEvent(e));
    },

    /* Sync UI */

    _updateOne : function(idx, percents) {
        percents || (percents = this._calcPercentsByValue(this._vals));

        var rangePrevLeft = idx ? percents[idx - 1] : 0,
            rangeNextWidth = (idx === percents.length - 1 ? 100 : percents[idx + 1]) - percents[idx];

        // LEGO-7371
        rangeNextWidth > 0 && (rangeNextWidth -= 0.001);

        this.elem('range')
            .eq(idx).css({ left: rangePrevLeft + '%', width: percents[idx] - rangePrevLeft + '%' }).end()
            .eq(idx + 1).css({ left: percents[idx] + '%', width: rangeNextWidth + '%' });

        var st = this._scale,
            runner = this.elem('runner').eq(idx);

        /** {Number} Определяет крайние состояния ползунка (__runner_state_left/_right) */
        st = this._vals[idx] === st[0].value ?
                -1 : (this._vals[idx] === st[st.length - 1].value ? 1 : 0);

        runner.css('left', percents[idx] + '%');
        this
            .toggleMod(runner, 'state', 'left', '', st < 0)
            .toggleMod(runner, 'state', 'right', '', st > 0);
    },

    _updateRange : function() {
        var min = this._calcPercentByValue(this.min()),
            max = this.max();

        this.elem('allowed-range')
            .css({ left: min + '%', width: ((max ? this._calcPercentByValue(max) : 100) - min) + '%' });
    },

    _update : function() {
        var _this = this,
            percents = this._calcPercentsByValue(this._vals);

        this._vals.forEach(function(value, idx){
            _this._updateOne(idx, percents);
        });
    },

    /* Events */

    _onMouseDown : function(e) {
        e.preventDefault();

        if(e.which !== 1 || this.isDisabled() || this.isRunnerDisabled(e.data.domElem))
            return;

        this
            .bindToDoc('mousemove touchmove',this._onMouseMove)
            .bindToDoc('mouseup', this._onMouseUp)
            .setMod(e.data.domElem, 'focused', 'yes');
    },

    _onMouseMove : function(e) {
        this.vals(this._getRunnerIdx(this._getActiveRunner()), this._calcValueByEvent(e));
    },

    _onMouseUp : function(e) {
        this.unbindFromDoc('mousemove touchmove mouseup touchend');
    },

    _onTrackClick : function(e) {
        if(this.isDisabled()) return;

        var val = this._calcValueByEvent(e),
            runner = this._getClosestRunnerByValue(val);

        if(runner) {
            this.vals(this._getRunnerIdx(runner), val);
            //runner.focus();
        }
    },

    _onChange : function() {
        var inputs = this._getInputs();

        this._vals.forEach(function(val, i) {
            inputs[i].val(val);
        });

        return this;
    },

    _onInputChange : function(e) {
        var idx = this.elem('input').index(e.data.domElem),
            prev = this._vals[idx],
            input = this._getInputs()[idx];

        this.vals(idx, input.val());

        prev === this._vals[idx] && input.val(this._vals[idx]);
    },

    /* API */

    /**
     * Валидация значения `val` в области возможных значений рельсы.
     * В базовой реализации слайдера, областью возможных значений рельсы
     * является весь слайдер.
     * @private
     * @returns {Number}
     */
    _testRange : function(idx, val) {
        var scale = this._scale,
            min = scale[0].value,
            max = scale[scale.length - 1].value;

        /*
        min = this._vals[idx - 1] || this._scale[this._interval].value;
        min < this.min() && (min = this.min());

        max = this._vals[idx + 1] || this._scale[this._interval + 1].value;
        max > this.max() && (max = this.max());
        */

        val > max && (val = max);
        val < min && (val = min);

        return val;
    },

    /**
     * Выставить значение `val` в индекс `idx`
     * @private
     * @param {Numner} idx Индекс ползунка
     * @param {Number} val Значение
     * @returns {Boolean} Измелилось ли значение?
     */
    _val : function(idx, val) {
        val = parseFloat(val);

        // автовалидация ввода «не числа»
        if(isNaN(val)) return true;

        this._interval = this._getIntervalByValue(val);

        var step = this._scale[this._interval].step,
            mod = val % step;

        mod && ( val = val - mod + (step - mod > (step/2).toFixed(5) ? 0 : step) );

        val = this._testRange(idx, parseFloat(val.toPrecision(5)));

        return this._vals[idx] === val ? false : (this._vals[idx] = val, true);
    },

    /**
     * Выставить/получить значение первого ползунка
     * @param {Number} [val] Выставляемое значение
     * @param {Object} [data] Дополнительные данные пробрасываемые в событие `change` блока
     * @returns {BEM.DOM|Number}
     */
    val : function(val, data) {
        return this.vals(0, val, data);
    },

    /**
     * Выставить/получить значения ползунков
     *
     * @example
     * this.vals([1,2,3])   -> [1, 2, 3]
     * this.vals()          -> [1, 2, 3]
     * this.vals(0)         -> 1
     * this.vals(0, 12)     -> [12, 2, 3]
     *
     * @param {Number} [idx=0]
     * @param {Number|Number[]} [val]
     * @param {Object} [data]
     * @returns {BEM.DOM|Number}
     */
    vals : function(idx, val, data) {
        var idxType = typeof idx;
        if(typeof val === 'undefined') {
            if(idxType !== 'object')
                return idxType === 'number' ? this._vals[idx] : this._vals;

            val = idx;
        }

        var _this = this,
            isChanged = false;

        if($.isArray(val)) {
            if(val.length < this._vals.length)
                return _this;

            this._vals.forEach(function(v, i) {
                _this._val(i, val[i]) && !isChanged && (isChanged = true);
            });
        } else {
            isChanged = _this._val(idx, val);
        }

        if(isChanged) {
            this._update();
            this.trigger('change', data);
        }

        return this;
    },

    /**
     * Получить/установить минимальное допустимое значение
     * @param {Number} [min]
     * @returns {Number|BEM.DOM}
     */
    min : function(min) {
        var params = this.params;

        if(typeof min === 'undefined')
            return params.min ? params.min : this._scale[0].value;

        return this.range(min, this.max());
    },

    /**
     * Получить/установить максимальное допустимое значение
     * @param {Number} [max]
     * @returns {Number|BEM.DOM}
     */
    max : function(max) {
        var params = this.params;

        if(typeof max === 'undefined')
            return params.max ? params.max : this._scale[this._scale.length - 1].value;

        return this.range(this.min(), max);
    },

    /**
     * Получить/установить допустимые значения
     * @param {Number} [min]
     * @param {Number} [max]
     * @returns {Array|BEM.DOM}
     */
    range : function(min, max) {
        if(typeof min === 'undefined')
            return [this.min(), this.max()];

        min < max || (max = this._scale[this._scale.length - 1].value);

        this.params.min = min;
        this.params.max = max;

        this._updateRange();
        this._update();

        return this;
    },

    /**
     * Сдвинуть активный ползунок на «шаг» назад
     */
    prev : function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' || !this._vals[idx])
            return;

        var val = this._vals[idx] - this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval < this._interval &&
            (val = this._vals[idx] - this._scale[interval].step);

        return this.vals(idx, val);
    },

    /**
     * Сдвигает ативный ползунок на «шаг» вперед
     */
    next : function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' ||
                this._vals[idx] >= this._scale[this._scale.length - 1].value)
            return;

        var val = this._vals[idx] + this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval > this._interval && (val = this._scale[interval].value);

        return this.vals(idx, val);
    },

    /**
     * @param runner {Number|jQuery}
     * @returns {Boolean}
     */
    isRunnerDisabled : function(runner) {
        if(typeof runner === 'number')
            runner = this.elem('runner').eq(runner);
        return this.hasMod(runner, 'disabled');
    },

    /**
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled');
    },

    /**
     * Возвращает текущий для активного ползунка интервал на шкале
     * @returns {Number}
     */
    getInterval : function() {
        return this._interval;
    },

    /**
     * Возвращает интревал на шкале в который попадает значение `val`
     * @private
     * @param val {Number} Значение в единицах
     * @returns {Number}
     */
    _getIntervalByValue : function(val) {
        var scale = this._scale,
            n = scale.length, i = 1;

        if(val <= scale[0].value) return 0;
        else if(val >= scale[n - 1].value) return n - 2;

        for(i = 1; i < n; i++) {
            if(val < scale[i].value)
                return i - 1;
        }

        return n - 2;
    },

    /**
     * Возвращает интревал на шкале в который попадает значение `percent`
     * @private
     * @param percent {Number} Значение в процентах
     * @returns {Number}
     */
    _getIntervalByPercent : function(percent) {
        if(percent <= 0) return 0;
        else if(percent >= 100) return this._scale.length - 2;

        var scale = this._scale,
            n = scale.length, i;

        for(i = 0; i < n; i++) {
            if(( percent >= scale[i].percent ) &&
                    ( percent < (scale[i + 1] ? scale[i + 1].percent : 100) ))
                return i;
        }

        return n - 2;
    },

    getDefaultParams : function() {
        return {
            scale: [
                { percent: 0, value: 0, step: 10, label: '' },
                { percent: 100, value: 100, step: 10, label: '' }
            ]
        };
    }

}, /** @lend Block */ {

    live : function() {

        this
            .liveBindTo('click', 'leftclick', function(e){
                this._onTrackClick(e);
            })
            .liveBindTo('runner', 'focusin', function(e) {
                this.setMod($(e.target), 'focused', 'yes');
            })
            .liveBindTo('focusout', function(e){
                this.delMod(this.elem('runner'), 'focused');
            })
            .liveBindTo('runner', 'mousedown touchstart', function(e){
                this._onMouseDown(e);
            })
            .liveBindTo('input', 'focusout', function(e) {
                this._onInputChange(e);
            })
            .liveBindTo('input', 'keypress', function(e) {
                e.keyCode === 13 && this._onInputChange(e);
            });

        return false;
    }

});

function calcPercentForInterval(a, b, val) {
    return ((b.percent - a.percent) * (val - a.value) / (b.value - a.value) + a.percent).toFixed();
}

function calcValueForInterval(a, b, percent) {
    return (b.value - a.value) * (percent - a.percent) / (b.percent - a.percent) + a.value;
}

}(jQuery, BEM));
