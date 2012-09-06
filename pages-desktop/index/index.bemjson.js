([
// {
//     block: 'i-global',
//     params: {
//         'key': 'val'
//     }
// },
{
    block: 'b-page',
    title: 'БЭМ: Методология ведения и использования исходного кода проекта',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'header',
            mods: { type: 'main' }
        },
        {
            block: 'content',
            content: [
                {
                    block: 'description',
                    mix: [{ block: 'i-clearfix' }],
                    content: [
                        {
                            elem: 'link',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'description', elem : 'link-inner' }],
                                    url: '//bem.github.com/bem-method/pages/beginning/beginning.ru.html',
                                    content: 'Подробное описание BEM'
                                }
                            ]
                        },
                        {
                            elem: 'inner',
                            content: 'В Яндексе сверстали множество проектов, счёт страниц идёт на десятки тысяч. Подходы, применяемые разработчиками Яндекса к HTML/CSS-вёрстке и клиентскому коду вообще, постоянно эволюционировали.'
                        }
                    ]
                },
                {
                    block: 'history',
                    content: [
                        {
                            block: 'b-link',
                            mix: [{ block: 'description', elem : 'link-inner' }],
                            url: '//bem.github.com/bem-method/pages/history/history.ru.html',
                            content: 'История создания БЭМ'
                        },
                        {
                            block: 'b-text',
                            content: [
                                {
                                    elem: 'p',
                                    content: 'Это статья об истории создания БЭМ, о том, откуда взялись сущности БЭМ и почему они сейчас именно такие.'
                                },
                                {
                                    elem: 'p',
                                    content: 'К концу статьи вы увидите, что БЭМ гибок и может применяться в том объёме, в каком это возможно в вашем проекте.'
                                }
                                /*,
                                {
                                    elem: 'h1',
                                    content: 'Самое начало (Яндекс.Адреса)'
                                },
                                {
                                    elem: 'p',
                                    content: 'Когда я начал работать над Яндекс.Адресами в далёком 2005 году, вёрстку я делал так:'
                                },
                                {
                                    elem: 'code',
                                    content: 'about.html index.html … adresa.css adresa.js i/yandex.png'
                                },
                                {
                                    elem: 'p',
                                    content: 'Странички были статическими html-файлами. Стили для них складывались в один файл на весь проект – adresa.css, скрипты – в adresa.js. Скриптов было очень мало.) Картинки – в отдельную директорию.'
                                }
                                */
                            ]
                        }
                    ]
                },
                {
                    block: 'how-to-start',
                    content: [
                        {
                            elem: 'link',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: 'http://noteskeeper.ru/527/',
                                    content: 'Как начать?'
                                }
                            ]
                        },
                        {
                            content: 'Если хочется попробовать и получить некоторые плюсы от разработки в стиле БЭМ, но нет возможности внедрять всю технологическую цепочку, то стоит для начала перенять именование классов.'
                        }
                    ]
                },
                {
                    block: 'tools',
                    mix: [{ block: 'i-clearfix' }],
                    content: [
                        {
                            elem: 'link',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: '//github.com/bem/bem-tools',
                                    content: 'Инструменты'
                                }
                            ]
                        },
                        {
                            elem: 'tool',
                            mods: { type: 'col-1'},
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'description', elem : 'link-inner' }],
                                    url: 'https://github.com/bem/bem-tools/blob/master/README.ru.md',
                                    content: 'BEM tools'
                                },
                                {
                                    content: 'Работа с файлами, написанными по БЭМ-методу.'
                                }
                            ]
                        },
                        {
                            elem: 'tool',
                            mods: { type: 'col-2'},
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'description', elem : 'link-inner' }],
                                    url: 'https://github.com/css/csso/blob/master/README.ru.md',
                                    content: 'CSSO'
                                },
                                {
                                    content: 'CSSO (CSS Optimizer) является минимизатором CSS, выполняющим как минимизацию без изменения структуры, так и структурную минимизацию с целью получить как можно меньший текст. CSSO написан на Javascript, выполняется как в браузере, так и в командной строке (с помощью NodeJS). Распространяется под лицензией MIT.'
                                }
                            ]
                        },
                        {
                            block: 'b-menu-vert',
                            mods: { type: 'col-3'},
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/veged/borschik/',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/css/cssp',
                                        content: 'cssp'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/veged/shmakowiki',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/imgo/imgo',
                                        content: 'imgo'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/afelix/setochka',
                                        content: 'setochka'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/bem/bem-django',
                                        content: 'bem-django'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: 'https://github.com/bem/bem-haml',
                                        content: 'bem-haml'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'tech-wrapper',
                    mix: [{ block: 'i-clearfix' }],
                    content: [
                {
                    block: 'technologies',
                    content: [
                        {
                            elem: 'link',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'Technologies'
                                }
                            ]
                        },
                        {
                            elem: 'info',
                            content: '* БЭМ не накладывает ограничений на используемые технологии, его можно применять с любыми технологиями'
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'CSS'
                                },
                                {
                                    content: 'С точки зрения CSS файлы всех блоков собираются в один файл страницы. Несмотря на то, что CSS для каждого блока, элемента и модификатора реализован в отдельном файле, для работы страницы нет необходимости подключать эти файлы as is. Всю необходимую CSS-реализацию страницы можно собрать в один файл. К тому же это решает проблемы: ограниченного количества импортов в IE, количества HTTP-запросов к серверу. Объединение всех CSS в один файл мы делаем при помощи утилиты borschik. Браузер получает минимизированный код. В процессе сборки можно минимизировать и оптимизировать CSS-код. Например, при помощи утилиты CSSO.Каждый браузер получает CSS, написанный специально для него. Есть возможность разделять CSS-реализации для разных браузеров и поставлять в каждый конкретный браузер только тот CSS, который нужен ему. Для этого можно использовать Сеточку, прототип.'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'JS'
                                },
                                {
                                    content: 'С точки зрения JavaScript много файлов для блоков, один файл для страницы. Так же, как и в случае CSS, JavaScript-реализация всех необходимых блоков может быть объединена в один файл.'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: 'http://clubs.ya.ru/bem/replies.xml?item_no=898',
                                    content: 'BEMHTML'
                                },
                                {
                                    content: 'bemhtml — это надмножество xjst, позволяющее писать шаблоны блоков, которые затем компилируются в plain JavaScript. При помощи таких шаблонов из JSON-описания страницы (bemjson)  можно получить html.'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'Other technologies'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'libraries',
                    content: [
                        {
                            elem: 'link',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'Libraries'
                                }
                            ]
                        },
                        {
                            elem: 'lib',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'libraries', elem : 'service-name' }],
                                    url: '#',
                                    content: 'bem-bl'
                                },
                                {
                                    block: 'b-text',
                                    content: [
                                        {
                                            elem: 'p',
                                            content: 'Библиотека состоит из блоков, которые реализованны по BEM методу.'
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                'Код библиотеки находится на GitHub: ',
                                                {
                                                    block: 'b-link',
                                                    target: '_blank',
                                                    url: '//github.com/bem/bem-bl',
                                                    content: 'github.com/bem/bem-bl.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Блоки реализованы в технологиях BEMHTML (шаблоны), CSS, клиентский JS.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Для использования библиотеки необходимо:' 
                                        },
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'подготовить среду разработки и потренироваться на тестовом проекте;'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'ознакомится с соглашением об именовании;'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'изучить основные понятия шаблонизатора BEMHTML;'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                'Информация об использовании библиотеки, вопросы и ответы — в ',
                                                {
                                                    block: 'b-link',
                                                    target: '_blank',
                                                    url: '//clubs.ya.ru/bem/',
                                                    content: 'Клубе на Я.ру'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'lib',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'libraries', elem : 'service-name' }],
                                    url: '#',
                                    content: 'bootstrap-bl'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2). As our ambitions, complexity and performance requirements grew, we aimed at replacing XSLT and Perl templates with a JS-based declarative templating DSL, built on top of Node.js. Along with those efforts, we looked into simplifying development workflow and developed a bunch of command-line tools that already helped us manage front-end code on the file system, preprocess CSS and JavaScript code, and so on, and so forth. Some parts of the BEM stack started as open source projects, while others (like the UI component library) are being gradually open sourced. Our goal is to publish most of them during 2012. BEM is a toolkit that will help address and resolve front-end issues quickly and effectively. It is available in a range of reusable code libraries—all of them are hosted on Github and are completely open source.'
                                }
                            ]
                        }
                    ]
                }
            ]
            },
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
                                url: '//yandex.ru'
                            },
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'thk' } }],
                                target: '_blank',
                                url: '//www.tnk-racing.ru'
                            },
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'hh' } }],
                                target: '_blank',
                                url: '//hh.ru'
                            },
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'rambler' } }],
                                target: '_blank',
                                url: '//rambler.ru'
                            },
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'yota' } }],
                                target: '_blank',
                                url: '//yota.ru'
                            },  
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lj' } }],
                                target: '_blank',
                                url: '//livejournal.com'
                            },
                            {
                                block: 'b-link',
                                mix: [{ block: 'companies', elem: 'company',  elemMods: { name: 'lenta' } }],
                                target: '_blank',
                                url: '//lenta.ru'
                            }
                        ]
                    }
                ]
            }
        ]
        },
        {
            block: 'footer'
        }
    ]
}
])