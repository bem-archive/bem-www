({
    block: 'b-page',
    title: 'b-form-radio',
    head: [
        { elem: 'css', url: '_70api_bem.css', ie: false },
        { elem: 'css', url: '_70api_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_70api_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_70api_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_70api_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_70api_bem.js' }
    ],
    content: {
        attrs: { style: 'margin: 20px' },
        content: [
            {
                block: 'b-form-radio',
                mods: { size: 's', theme: 'grey' },
                inputAttrs: { name: 'results_type' },
                content: [
                    {
                        elem: 'button',
                        inputAttrs: { value: 'global' },
                        content: 'Global results'
                    },
                    {
                        elem: 'button',
                        inputAttrs: { value: 'russian' },
                        content: 'Russian results'
                    }
                ]
            },
            {
                attrs: { style: 'margin-top: 1em' },
                content: [
                    {
                        block: 'b-js-example',
                        content: "$('.b-form-radio').bem('b-form-radio').val('global')"
                    },
                    {
                        block: 'b-js-example',
                        content: "$('.b-form-radio').bem('b-form-radio').val('russian')"
                    },
                    {
                        block: 'b-js-example',
                        content: "$('.b-form-radio').bem('b-form-radio').val()"
                    }
                ]
            },
            {
                attrs: { style: 'margin-top: 1em' },
                content: [
                    {
                        block: 'b-js-example',
                        content: "$('.b-form-radio').bem('b-form-radio').uncheckAll()"
                    }
                ]
            },
            {
                tag: 'p',
                content: [
                    'current: ',
                    {
                        tag: 'span',
                        attrs: { id: 'radio_current' },
                        content: '—'
                    },
                    '<br/>',
                    'prev: ',
                    {
                        tag: 'span',
                        attrs: { id: 'radio_prev' },
                        content: '—'
                    }
                ]
            }
        ]
    }
})
