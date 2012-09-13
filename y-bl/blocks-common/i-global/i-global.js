BEM.DOM.decl('i-global', {

    onSetMod : {

        'js' : function() {

            // del system properties
            this.del(this.__self._params = $.extend({}, this.params), 'uniqId', 'name');

            var params = this.__self._params;

        }

    },

    getDefaultParams : function() {

        return {
            'some-param' : 'someval'
        };

    }

}, {

    param  : function(name) {

        return (this._params || {})[name];

    }

});