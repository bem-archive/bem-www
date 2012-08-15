(function($, BEM, undefined) {

var DOM = BEM.DOM,
    HTML = BEM.HTML,

    KEYDOWN_EVENT = $.browser.opera ? 'keypress' : 'keydown',

    /** {String} */
    BLOCK_NAME = 'b-form-select';

/**
  Вариант данных для API
  @example
  var data = [
   {
       item: 'optgroup',
       label: 'Russia',
       disabled: 1,    // optional
       content: [
         { item: 'option', value: '1', content: 'Moscow' },
         { item: 'option', value: '1', content: 'Saint-Peterburg', disabled: 1 }
       ]
   },
   { item: 'option', value: '3', content: 'Paris', selected: 1 },
   { item: 'option', value: '7', content: 'California', disabled: 1 }
  ];

  formSelect.setOptions(data);
 */


DOM.decl('b-form-select', {

    onSetMod : {

        'js': function() {

            this._items = [];
            this._curItemIndex = -1;

            /** {Number} Высота строки в списке по-умолчанию */
            this._rowHeight = 22;

            // тригерим `change` у select-а, для синхронизации надписи на кнопке и выбранного пункта
            this._getSelectedText() !== this._buttonText() &&
                this.elem('select').trigger('change');

        },

        'disabled' : function(modName, modVal) {

            var disabled = modVal === 'yes';

            this.elem('select').attr('disabled', disabled);
            this._getButton().setMod(modName, modVal);

            disabled && this.delMod('opened').delMod('focused');

        },

        'focused' : {

            'yes' : function(modName, modVal) {

                if(this.hasMod('disabled', 'yes'))
                    return false;

                this._getButton().setMod(modName, modVal);

                this
                    .bindTo('keypress', function(e) {
                        this._onKeyPress(e);
                    })
                    .bindTo(KEYDOWN_EVENT, function(e) {
                        this._onKeyDown(e);
                    })
                    .trigger('focusin');

            },

            '' : function(modName) {

                this
                    .delMod('opened')
                    ._getButton().delMod(modName);

                this
                    .unbindFrom('keypress ' + KEYDOWN_EVENT)
                    .trigger('focusout');

            }

        },

        'opened' : {

            'yes' : function() {

                if(this.hasMod('disabled', 'yes'))
                    return false;

                this._focus()._updatePopupPos();

            },

            '' : function() {

                this._getPopup().hide();

            }

        }

    },

    open : function() {

        return this.setMod('opened', 'yes');

    },

    close : function() {

        return this.delMod('opened');

    },

    isOpened : function() {

        return this.hasMod('opened', 'yes');

    },

    /**
     * Устанавливает/возвращает выбранное значение
     * @param {String} [val]
     * @returns {String|BEM.DOM}
     */
    val : function(val) {

        if(typeof val === 'undefined') {
            return this.elem('select').val();
        }

        // NOTE: `$(select).val('value')` позволяет выбрать за-disable-нный элемент
        var valIndex = -1, optgroup;
        this.elem('option').each(function(idx) {
            this.value === val && !this.disabled &&
                (optgroup = $(this).parent('optgroup')[0], !(optgroup && optgroup.disabled)) &&
                (valIndex = idx);
        });

        valIndex > -1 && this._selectedIndex(valIndex);

        return this;
    },

    /**
     * Устанавливает/возвращает номер выбранного элемента
     * @private
     * @param {Number} [index]
     * @returns {Number}
     */
    _selectedIndex : function(index) {

        var prevIdx = this._getSelectedIndex();
        if(typeof index === 'undefined' || index === prevIdx) {
            // LEGO-7139: не тригерить `change` если значение не изменилось
            return prevIdx;
        }

        // jQuery 1.6+ only
        //this.elem('select').prop('selectedIndex', index);
        this.elem('select')[0].selectedIndex = index;

        this._buttonText(this._getSelectedText());

        if(this._items[0]) {
            var current = this._items.eq(index);
            this
                .delMod(this._items, 'selected')
                .setMod(current, 'selected', 'yes');
        }

        this.trigger('change', { index: index, prev: prevIdx });

        return index;

    },

    /**
     * Устанавливает новое содержимое select-а
     * @param {[Object]} data
     * @returns {BEM.DOM}
     */
    setOptions : function(data) {

        if(!data) return;

        DOM.update(this.elem('select'), HTML.build($.map(data, buildOption)));

        return this.updateItems();

    },

    /**
     * Обновить контент попапа
     */
    updateItems : function() {

        this._popup && this._updateItems();

        this.elem('select').trigger('change');

        return this;

    },

    _focus : function() {

        return this.setMod('focused', 'yes');

    },

    _blur : function() {

        return this.delMod('focused');

    },

    /**
     * Хелпер для чтения/обновления текста кнопки
     * @private
     * @param {String} [text]
     */
    _buttonText : function(text) {

        if(typeof text === 'undefined') {
            return this._getButton().elem('text').text();
        }

        return this._getButton().elem('text').html(text || ' &nbsp; ');

    },

    _onClick : function(e) {

        this.toggleMod('opened', 'yes', '');

    },

    _onFocus : function(e) {

        this.toggleMod('focused', 'yes', '', e.type === 'focusin');

    },

    _onSelectChange : function(e) {
        var _this = this;

        _this._buttonText(_this._getSelectedText());

        // XXX: иначе неверно работает в IE
        setTimeout(function() {
            _this.trigger('change', {
                index: _this._getSelectedIndex(),
                prev: -1
            });
        }, 1);
    },

    _onKeyPress : function(e) {

        if(e.keyCode === 13) {
            e.preventDefault();

            if(this.isOpened()) {
                this._curItemIndex > -1 ?
                    this._onSelectItem(this._items.eq(this._curItemIndex)) : this.close();
            } else {
                // LEGO-6711
                return this._getButton().delMod('pressed');
            }
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;

        if(keyCode === 38 || keyCode === 40) {
            e.preventDefault();

            if(!this.isOpened())
                return this.open(e);

            var len = this._items.length;
            if(len) {
                var direction = keyCode - 39, // пользуемся особенностями кодов клавиш "вверх"/"вниз" ;-)
                    idx = this._curItemIndex,
                    i = 0;

                do {
                    idx += direction;
                } while(idx >= 0 && idx < len &&
                    this._onEnterItem(this._items.eq(idx), true) === false && ++i < len);
            }
        } else if(keyCode === 32 && !this._keyPressed) {

            this._keyPressed = true;
            this._onClick();

            // XXX: LEGO-6757
            this.bindTo('keyup', function() {
                this.unbindFrom('keyup');
                this._keyPressed = false;
            });

        }

    },

    _onEnterItem : function(item, byKeyboard) {

        if(!this._isSelectableItem(item)) {
            return false;
        }

        var items = this._items,
            idx = this._curItemIndex;

        idx > -1 && this.delMod(items.eq(idx), 'hovered');
        idx = this._getItemIndex(item);
        idx > -1 && this.setMod(items.eq(this._curItemIndex = idx), 'hovered', 'yes');

        if(byKeyboard) {
            this._selectedIndex(this._curItemIndex);

            this._scrollToCurrent();
        }

    },

    _onLeaveItem : function(item) {

        var idx = this._curItemIndex;
        if(idx > -1 && idx === this._getItemIndex(item)) {
            this.delMod(this._items.eq(idx), 'hovered')._curItemIndex = -1;
        }

    },

    _onSelectItem : function(item) {

        if(this._isSelectableItem(item))
            this._selectedIndex(this._curItemIndex);

        // (HACK): Превентим сброс фокуса у b-form-button после выбора элемента
        this.afterCurrentEvent(function() {
            this._getButton().setMod('focused', 'yes');
        });

        return this.close();

    },

    _isOutsideClicked : function(e, data) {

        return this.containsDomElem($(data.domEvent.target));

    },

    _getItemIndex : function(item) {

        return $.inArray(item.get(0), this._items);

    },

    _getSelectedText : function() {

        return this.elem('select').find(':selected').text();

    },

    _getSelectedIndex : function() {

        return this.elem('select')[0].selectedIndex;

    },

    /**
     * @private
     * @param {jQuery} item
     * @returns {Boolean}
     */
    _isSelectableItem : function(item) {

        return !(this.hasMod(item, 'disabled', 'yes') || this.hasMod(item, 'label', 'yes'));

    },

    /**
     * Ленивый поиск кнопки
     * @private
     * @returns {BEM.DOM}
     */
    _getButton : function() {

        return this._button || (this._button = this.findBlockInside('b-form-button'));

    },

    /**
     * Ленивое построение попапа
     * @private
     * @returns {BEM.DOM}
     */
    _getPopup : function() {

        if(this._popup) return this._popup;

        var thisBlock = this,
            blockName = thisBlock.__self.getName(),
            list = {
                block: blockName,
                elem: 'list'
            },
            popupMix = {
                block: blockName,
                elem: 'popup',
                mods: {}
            };

        // пробрасываем нужные модификаторы из блока в popup
        ['size', 'layout', 'theme', 'width'].forEach(function(mod, i) {
            thisBlock.hasMod(mod) && (popupMix.mods[mod] = thisBlock.getMod(mod));
        });

        var popup = $(HTML.build({
                block: 'i-popup',
                underMix : [{ block : 'b-popupa', elem : 'under' }],
                content: {
                    block: 'b-popupa',
                    mods: thisBlock.params.popupMods,
                    mix: [
                        {
                            block: blockName,
                            js: { uniqId: thisBlock._uniqId }
                        },
                        popupMix
                    ],
                    content: {
                        elem: 'content',
                        content: list
                    }
                }
            }))
            .appendTo('body');

        DOM.init(popup);

        thisBlock._popup = popup
            .bem('i-popup')
            .on({
                'show' : function() {

                    thisBlock._curItemIndex = thisBlock._getSelectedIndex();

                    var current = thisBlock._items.eq(thisBlock._curItemIndex);
                    thisBlock
                        .delMod(thisBlock._items, 'selected')
                        .setMod(current, 'hovered', 'yes')
                        .setMod(current, 'selected', 'yes')
                        .bindToDoc('keydown', function(e) {
                            // Ловим `focusout` select-а с клавиатуры
                            if(e.keyCode === 9 && thisBlock.isOpened()) {
                                thisBlock._blur();
                            }
                        });

                },

                'outside-click' : function(e, data) {

                    thisBlock._isOutsideClicked(e, data) ?
                            e.preventDefault() : thisBlock._blur();

                },

                'hide' : function() {

                    thisBlock._curItemIndex = -1;

                    thisBlock
                        .delMod('opened')
                        .delMod(thisBlock._items, 'hovered')
                        .delMod(thisBlock.elem('popup'), 'scrollable')
                        .unbindFromDoc('keydown');

                }
            });

        thisBlock._updateItems();

        /*
         * (HACK, LEGO-7251)
         */
        thisBlock._outPopup = thisBlock.findBlockOutside('button', 'b-popupa');
        thisBlock._outPopup && thisBlock._outPopup.on('outside-click', function(e, data) {
                thisBlock._isOutsideClicked(e, data) && e.preventDefault();
            });

        return this._popup;
    },

    _updateItems : function() {

        var _this = this;

        _this.dropElemCache('item');

        DOM.update(_this.elem('list'),
                _this._buildItemsHtml(_this.elem('select').children()));

        _this._curItemIndex = -1;

        _this._items = this.elem('item').filter(function() {
            return !_this.hasMod($(this), 'label', 'yes');
        });

        return _this;

    },

    _updatePopupPos : function() {

        var btn = this._getButton().domElem,
            css = btn.offset(),
            popup = this._getPopup();

        css.top += btn.outerHeight();

        popup.show(css);

        this._calcPopupDimensions();

        this._scrollToCurrent();

    },

    _getRowHeight : function() {
        return this.elem('item').outerHeight();
    },

    _calcPopupDimensions : function () {

        if(!this._popupContent)
            this._popupContent = this._getPopup().findBlockInside('b-popupa').elem('content');

        var rows = parseInt(this.params.rows, 10) || false;
        if(rows && this.elem('item').size() > rows) {
            this._rowHeight = this._getRowHeight();

            this._popupContent.css('height', rows * this._rowHeight);

            this.setMod(this.elem('popup'), 'scrollable', 'yes');
        }

    },

    _scrollToCurrent : function() {

        if(!this._popupContent || this._curItemIndex < 0) return;

        var curOffsetTop = this.elem('item', 'selected', 'yes').get(0).offsetTop,
            popContent = this._popupContent,
            popScrollTop = popContent.scrollTop(),

            disp = curOffsetTop - popScrollTop,
            fact = this._rowHeight * 2,
            newScrollTop;

        if(disp > popContent.height() - fact) {
            newScrollTop = curOffsetTop - fact;
        } else if(popScrollTop && disp < fact) {
            newScrollTop = curOffsetTop - popContent.height() + fact;
        }

        newScrollTop && popContent.scrollTop(newScrollTop);

    },

    /**
     * @private
     * @param {JQuery} node
     * @param {String} block
     * @param {String|Object|Array} content
     * @param {Object} elMods
     * @returns {BEMJSON} BEMJSON-представление элемента
     */
    _buildItem : function(node, block, content, elMods) {
        var item = {
                block: block,
                elem: 'item',
                content: {
                    elem: 'text',
                    tag: 'span',
                    content: content || ' &nbsp; '
                },
                mods: {}
            };

        elMods && (item.mods = elMods);

        return item;
    },

    /**
     * @private
     * @param {Array} data
     * @returns {String}
     */
    _buildItemsHtml : function (data) {

        /** {String} Имя блока */
        var block = this.__self.getName(),
            /** {BEMJSON} разделитель в списке элементов */
            separatorItem = { block: block, elem: 'separator', tag: 'i' };

        var items = [{ block: block, elem: 'fade', tag: 'i' }],
            inGroup = false,
            /** {Function} */
            buildItem = this._buildItem;

        /**
         * @param {jQuery|[HTMLElement]} data
         * @param {Object} mods
         */
        function _iterateNodes(data, mods) {
            var len = data.length;
            if(len) {
                var i = 0;

                do {
                    var item = $(data[i]),
                        isDisabled = item.attr('disabled') && { disabled: 'yes' };

                    if(item.is('optgroup')) {
                        inGroup = true;

                        !item.prev().is('optgroup') && items.push(separatorItem);
                        items.push(buildItem(item, block, item.attr('label'),
                            $.extend({ label: 'yes' }, isDisabled, mods)));

                        _iterateNodes(item.children(), $.extend({ inner: 'yes' }, isDisabled, mods));
                    } else {
                        items.push(buildItem(item, block, item.text(),
                            $.extend(isDisabled, item.is(':selected') && { selected: 'yes' }, mods)));
                    }
                } while(++i < len || (inGroup && (items.push(separatorItem), inGroup = false)));
            }
        }

        _iterateNodes(data);

        return HTML.build(items);

    },

    destruct : function() {

        this._outPopup && this._outPopup.un('outside-click');

        var popup = this._popup;
        popup && popup.destruct.apply(popup, arguments);

        this.__base.apply(this, arguments);

    },

    getDefaultParams : function() {

        return {
            rows: 13,
            popupMods: {
                direction: 'down'
            }
        };

    }

}, {

    live : function() {

        var _this = this,
            eventsMap = {
                'mouseover': '_onEnterItem',
                'mouseout': '_onLeaveItem'
            };

        for(var evt in eventsMap) {
            (function(method, evt) {
                _this.liveBindTo('item', evt, function(e) {
                    this[method](e.data.domElem);
                });
            }(eventsMap[evt], evt));
        }

        _this
            .liveBindTo('item', 'mouseup', function(e) {
                e.which === 1 &&
                    (e.preventDefault(), this._onSelectItem(e.data.domElem));
            })
            .liveBindTo('focusin', function(e) {
                this._onFocus(e);
            })
            .liveBindTo('button', 'mousedown', function(e) {
                e.which === 1 &&
                    (e.preventDefault(), this._onClick(e));
            })
            .liveBindTo('select', 'change', function(e) {
                this._onSelectChange();
            });

        return false;

    }

});

/**
 * @param {Object} item
 * @param {Number} i
 * @param {Object} [params]
 * @returns {BEMJSON}
 */
function buildOption(item, i, params) {
    var it = {};

    if(item.item === 'option') {

        it = {
            block: BLOCK_NAME,
            elem: 'option',
            tag: 'option',
            attrs: { value: item.value },
            content: item.content
        };

        item.disabled && (it.attrs.disabled = 'disabled');
        item.selected && (it.attrs.selected = 'selected');

    } else if(item.item === 'optgroup') {

        it = {
            elem: 'option-group',
            tag: 'optgroup',
            attrs: { label: item.label }
        };

        item.disabled && (it.attrs.disabled = 'disabled');

        it.content = Array.isArray(item.content) ?
            item.content.map(function(node, i) {
                return buildOption(node, i);
            })
            : item.content;

    }

    it.block = BLOCK_NAME;

    params && $.map(params, function(val, k) {
        it[k] = val;
    });

    return it;
}


}(jQuery, BEM));
