BEM.DOM.decl('b-form-attach', {

    onSetMod : {

        'js' : function() {

            this._noFileText = this.elem('text').text();
            this._update();

            this.bindTo('reset', 'click', this.resetFile);

        }

    },

    /**
     * @returns {String}
     */
    getPath : function() {

        return this.findBlockInside('b-form-button').findElem('input').val();

    },

    resetFile : function() {

        this.findBlockInside('b-form-button').findElem('input').replaceWith(BEM.HTML.build({
            block: 'b-form-button',
            elem: 'input',
            tag: 'input',
            attrs: { name: 'attachment', type: 'file' }
        }));

        this._update();
        this.delMod(this.elem('reset'), 'visibility');

        return this;
    },

    /**
     * @private
     */
    _update : function() {

        var fileName = this._getFileByPath(this.getPath());
        this._setFile(fileName);
        this._setExtension(this._getExtension(fileName));
        this.setMod(this.elem('reset'), 'visibility', 'visible');

    },

    /**
     * @private
     * @param {String} path
     * @returns {String}
     */
    _getFileByPath : function(path) {

        return path.split('\\').pop();

    },

    /**
     * @private
     * @param {String} fileName
     */
    _setFile : function(fileName) {

        this.setMod(this.elem('holder'), 'state', fileName ? '' : 'hidden');
        this.elem('text').text(fileName || this._noFileText);

    },

    _extensionsToMods: {
        'zip' : 'archive',
        'rar' : 'archive',
        'tar' : 'archive',
        'gz' : 'archive',
        '7z' : 'archive',
        'gif' : 'gif',
        'jpg' : 'jpg',
        'jpeg' : 'jpg',
        'png' : 'png',
        'eml' : 'eml',
        'exe' : 'exe',
        'm4a' : 'audio',
        'ogg' : 'audio',
        'mp3' : 'mp3',
        'wav' : 'wav',
        'wma' : 'wma',
        'flv' : 'video',
        'mov' : 'mov',
        'wmv' : 'wmv',
        'mp4' : 'mp4',
        'avi' : 'avi',
        'xls' : 'xls',
        'doc' : 'doc',
        'docx' : 'doc',
        'txt' : 'txt',
        'pdf' : 'pdf',
        'ppt' : 'ppt'
    },

    /**
     * @private
     * @param {String} fileName
     * @returns {String}
     */
    _getExtension : function(fileName) {

        return this._extensionsToMods[fileName.split('.').pop().toLowerCase()] || '';

    },

    /**
     * @private
     * @param {String} extension
     */
    _setExtension : function(extension) {

        this.setMod(this.elem('holder'), 'file', extension || 'unknown');

    }

}, {

    live : function() {

        this.liveBindTo('change', function() {
            this._update();
        });

        if ($.browser.msie && parseInt($.browser.version) <= 8) {

            var intervalId,
                prevPath;

            this.liveBindTo('click', function() {

                if (typeof prevPath == 'undefined')
                    prevPath = this.getPath();

                var that = this;

                intervalId = setInterval(function() {
                    var path = that.getPath();
                    if (prevPath != path) {
                        clearInterval(intervalId);
                        prevPath = path;
                        that._update();
                    }
                }, 300);

            });

        }

        return false;

    }

});
