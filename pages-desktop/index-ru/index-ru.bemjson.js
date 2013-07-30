({
    block: 'b-page',
    title: 'БЭМ: Методология ведения и использования исходного кода проекта',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '/bundles-desktop/index/_index.css' },
        //{ elem: 'css', url: '/bundles-desktop/index/_index', ie: true },
        // { block: 'i-jquery', elem: 'core' },
        // { elem: 'js', url: '/bundles-desktop/index/_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        { block: 'gh-ribbon'  },
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
                                    content: 'БЭМ (аббревиатура от слов Блок-Элемент-Модификатор) — это способ разработки сайтов, позволяющий писать код, который легко подерживать и развивать.'
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
                            url: '/tools/bem/',
                            content: 'bem-tools'
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
                            url: '/tools/borschik/',
                            content: 'Borschik'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Borschik — это простой, но мощный сборщик статических файлов (CSS, JS, т.д.).'
                            }
                        },

                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/tools/csso/',
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
                                    content: 'SVGO (SVG Optimizer) — это инструмент для оптимизации векторной графики в формате SVG, написанный на Node.js.'
                                }
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
                },
                {
                    block: 'island',
                    mix: [{ block: 'articles' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/articles/',
                                content: 'Статьи'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/yamapsbem/',
                            content: 'API Яндекс.Карт и БЭМ'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Один из самых частых примеров использования API Яндекс.Карт — создание меню для показа на карте организаций различных типов (коллекций геообъектов). Давайте реализуем этот пример с помощью методологии БЭМ!'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/smartcd/',
                            content: 'smartcd: локальный запуск инструментов'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Узнайте, как с помощью smartcd можно быстрее запустить bem-tools из коммандной строки.'
                            }
                        },
                        // {
                        //     block: 'b-link',
                        //     mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                        //     url: '/articles/start-with-project-stub/',
                        //     content: 'Full stack quick start'
                        // },
                        // {
                        //     block: 'description',
                        //     content: {
                        //         content: 'This article shows you how to develop an online shop web page using BEM principles in CSS, JavaScript and BEMHTML templates.'
                        //     }
                        // },
                        // {
                        //     block: 'b-link',
                        //     mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                        //     url: '/articles/yandex-frontend-dev/',
                        //     content: 'What you can borrow from Yandex frontend dev'
                        // },
                        // {
                        //     block: 'description',
                        //     content: {
                        //         content: 'The article sums up Yandex over 7-year experience in finding solutions for efficient frontend development.'
                        //     }
                        // },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/borschik/',
                            content: 'Borschik'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Borschik — простой, но мощный сборщик файлов текстовых форматов.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bem-js-main-terms/',
                            content: 'JavaScript по БЭМ: основные понятия'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'В стеке БЭМ-технологий есть блок i-bem библиотеки bem-bl. Его JavaScript-реализация использует предметную область БЭМ и позволяет насладиться всеми преимуществами разработки по принципам БЭМ не только программируя внешний вид компонент, но и их поведение.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/firm-card-story/',
                            content: 'БЭМ-приложение на Leaflet и API 2GIS'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Пример реализации несложного картографического сервиса по БЭМ-методологии.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-intro/',
                            content: 'Hello, BEMHTML!'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Данное руководство поможет попробовать шаблонизатор BEMHTML и понять его основные принципы, пройдя семь простых шагов.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-reference/',
                            content: 'Референс по BEMHTML'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Данный документ представляет собой справочное руководство по шаблонизатору BEMHTML.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/bemhtml-rationale/',
                            content: 'BEMHTML: шаблонизатор для БЭМ'
                        },
                        {
                            block: 'description',
                            content: [
                                {
                                    content: 'Зачем мы написали еще один шаблонизатор.'
                                }
                            ]
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/articles/deps-js-syntax/',
                            content: 'Синтаксис deps.js'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Основы синтаксиса deps.js - управление зависимостями.'
                            }
                        }
                    ]
                },
                {
                    block: 'island',
                    mix: [{ block: 'blog' }],
                    content: [
                        {
                            block: 'heading',
                            content: {
                                block: 'b-link',
                                url: '/blog/',
                                content: 'Блог'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bemup',
                            content: 'BEMup — первый митап по БЭМ в Москве'
                        },
                        {
                            block: 'description',
                            content: {
                                content: '2 августа 2013 года в московском Яндексе пройдет первый митап по БЭМ. Подробности в нашем блоге.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-cli',
                            content: 'bem-cli: запусти bem-tools локально'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Читайте больше о том, что делать, когда нельзя npm i -g bem, и как при помощи инструмента bem-cli запускать локально установленный bem-tools.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-tools-0-6-4',
                            content: 'Версия bem-tools 0.6.4'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Добавлено новое API технологий, увеличена скорость сборки bem make / server при использовании нового API. Для установки необходим npm версии 1.2.14 или выше.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/bem-tools-0-5-33',
                            content: 'Версия bem-tools 0.5.33'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Обновлены npm-зависимости, включая версию Borshik, в которой исправлены баги сборки под Windows.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/07/anygrid-bem-notations',
                            content: 'Генератор сеток AnyGrid для CSS в БЭМ-нотациях'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Читайте больше о том, как работает сервис, и как ему можно помогать развиваться.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/02/maintainable-frontend-dev-with-bem/',
                            content: 'БЭМ на конференции MetaRefresh 2013'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Видео и презентация доклада Варвары Степановой о разработке "без потерь" по БЭМ на конференции MetaRefresh 2013 в Бангалоре.'
                            }
                        },
                        {
                            block: 'b-link',
                            mix: [{ block: 'heading', mods: { size: 's' } }, { block: 'i-font', face: 'alsekibastuz' }],
                            url: '/blog/2013/02/bem-goes-to-india/',
                            content: 'БЭМ едет в Индию'
                        },
                        {
                            block: 'description',
                            content: {
                                content: 'Промо-видео доклада Варвары Степановой о разработке "без потерь" по БЭМ на конференции MetaRefresh 2013 в Бангалоре, тезисы и идеи, которые легли в основу рассказа.'
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
