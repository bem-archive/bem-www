BEM.DOM.decl('b-dummy', {

    onSetMod : {

        js : function() {

            var bFormSwitch = this.findBlockInside('b-form-switch'),
                methods = ['val', 'position'];

            function onChange() {
                var _this = this;
                setTimeout(function() {
                    $.each(methods, function(e) {
                        $('#' + this).text(" // '" + bFormSwitch[this]() + "'");
                    });
                }, 1);
            }

            bFormSwitch.on('change', onChange);

            onChange();

        }

    }

});
