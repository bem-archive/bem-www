({
    block: 'b-page',
    title: 'b-form-select API',
    head: [
        { elem: 'css', url: '_50api_bem.css', ie: false },
        { elem: 'css', url: '_50api_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_50api_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_50api_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_50api_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_50api_bem.js' }
    ],
    content: {
        block: 'i-lego-example',
        js: true,
        content: {
            tag: 'table',
            content: {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        attrs: { style: 'width:30%' },
                        content: {
                            block: 'b-form-select',
                            name: 'country',
                            mods: { size: 'm', theme: 'grey' },
                            js: { rows: 12 },
                            content: [
                            {
                                block: 'b-form-button',
                                type: 'button',
                                mods: { size: 'm', theme: 'grey-m' },
                                content: 'США'
                            },
                            {
                                elem: 'select',
                                content: [
                                {
                                    elem: 'option',
                                    attrs: { value: 'ru' },
                                    content: 'Россия'
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'us', selected: 'selected' },
                                    content: 'США'
                                },
                                {
                                    elem: 'option-group',
                                    attrs: { label: 'СНГ' },
                                    content: [
                                    {
                                        elem: 'option',
                                        attrs: { value: 'ua' },
                                        content: 'Украина'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'be' },
                                        content: 'Беларуссия'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'kz' },
                                        content: 'Казахстан'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'ar' },
                                        content: 'Армения'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'az' },
                                        content: 'Азербайджан'
                                    }
                                    ]
                                },
                                {
                                    elem: 'option-group',
                                    attrs: { label: 'Европа' },
                                    content: [
                                    {
                                        elem: 'option',
                                        attrs: { value: 'uk' },
                                        content: 'Англия'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'de' },
                                        content: 'Германия'
                                    },
                                    {
                                        elem: 'option',
                                        attrs: { value: 'fr' },
                                        content: 'Франция'
                                    }
                                    ]
                                },
                                {
                                    elem: 'option',
                                    attrs: { value: 'jp' },
                                    content: 'Япония'
                                }
                                ]
                            }
                            ]
                        }
                    },
                    {
                        tag: 'td',
                        attrs: { style: 'padding:10px 0 0 70px' },
                        content: {
                            tag: 'pre',
                            elem: 'code',
                            content: [
                                "$('.b-form-select).bem('b-form-select')",
                                ".on('change', function(e, data) {",
                                { tag: 'br' },
                                "   this.val() ",
                                { tag: 'samp', attrs: { id: 'val' }},
                                { tag: 'br' },
                                "   data.index: ",
                                { tag: 'samp', attrs: { id: 'index' }},
                                { tag: 'br' },
                                "})",
                                { tag: 'br' },
                                {
                                    block: 'b-link',
                                    mods: { pseudo: 'yes' },
                                    js: { val: 'uk' },
                                    content: ".val('uk')"
                                },
                                {
                                    block: 'b-link',
                                    mods: { pseudo: 'yes' },
                                    js: { val: 'some-unknowen-val' },
                                    content: ".val('some-unknowen-val')"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
})
