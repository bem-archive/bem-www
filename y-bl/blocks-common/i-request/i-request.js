(function() {

var cache = {};

BEM.decl('i-request', {

    get : function(request, onSuccess, onError, params) {

        if(!$.isFunction(onError)) {
            params = onError;
            onError = this.params.onError;
        }

        this._get(request, onSuccess, onError, $.extend({}, this.params, params));

    },

    _get : function(request, onSuccess, onError, params) {

        var key = this._buildCacheKey(request, params),
            cacheGroup = cache[params.cacheGroup];

        params.cache && cacheGroup && key in cacheGroup.data?
            onSuccess.call(this.params.callbackCtx, cacheGroup.data[key]) :
            this._do(request, onSuccess, onError, params);
    },

    _do : function(request, onSuccess, onError, params) {},

    _onSuccess : function(requestKey, request, data, params) {

        params.cache && this.putToCache(params, requestKey, data);

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string' ? obj : $.param(obj);

    },

    putToCache : function(params, request, data) {

        var cacheGroup = cache[params.cacheGroup] || (cache[params.cacheGroup] = { keys : [], data : {}});

        if(cacheGroup.keys.length >= params.cacheSize) {
            delete cacheGroup.data[cacheGroup.keys.shift()];
        }

        var key = this._buildCacheKey(request, params);

        cacheGroup.data[key] = data;
        cacheGroup.keys.push(key);
    },
    
    /**
    Метод проверяет есть ли в кеше данные, соответствующие запросу и возвращает их, если они есть.
    
    @param {Object} params Параметры инстанса блока. 
                           В данном случае в этом объекте интересуют только поля cacheGroup и cache
    @param {String|Object} request Нечто, однозначно идентифицирующее запрос
                                   и ранее использованое при вызове метода putToCache 
    @returns Либо данные (могут быть разных типов) из кеша, либо undefined. */
    getFromCache : function(params, request) {

        var key = this._buildCacheKey(request, params),
            cacheGroup = cache[params.cacheGroup]
        ;
        if ( params.cache && cacheGroup && key in cacheGroup.data ) {
            return cacheGroup.data[key];
        }
    },

    dropCache : function() {

        delete cache[this.params.cacheGroup];

    },

    getDefaultParams : function() {

        return {
            cache : false,
            cacheGroup : 'default',
            cacheSize : 100,
            callbackCtx : this
        };

    }

});

})();