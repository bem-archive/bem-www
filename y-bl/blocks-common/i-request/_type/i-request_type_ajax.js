BEM.decl({ block : 'i-request_type_ajax', baseBlock : 'i-request' }, {

    onSetMod : {

        'js' : function() {

            this.__base();
            this._requestNumber = this._number = this._preventNumber = this._retryCount = 0;

        }

    },

    _get : function(request, onSuccess, onError, params) {

        this._number++;
        this._requestNumber++;
        this._retryCount = params.retryCount;

        this.__base.apply(this, arguments);

    },

    _do : function(request, onSuccess, onError, params) {

        var _this = this;
        if(_this._number > _this._preventNumber) { // условие на случай, если кто-то синхронно позовет preventCallbacks
            var args = arguments,
                settings = {
                    data : params.data?
                        $.extend({}, params.data, request) :
                        request,
                    success : _this._wrapCallback(function(respArgs, requestNumber, number) {
                            _this._onSuccess(_this._buildCacheKey(request, params), request, respArgs[0], params);
                            _this._allowCallback(requestNumber, number) &&
                            onSuccess.apply(params.callbackCtx, respArgs);
                        }),
                    error : _this._wrapCallback(function(respArgs, requestNumber, number) {
                            _this._allowCallback(requestNumber, number) &&
                                (_this._retryCount-- > 0?
                                    setTimeout(
                                        function() {
                                            _this._do.apply(_this, args);
                                        },
                                        params.retryInterval) :
                                    onError && onError.apply(params.callbackCtx, respArgs));
                            })
                };

            $.each(['url', 'dataType', 'timeout', 'type', 'jsonp', 'jsonpCallback'].concat(params.paramsToSettings || []), function(i, name) {
                settings[name] = params[name];
            });

            $.ajax(settings);
        }

    },

    _wrapCallback : function(callback) {

        var requestNumber = this._requestNumber,
            number = this._number;

        return function(data) {
            data !== null && callback(arguments, requestNumber, number);
        };

    },

    _allowCallback : function(requestNumber, number) {

        return number > this._preventNumber && this._requestNumber == requestNumber;

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string'?
            obj :
            this.__base(obj) + params.url;

    },

    abort : function() {

        this._preventNumber = ++this._number;

    },

    /**
     * @deprecated использовать abort
     */
    preventCallbacks : function() {

        this.abort();

    },

    getDefaultParams : function() {

        return $.extend(
            this.__base(),
            {
                cache         : true,
                type          : 'GET',
                dataType      : 'jsonp',
                timeout       : 20000,
                retryCount    : 0,
                retryInterval : 2000
            });

    }

});
