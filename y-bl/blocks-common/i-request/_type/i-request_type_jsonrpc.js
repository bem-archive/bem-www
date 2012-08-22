/**
Эта модификация блока i-request предназначена для отправки запросов и уведомлений по протоколу JSON-RPC.

Блок вспомогательный, он создается динамически в других блоках с помощью BEM.create('i-request_type_jsonrpc', {...}). Соответственно, этот блок нужно прописать в каком-нибудь deps.js, который учитывается при сборке вашей страницы.

При вызове BEM.create() вторым парметром указывается объект, с помощью которого можно задать дефолтные значения, которые потом можно будет опустить при вызовах метода send. Соответствующие параметры смотри в комментарии к методу send.

Получив инстанс этого блока его можно многократно использовать, вызывая его метод send.

@see Общая информация о протоколе: http://en.wikipedia.org/wiki/JSON-RPC
@see Спецификация версии 2.0 (последняя на апрель 2012): http://jsonrpc.org/specification */
(function (g_cl) {

!JSON && $.getScript('http://yandex.st/json2/2011-10-19/json2.min.js', function(){
    g_cl.queue.forEach( function (e) { e() } );
    g_cl.queue = [];
});

BEM.decl({ block: 'i-request_type_jsonrpc', baseBlock: 'i-request' }, {

    onSetMod : {
        'js': function () { this.__base() }
    },

    /**
    Основной метод блока. С помощью него можно отправить запрос или уведомление по протоколу JSON-RPC.
    При вызове можно переопределить любые дефолтные параметры, но только для этого конкретного вызова.

    @param {Object}         arg
    @param {String}         [arg.url] Адрес, на который будем отправлять запрос/уведомление.
                                      Может быть либо абсолютным, либо относительным, начинающимся со слеша.
    @param {String}         [arg.method] Имя удаленного метода, который требуется вызвать
    @param {Object|Array}   [arg.params] Параметры, которые будут переданы удаленному методу.
                                         До версии 2.0 в этом параметре можно передать только массив.
    @param {Number}         [arg.version] Версия протокола (1 или 2).
    @param {String}         [arg.type] См. $.ajax()
    @param {String}         [arg.dataType] См. $.ajax()
    @param {String}         [arg.contentType] См. $.ajax()
    @param {Number}         [arg.timeout] См. $.ajax()
    @param {Number}         [arg.retryCount] Сколько раз воспроизводить запрос в случае http-ошибок
    @param {Number}         [arg.retryInterval] Временной интервал в миллисекундах между повторными попытками
    @param {Bolean}         [arg.cache] Класть результаты успешных запросов в кеш.
                                        На идентичные запросы в будущем вызывать коллбек success с данными из кеша.
    @param {String}         [arg.cacheGroup] Название группы в кеше.
    @param {Number}         [arg.cacheSize] Максимальное число объектов в кеш-группе.
    @param {Function}       [arg.success] Коллбек при удачном исходе
    @param {Function}       [arg.error] Коллбек при неудачном исходе. Будет вызван в т.ч. и при http-ошибках */
    send : (function (cl) {

        return function (arg) {

            var self = this,
                defaults = this.params,
                name,
                cache
            ;
            for ( name in defaults ) {
                arg[name] !== undefined || ( arg[name] = defaults[name] );
            }

            if ( !arg.url || !arg.method ) { return }

            /** Проверим кеш */
            cache = this.getFromCache(arg, arg.method + arg.params + arg.url);
            if ( cache && arg.success ) {
                arg.success(cache);
                return;
            }

            /**
            Если переданы коллбеки, значит пользователь отправляет именно запрос,
            а не уведомление, соответственно в запрос нужно добавить идентификатор. */
            if ( arg.success || arg.error ) {
                arg.id = cl.counter++;
            }
            /**
            В версиях JSON-RPC ниже 2.0 при отправке уведомлений в поле id передается null. */
            else if ( arg.version < 2 ) {
                arg.id = null;
            }
            /**
            В версии 2.0 в таких случаях в поле id ничего не передается. */
            else {
                arg.id = undefined;
            }

            /**
            Если ручка находится на чужом хосте, то нужно использовать jsonp. */
            if ( /^https?:\/\//.test(arg.url) && arg.url.indexOf(cl.origin) != 0 ) {
                arg.type = "GET";
                arg.dataType = "jsonp";
            }

            /**
            В версии 2.0 введено обязательное поле jsonrpc, значением которого должна быть строка "2.0". */
            arg.version == 2 ? ( arg.jsonrpc = "2.0" ) : ( arg.jsonrpc = undefined );

            /**
            Если нативного объекта JSON нет, а библиотечка еще не прогрузилась, то откладываем этот вызов на потом. */
            if ( !JSON ) {
                g_cl.queue.push(function () { self.send(arg) });
                return;
            }

            /**
            Свойства со значением undefined из результирующей строки удаляются. */
            arg.data = JSON.stringify({
                jsonrpc: arg.jsonrpc,
                id: arg.id,
                method: arg.method,
                params: arg.params
            })

            $.ajax({
                url: arg.url,
                type: arg.type,
                dataType: arg.dataType,
                contentType: arg.contentType,
                processData: arg.type == "GET",
                timeout: arg.timeout,
                data: arg.type == "GET" ? { json: arg.data } : arg.data,
                success: function (data) {
                    if ( data.error ) {
                        arg.error && arg.error(data.error);
                    } else {
                        arg.success && arg.success(data.result);

                        /**
                        Вторым параметром передается нечто (строка/объект), что однозначно идентифицирует запрос,
                        потом этот же параметр нужно использовать для извлечения из кеша. */
                        self.putToCache(arg, arg.method + arg.params + arg.url, data.result);
                    }
                },
                error: function (data) {
                    if ( arg.retryCount-- > 0 ) {
                        setTimeout( function () { self.send(arg) }, arg.retryInterval );
                    } else {
                        arg.error && arg.error(data);
                    }
                }
            })
        }
    })({
        origin: location.protocol + "//" + location.host,
        counter: 0
    }),

    getDefaultParams : function() {
        /**
        Дефолтные параметры, относящиеся как к запросу вообще,
        так и специфичные для протокола JSON-RPC (version, method, params).
        В момент создания блока эти параметры можно переопределить. Полный список параметров смотри в комментирии к методу send */
        return $.extend(
            this.__base(),
            {
                cache: true,
                type: "POST",
                dataType: "json",
                contentType: 'application/json',
                version: 2,
                method: "system.listMethods",
                params: [],
                timeout : 20000,
                retryCount : 0,
                retryInterval : 2000
            }
        );
    }
});

})({ queue: [] });