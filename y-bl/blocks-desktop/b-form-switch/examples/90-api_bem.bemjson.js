({
    block: 'b-page',
    title: 'b-form-switch',
    head: [
        { elem: 'css', url: '_90-api_bem.css', ie: false },
        { elem: 'css', url: '_90-api_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_90-api_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_90-api_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_90-api_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_90-api_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        content: [
            {
                block: 'b-dummy',
                content: [
                    {
                        block: 'b-form-switch',
                        mods: { position: 'left', type: 'switch', theme: 'switch-s-grey' },
                        name: 'light',
                        content: [
                            { elem: 'option', attrs: { value: 'on' }, content: 'Вкл.' },
                            { elem: 'option', attrs: { value: 'off' }, content: 'Выкл.' }
                        ]
                    },
                    {
                        tag: 'pre',
                        content: [
                            "$('.b-form-switch').bem('b-form-switch')",
                            ".on('change', function() {",
                            "<br/>    this.val()",
                            { tag: 'samp', attrs: { id: 'val' }},
                            "<br/>    this.position()",
                            { tag: 'samp', attrs: { id: 'position' }},
                            "<br/>",
                            "})",
                            "<br/>",
                            { tag: 'a', attrs: { href: "javascript:$('.b-form-switch').bem('b-form-switch').val('on');undefined" }, content: ".val('on')" },
                            { tag: 'a', attrs: { href: "javascript:$('.b-form-switch').bem('b-form-switch').val('off');undefined" }, content: ".val('off')" },
                            { tag: 'a', attrs: { href: "javascript:$('.b-form-switch').bem('b-form-switch').val('doesn_exist');undefined" }, content: ".val('doesn_exist')" },
                            { tag: 'a', attrs: { href: "javascript:$('.b-form-switch').bem('b-form-switch').toggle();undefined" }, content: ".toggle()" }
                        ]
                    }
                ]
            }
        ]
    }
})
