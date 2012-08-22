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
            'appcurl-host' : 'www.appcurl.com',
            'api-appcurl-host' : 'api.appcurl.com',
            'airomo-host' : 'www.airomo.com',
            'appsociety-host' : 'apps.airomo.com',
            'api-host': 'api.airomo.com',
            'app-api-host' : 'appapi.airomo.com',
            'airomo-static-host' : 'static.airomo.com',
            'page-url': '/'
        };

    }

}, {

    param  : function(name) {

        return (this._params || {})[name];

    }

});