/**
 * require BEM
 * require BEM.DOM
 */

BEM.DOM.decl({ block: 'b-form-select', modName: 'layout', modVal: 'content' }, {

    _calcPopupDimensions : function() {

        this.__base.apply(this, arguments);

        this._popupContent.css('width',
            this._getButton().domElem.outerWidth() - this.__self.FOCUS_OFFSET_HORIZ * 2);

    }

}, {

    /** {Number} учитывам отступ появляющийся при фокусе на кнопке */
    FOCUS_OFFSET_HORIZ : 2

});

