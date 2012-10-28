({
    block: 'b-page',
    title: 'БЭМ: Методология ведения и использования исходного кода проекта',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index-ru.css', ie: false },
        { elem: 'css', url: '_index-ru', ie: true },
        // { block: 'i-jquery', elem: 'core' },
        // { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'lang-switcher',
            content: [
                {
                    block: 'b-link',
                    url: '//bem.info/',
                    content: 'English'
                },
                ' | Русский'
            ]
        },
        {
            block: 'logo',
            mods: { type: 'main' }
        },
        {
            block: 'content',
            content: [
                {
                    block: 'island',
                    mix: [{ block: 'whatisbem' }],
                    content: [
                        {
                            block: 'heading',
                            content: 'Что такое БЭМ'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'БЭМ (аббревиатура от слов Блок-Элемент-Модификатор) — это способ разработки сайтов, позволяющих писать код, который легко подерживать и развивать.'
                                },
                                {
                                    content: ' Его можно использовать как при индивидуальной разработке сайта, так и при работе в большой команде.'
                                }
                            ]
                        },
                        {
                            block: 'col',
                            content: [
                                {
                                    block: 'heading',
                                    mods: { size: 's' },
                                    content: 'Для разработчика'
                                },
                                {
                                    block: 'list',
                                    tag: 'ul',
                                    content: [
                                        {
                                            tag: 'li',
                                            content: 'Упрощение разработки и поддержки'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Простота переключения между проектами'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Ускорение разработки при повторном использовании кода'
                                        },
                                        {
                                            tag: 'li',
                                            content: 'Рост проекта не ухудшает качество кода'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'col',
                            content: [
                                {
                                    block: 'heading',
                                    mods: { size: 's' },
                                    content: 'Для командной работы'
                                },
                                {
                                    block: 'list',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: 'Быстрое подключение человека к команде'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Совместная работа с кодом разных специалистов'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Независимая работа над частями проекта'
                                        },
                                        {
                                            elem: 'item',
                                            content: 'Использование чужого кода без погружения в детали реализации'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'methodology' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/method/',
                                content: 'Методология'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'БЭМ – это способ описания действительности в коде, набор паттернов и способ думать о сущностях вне зависимости от того, на каком языке программирования это реализуется.'
                                },
                                {
                                    content: 'На основе этой методологии разработаны подходы к вёрстке и технические решения, которые позволяют нам быстро создавать новые страницы и легко поддерживать уже существующие.'
                                }
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/method/definitions/',
                                content: 'Определения'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'В этой статье раскрываются понятия блока, элемента, модификатора и других сущностей БЭМ методологии.'
                                }
                            ]
                        },
                        {
                            block: 'heading',
                            mods: { size: 'm' },
                            content: {
                                block: 'b-link',
                                url: '/method/history/',
                                content: 'История создания'
                            }
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Однажды, в далёкой-далёкой стране, компания Яндекс начала разрабатывать поиск по Интернету и сопутствующие сервисы. Время шло, сервисы развивались и всё больше разработчиков интерфейсов вкладывали свои усилия в развитие Яндекса...'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'tools' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/tools/',
                                content: 'Инструменты'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'https://github.com/bem/bem-tools/blob/master/README.ru.md',
                            content: 'BEM tools'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Работа с файлами, написанными по БЭМ-методу: создание сущностей, разработческий сервер, сборка финального runtime.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'https://github.com/css/csso/blob/master/README.ru.md',
                            content: 'CSSO'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'CSSO (CSS Optimizer) является минимизатором CSS, выполняющим как минимизацию без изменения структуры, так и структурную минимизацию с целью получить как можно меньший текст.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'https://github.com/svg/svgo/#readme',
                            content: 'SVGO'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'SVGO (SVGO Optimizer) — это инструмент для оптимизации векторной графики в формате SVG, написанный на Node.js.'
                                },
                                {
                                    content: 'SVGO имеет архитектуру, в которой практически каждая оптимизация является отдельным плагином, и вы легко можете добавить свой собственный.'
                                },
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'tools/',
                            content: 'Все инструменты, разработанные командой БЭМ'
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'libraries' }],
                    content: [
                        {
                            block: 'heading',
                            content: 'Библиотеки блоков'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 'm' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'http://bem.github.com/bem-bl/index.ru.html',
                            content: 'bem-bl'
                        },
                        {
                            block: 'description',
                            content: {
                                content: [
                                    {
                                        content: 'Библиотека состоит из блоков, которые реализованны по BEM методу.'
                                    },
                                    {
                                        content: 'Блоки реализованы в технологиях BEMHTML (шаблоны), CSS, клиентский JS.'
                                    },
                                    {
                                        content: 'Вам потребуются BEM tools для работы с библиотекой.'
                                    }
                                ]
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 'm' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: 'http://gfranco.github.com/bootstrap-bl/',
                            content: 'bootstrap-bl'
                        },
                        {
                            block: 'description',
                            content: {
                                content: [
                                    {
                                        content: 'Как Bootstrap, только лучше!'
                                    },
                                    {
                                        content: 'bootstrap-bl — это попытка реализовать оригинальный Бутстрап в БЭМ методологии. Модульность, АНБ, всё такое.'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
/*
        {
            block: 'portfolio',
            content: [
                {
                    elem: 'title',
                    content: 'Компании, которые используют BEM'
                },
                {
                    block: 'companies',
                    content: [
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'yandex' } }],
                            target: '_blank',
                            url: '//www.yandex.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'thk' } }],
                            target: '_blank',
                            url: '//www.tnk-racing.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'hh' } }],
                            target: '_blank',
                            url: '//hh.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'rambler' } }],
                            target: '_blank',
                            url: '//rambler.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'nile' } }],
                            target: '_blank',
                            url: '//nile.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'yota' } }],
                            target: '_blank',
                            url: '//yota.ru/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lj' } }],
                            target: '_blank',
                            url: '//livejournal.com/'
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lenta' } }],
                            target: '_blank',
                            url: '//lenta.ru/'
                        }
                    ]
                }
            ]
        },
*/
        {
            block: 'footer'
        },
        {
            block: 'metrika'
        }
    ]
})
