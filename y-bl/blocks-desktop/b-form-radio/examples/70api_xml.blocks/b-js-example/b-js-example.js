BEM.DOM.decl('b-js-example', {
    _onClick : function(e) {
        var code = this.elem('content').text(),
            output = this.elem('output'),
            result = (1, eval)(code);
        output.text('→ ' + result);
        window.console && console.log && console.log(result);
    }
});
