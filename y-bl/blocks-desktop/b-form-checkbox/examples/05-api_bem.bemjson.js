({
    block: 'b-page',
    title: 'b-form-checkbox',
    head: [
        { elem: 'css', url: '_05-api_bem.css', ie: false },
        { elem: 'css', url: '_05-api_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_05-api_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_05-api_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_05-api_bem.ie9.css', ie: 'IE 9' },
        { elem: 'css', url: '_05-api_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_05-api_bem.js' }
    ],
    content: [{
        tag: 'table',
        content: {
            tag: 'tr',
            content: [
                {
                    tag: 'td',
                    attrs: { style: 'background:#eaede2; padding:0 10px; vertical-align: middle;' },
                    content: { block: 'b-form-checkbox', mods: { theme: 'grey-l', size: 'l' } }
                },
                {
                    tag: 'td',
                    content: [
                        { block: 'b-js-example', content: "$('.b-form-checkbox').bem('b-form-checkbox').toggle()" },
                        { block: 'b-js-example', content: "$('.b-form-checkbox').bem('b-form-checkbox').setMod('checked', 'yes')" },
                        { block: 'b-js-example', content: "$('.b-form-checkbox').bem('b-form-checkbox').delMod('checked')" },
                        '<pre>val() <span id="val"/></pre>\n' +
                        '<pre>isChecked() <span id="isChecked"/></pre>\n' +
                        '<pre>isDisabled() <span id="isDisabled"/></pre>'
                    ]
                }
            ]
        }
    }, "<script>\n" +
        "$(function(){\n" +
            "$('.b-form-checkbox').bem('b-form-checkbox').on('change', function() {\n" +
                "$('#val').text('→ ' + this.val());\n" +
                "$('#isChecked').text('→ ' + this.isChecked());\n" +
                "$('#isDisabled').text('→ ' + this.isDisabled());\n" +
            "});\n" +
        "});\n" +
        "</script>"
    ]
})
