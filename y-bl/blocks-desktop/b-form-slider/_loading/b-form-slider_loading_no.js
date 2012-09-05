/**
 * @requires BEM
 * @requires BEM.DOM
 * @namespace Описывает процесс построения `build` слайдера
 * @name Block
 */
BEM.DOM.decl('b-form-slider', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this.__base();

            this._buildSlider();

            // «выключаем» внутренние элементы
            this.hasMod('disabled', 'yes') &&
                this.setMod(this.elem('runner'), 'disabled', 'yes');

            if(typeof this.elem('body')[0].onselectstart !== 'undefined')
                this.elem('body')[0].onselectstart = function() { return false };

            this.afterCurrentEvent(function() {
                this.setMod('animation', 'yes');
            });
        },

        'animation' : {

            'yes' : function() {
                return !this._activeRunner;
            }

        }

    },

    onElemSetMod : {

        'runner' : {

            'focused' : {

                'yes' : function() {
                    if(this.__base.apply(this, arguments) === false)
                        return false;

                    this.delMod('animation');
                },

                '' : function() {
                    this.__base.apply(this, arguments);

                    this.setMod('animation', 'yes');
                }

            }

        }

    },

    /**
     * Шкала значений
     * @private
     */
    _buildScale : function(block) {
        var marks = this._scale.map(function(mark) {
                return {
                    block: block,
                    elem: 'mark',
                    mods: {},
                    attrs: { style: 'left:' + mark.percent + '%' },
                    content: mark.label || ''
                };
            }),
            hasMarks = 0,
            m = marks.length;

        while(hasMarks < m && !marks[hasMarks++].content.length);

        if(hasMarks < m) {
            /** __mark_postion_(first/last) */
            marks[0].mods.position = 'first';
            marks[this._scale.length - 1].mods.position = 'last';

            return {
                block: block,
                elem: 'scale',
                content: marks
            };
        }

    },

    /**
     * Ползунок
     * @private
     */
    _buildRunner : function(block, pos, percent) {
        var mods = { pos: pos },
            s = this._scale;

        // проверяем крайнии значени, для выставления модификатора `_state_left/right`
        pos = pos - 1;
        s = this._vals[pos] === s[0].value ?
                -1 : (this._vals[pos] === s[s.length - 1].value ? 1 : 0);

        s === 0 || (mods.state = s > 0 ? 'right' : 'left');

        return {
            block: block,
            elem: 'runner',
            mods: mods,
            attrs: {
                tabindex: 0,
                style: 'left:' + percent + '%'
            }
        };
    },

    /**
     * Область допустимых значений
     * @private
     */
    _buildAllowedRange : function(block) {
        var min = this._calcPercentByValue(this.min()),
            max = this.max();

        return {
            block: block,
            elem: 'allowed-range',
            attrs: {
                style: 'left:' + min + '%;' +
                    'width:' + ((max ? this._calcPercentByValue(max) : 100) - min) + '%;'
            }
        };
    },

    _buildSlider : function() {
        var _this = this,
            /** String */
            blockName = this.__self.getName(),

            /** Array<BEMJSON> Шкала */
            scale = this._buildScale(blockName),

            /** Array */
            percents = this._vals.map(function(val) {
                return _this._calcPercentByValue(val);
            }),
            n = percents.length - 1,

            /** Array<BEMJSON> */
            range = [
                {
                    block: blockName,
                    elem: 'range',
                    mods: { pos: 1 },
                    attrs: {
                        style: 'left:0%; width:' + (percents[0]) + '%'
                    }
                }
            ],

            /** Array<BEMJSON> */
            runners = [],

            /** Boolean */
            isCollapsed = false;

        percents.forEach(function(percent, i) {
            runners.push(_this._buildRunner(blockName, i + 1, percent));

            range.push({
                    block: blockName,
                    elem: 'range',
                    mods: { pos: i + 2 },
                    attrs: {
                        style: 'left:' + percent + '%; width:' + ( (i < n ? percents[i + 1] : 100) - percent ) + '%'
                    }
                });

            isCollapsed ||
                (i && percent === percents[i-1] && (isCollapsed = true));
        });

        /** Выставляем модификаторы `__runner_position_(first/last)` ползункам */
        if(runners.length > 1) {
            runners[0].mods.position = 'first';
            runners[runners.length - 1].mods.position = 'last';
        } else {
            // XXX: не использовать модификатор `__runner_pos` для одного ползунка
            runners[0].mods.pos = null;
            delete runners[0].mods.pos;
        }

        range.push(this._buildAllowedRange(blockName));

        // TODO:
//        this.hasMod('off-switcher') &&
//            marks.push({ block: block, elem: 'mark', attrs: { style: 'right: 5px' }, content: '∞' });

        isCollapsed && this.setMod('collapsed', 'yes');

        this.domElem.append(BEM.HTML.build(scale));
        this.elem('body').append(BEM.HTML.build(range.concat(runners)));

        // TODO: Runner label
        //this._popupa = this.findBlockInside('b-popupa');
    }

});


BEM.HTML.decl('b-form-slider', {

    onElem : {

        'runner' : function(ctx) {

            ctx.tag('a').attrs({ hideFocus: true });

        }

    }

});
