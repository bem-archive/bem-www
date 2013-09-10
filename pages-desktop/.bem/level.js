var extend = require('bem/lib/util').extend,
    PATH = require('path'),

    BEM_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'bemdecl.js': 'v2/bemdecl.js',
        'deps.js'   : 'v2/deps.js',
        'bemhtml'   : PATH.join(BEM_TECHS, 'v2/bemhtml.js'),
        'css'       : 'v2/css',
        'ie.css'    : 'v2/ie.css',
        'js'        : 'v2/js-i',
        'html'      : PATH.join(BEM_TECHS, 'v2/html.js')
//        'i18n': PATH.join(BEM_TECHS, 'i18n.js'),
//        'i18n.js': PATH.join(BEM_TECHS, 'i18n.js.js'),
//        'i18n.html': PATH.join(BEM_TECHS, 'i18n.html.js')
    };
};

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../y-bl/blocks-common',
            '../../y-bl/blocks-desktop',
            '../../blocks-common',
            '../../blocks-desktop',
            '../../configs/current'
        ])
    });
};
