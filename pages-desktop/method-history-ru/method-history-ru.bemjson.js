({
 "block": "b-page",
 "title": "method-history-ru",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-history-ru.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-history-ru",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-history-ru"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-history-ru"
   }
  }
 ],
 "content": [
  {
   "block": "header",
   "content": [
    {
     "block": "b-link",
     "mix": [
      {
       "block": "header",
       "elem": "logo"
      }
     ],
     "url": "/"
    },
    [
     {
      "block": "b-menu-horiz",
      "mods": {
       "layout": "normal"
      },
      "mix": [
       {
        "block": "nav",
        "mods": {
         "type": "main"
        }
       }
      ],
      "js": false,
      "content": [
       {
        "elem": "item",
        "content": {
         "block": "b-link",
         "url": "/method/",
         "content": "Methodology"
        }
       }
      ]
     }
    ]
   ]
  },
  {
   "block": "content",
   "content": [
    {
     "block": "b-text",
     "content": [
      {
       "elem": "h1",
       "attrs": {
        "id": "IstoriyasozdaniyaBEM"
       },
       "content": [
        "История создания БЭМ"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Однажды, в далёкой-далёкой стране, компания Яндекс начала разрабатывать поиск по Интернету и сопутствующие сервисы. Время шло, сервисы развивались и всё больше разработчиков интерфейсов вкладывали свои усилия в развитие Яндекса."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Они делали отличные сервисы и инструменты, облегчающие им жизнь, и вот пришло время поделиться этим с комьюнити, to embrace the magic power of Open Source и помочь другим разработчикам сделать их работу проще."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Вы прочитаете о том, как разработчики интерфейсов Яндекса постоянно пересматривали и улучшали способ создания веб-страниц. Разработчики интерфейсов отличаются their enormous curiosuty (that often brings innovation) и своей ленью, которая  makes them devise sophisticated systems to save precious time, to unify and automate everything."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для начала, давайте отмотаем время назад, в 2005 год, и sneak a peek over a shoulder of a really-really-busy Yandex frontend developer, and thus see..."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "kakvsyonachinalosy"
       },
       "content": [
        "…как всё начиналось"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В 2005 году фокус был в основном на серверной части сервисов. С точки зрения интерфейса, типичный проект Яндекса был набором статических HTML страниц, которые использовались как основа для создания шаблонов на XSL"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Эти HTML странички хранились в отдельной директории примерно в такой структуре:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "about.html\nindex.html\n…\nproject.css\nproject.js\ni/\n    yandex.png"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для каждой страницы создавался отдельный HTML файл. Стили для них складывались в один файл на весь проект — ",
        {
         "tag": "tt",
         "content": [
          "project.css"
         ]
        },
        ", скрипты — в ",
        {
         "tag": "tt",
         "content": [
          "project.js"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В то время JavaScript использовался, как вспомогательный инструмет для оживления страницы и всё помещалось в небольшой файл."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Картинки складывались в отдельную директорию, их было много. В те времена ещё была поддержка MSIE5 и не было поддержки CSS3 в браузерах, картинки использовались для любого оформления, даже для закруглённых уголков. :-)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Все стили были в одном файле и для отделения стилей разных частей страницы использовались комментарии с указанием начала и конца:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "/* Content container (begin) */\n    #body\n    {\n        font: 0.8em Arial, sans-serif;\n\n        margin: 0.5em 1.95% 0.5em 2%;\n    }\n/* Content container (end) */\n\n/* Graphical banner (begin) */\n    .banner\n    {\n        text-align: center;\n    }\n\n    .banner a\n    {\n        text-decoration: none;\n    }\n/* Graphical banner (end) */"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В вёрстке использовались как id, так и классы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Свёрстанные статические HTML-странички нарезались в XSL-шаблоны, которые использовались в продакшене. Если HTML изменялся, все правки вручную переносиись в XSL. И наоборот: изменения в шаблонах несли с собой изменения в HTML для поддержания статического HTML в актуальном состоянии."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Это было сложно, и даже когда это не было сложно — это было тупо."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Proektypobolyshe"
       },
       "content": [
        "Проекты побольше"
       ]
      },
      {
       "elem": "p",
       "content": [
        "При вёрстке первой версии Яндекс.Музыки в начале 2006 стало понятно, что для проекта с большим количеством разных страниц этот подход работает плохо."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Тяжело подбирать названия классам, сложно держать в голове код всего проекта и писать так, чтобы изменения на одной странице ничего не ломали на другой."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Типичный код того времени:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Albums (begin) */\n        .result .albums .info\n        {\n            padding-right: 8.5em;\n        }\n\n        .result .albums .title\n        {\n            float: left;\n            padding-bottom: 0.3em;\n        }\n\n        .result .albums .album .listen\n        {\n            float: left;\n            padding: 0.3em 1em 0 1em;\n        }\n\n        .result .albums .album .buy\n        {\n            float: left;\n            padding: 0.4em 1em 0 1.6em;\n        }\n\n        .result .albums .info i\n        {\n            font-size: 85%;\n        }\n    /* Albums (end) */"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Здесь используется длинный каскад."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Или вот ещё пример."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Картинки на фоне (begin) */\n        #foot div\n        {\n            height: 71px;\n            background: transparent url(../i/foot-1.png) 4% 50% no-repeat;\n        }\n\n        #foot div div\n        {\n            background-position: 21%;\n            background-image: url(../i/foot-2.png);\n        }\n\n        #foot div div div\n        {\n            background-position: 38%;\n            background-image: url(../i/foot-3.png);\n        }\n\n        #foot div div div div\n        {\n            background-position: 54%;\n            background-image: url(../i/foot-4.png);\n        }\n\n        #foot div div div div div\n        {\n            background-position: 71%;\n            background-image: url(../i/foot-5.png);\n        }\n\n        #foot div div div div div div\n        {\n            background-position: 87%;\n            background-image: url(../i/foot-6.png);\n        }\n    /* Картинки на фоне (end) */"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Тут используются ",
        {
         "tag": "tt",
         "content": [
          "id"
         ]
        },
        " и тэги."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Одновременно с Музыкой началась вёрстка ",
        {
         "block": "b-link",
         "url": "http://wow.yandex.ru",
         "content": [
          "Яру"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Это проект с десятками страниц и такой подход не работает — вёрстка становится неуправляемой."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Poyavlenieblokov"
       },
       "content": [
        "Появление блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: We needed to specify a data domain for managing page interface objects. This was a methodology thing, we needed to put more clarity into the way we work with concepts like ",
        {
         "tag": "tt",
         "content": [
          "class"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "tag"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "visual component"
         ]
        },
        " etc."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: For a typical web page of a Yandex project, HTML structure and its CSS styles were still the focus of our development efforts, and JavaScript was understood as a supplementary technology."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: For easier maintenance of HTML/CSS for many different components, a new term was invented: ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        ". Block is a part of a page design or layout having its specific and unique meaning defined either semantically, or visually."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: In most cases, any distinct page element (either complex or simple) may be seen as a block. Then its HTML container gets a unique CSS class, which is also used as a block name."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Классы блоков получили префиксы (",
        {
         "tag": "tt",
         "content": [
          "b-"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "c-"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "g-"
         ]
        },
        "), чтобы отличаться от классов внутри."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Используемые префиксы, с которых мы начинали:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "b-"
           ]
          },
          "  block",
          {
           "tag": "br"
          },
          "\n   независимый блок, может использоваться в любом месте страницы"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "с-"
           ]
          },
          "  control",
          {
           "tag": "br"
          },
          "\n   контрол (независимый блок) с которым ассоциирован JavaScript объект, обеспечивающий его\n   функциональность, может использоваться в любом месте страницы"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "g-"
           ]
          },
          "  global",
          {
           "tag": "br"
          },
          "\n   глобальное определение, используется по необходимости, количество сведено к минимуму"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Кроме префиксов были постфиксы:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "-nojs"
           ]
          },
          "   no javascript",
          {
           "tag": "br"
          },
          "\n   стиль применяется в отсутствие javascript. Если javascript включен, то при загрузке страницы\n   вызывается метод ",
          {
           "tag": "tt",
           "content": [
            "init()"
           ]
          },
          " в onload для удаления этого постфикса из всех классов на странице,\n   что «включает» JavaScript для этих блоков."
         ]
        }
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Poyavlenieelementov"
       },
       "content": [
        "Появление элементов"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "WhatsInside"
       },
       "content": [
        "What&apos;s Inside?"
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: In an HTML container forming a block, some nodes get a distinct CSS classname. This not only facilitates the creation of tagname-independent style rules, but also assigns semantically meaningful roles to each node. Such inner nodes are called &quot;block elements&quot;, or simply &quot;elements&quot;."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: The core distinction between a block and an element is the element&apos;s inability to exist out of its parent block&apos;s context. As long as you cannot detach something from a block, it&apos;s an element; detachable elements (probably) should become blocks themselves."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: At first, elements could have been defined only inside their parent block&apos;s container; later, a technique was provided to place some elements outside and still keep a block consistent."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Элементы, у которых много кода, выделялись комментариями."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Head (begin) */\n        .b-head { … }\n\n        /* Logo (begin) */\n            .b-head .logo { … }\n            .b-head .logo a { … }\n        /* Logo (end) */\n\n        /* Right side (begin) */\n        .b-head .right { … }\n\n            /* Info (begin) */\n                .b-head .info { … }\n                .b-head .info .exit a { … }\n            /* Info (end) */\n\n            /* Search (begin) */\n                .b-head .search { … }\n                .b-head .search div div, .b-head .search div div i { … }\n            /* Search (end) */\n        /* Right side (end) */\n    /* Head (end) */"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Strukturavyorstkiproekta"
       },
       "content": [
        "Структура вёрстки проекта"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В Яндексе разработчики интерфейсов обычно поддерживают несколько проектов одновременно."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Переключение между разными репозиториями и ветками в них легче, если все проекты имеют одинаковую (или очень похожую) файловую структуру."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: Granularity is another requirement as it providesmore flexibility for version control systems and helps avoid conflicts during concurrent development."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Это привело нас к унификации структуры репозитория разных проектов."
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS, JavaScript и картинки начали складывать в отдельные директории."
       ]
      },
      {
       "elem": "p",
       "content": [
        "JavaScript начал применяться всё больше, начали подключаться дополнительные компоненты и библиотеки."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Типичная структура вёрстки проекта:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "index.html\ncss/\n    yaru.css\n    yaru-ie.css\njs/\n    yaru.js\ni/\n    yandex.png"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Валидные хаки для MSIE писали в основном CSS-файле ",
        {
         "tag": "tt",
         "content": [
          "yaru.css"
         ]
        },
        "."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Common definitions (begin) */\n        body\n        {\n            font: 0.8em Arial, sans-serif;\n\n            padding: 0 0 2em 0;\n            background: #fff;\n        }\n\n        * html body\n        {\n            font-size: 80%;\n        }"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Невалидные — в файле ",
        {
         "tag": "tt",
         "content": [
          "yaru-ie.css"
         ]
        },
        "."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Common blocks (begin) */\n        /* Artist (begin) */\n            .b-artist .i i\n            {\n                top: expression(7 + (90 - this.parentNode.getElementsByTagName(&apos;img&apos;)[0].height)/2);\n                filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=&apos;../i/sticker-lt.png&apos;, sizingMethod=&apos;crop&apos;);\n            }"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Zachatkiobshheportalynogofrejmvorka"
       },
       "content": [
        "Зачатки общепортального фреймворка"
       ]
      },
      {
       "elem": "p",
       "content": [
        "При верстке нескольких проектов с похожим дизайном есть общие блоки."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Портал Яндекса содержит сейчас больше 100 разных сервисов в одном стиле и бездумный copy/paste с проекта на проект не работает на таком объёме."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Так появилось общее хранилище повторно используемых компонент, которое называлось «общая библиотека блоков» или просто «Common»."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Первые блоки, которые были туда вынесены — шапка, подвал и стили для статического текста."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Соответствующие файлы хранились на выделенном внутреннем сервере разработчиков (",
        {
         "tag": "b",
         "content": [
          "common.cloudkill.yandex.ru"
         ]
        },
        " в примере ниже)."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Это было самое начало нашего общепортального фреймворка."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Cтили с него подключались в основной проектный файл с помощью импортов непосредственно с сервера:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "@import url(http://common.cloudkill.yandex.ru/css/global.css);\n@import url(http://common.cloudkill.yandex.ru/css/head/common.css);\n@import url(http://common.cloudkill.yandex.ru/css/static-text.css);\n@import url(http://common.cloudkill.yandex.ru/css/foot/common-absolute.css);\n@import url(http://common.cloudkill.yandex.ru/css/foot/common-absolute-4-columns.css);\n@import url(http://common.cloudkill.yandex.ru/css/list/hlist.css);\n@import url(http://common.cloudkill.yandex.ru/css/list/hlist-middot.css);\n@import url(http://common.cloudkill.yandex.ru/css/dropdown/dropdown.css);\n@import url(http://common.cloudkill.yandex.ru/css/dropdown/dropdown-arrow.css);\n@import url(slider.css);\n\n/* Header (begin) */\n    /* Service (begin) */\n        .b-head .service h1 { … }\n        .b-head .service h1, .b-head .service h1 a, .b-head .service h1 b { … }"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Слишком много импортов, страница загружается медленно! И мы решили прекомпилировать стили (и позже JS файла) перед выкладкой в продакшен."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Компиляция заменяет ",
        {
         "tag": "tt",
         "content": [
          "@import"
         ]
        },
        " на содержимое внешних файлов (это называется ",
        {
         "tag": "tt",
         "content": [
          "inlining"
         ]
        },
        ") и делает другие оптимизации, например, убирает ненужные браузеру пробелы и комментарии."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Наш внутренний инструмент вырост из простого perl скрипта в отдельный open source проект ",
        {
         "block": "b-link",
         "url": "https://github.com/veged/borschik",
         "content": [
          "borschik"
         ]
        },
        ". Попробуйте его в своём проекте!"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Vyorstkanezavisimymiblokami"
       },
       "content": [
        "Вёрстка независимыми блоками"
       ]
      },
      {
       "elem": "p",
       "content": [
        "К осени 2007 года правила вёрстки уже устоялись, и о них захотелось рассказать вне Яндекса."
       ]
      },
      {
       "elem": "p",
       "content": [
        "На ClientSide&apos;2007 был сделан доклад про «",
        {
         "block": "b-link",
         "url": "http://vitaly.harisov.name/article/independent-blocks.html",
         "content": [
          "вёрстку независимыми блоками"
         ]
        },
        "», которая на тот момент составляла основу наших HTML-страниц."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В докладе вводится понятие ",
        {
         "tag": "tt",
         "content": [
          "Блок"
         ]
        },
        ":"
       ]
      },
      "<blockquote>Блоком будем называть фрагмент страницы, который описывается своей разметкой и стилями.</blockquote>",
      {
       "elem": "p",
       "content": [
        "Более позднее описание в клубе БЭМ: ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=42",
         "content": "http://clubs.ya.ru/bem/replies.xml?item_no=42"
        }
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Pravilablokov"
       },
       "content": [
        "Правила блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Формулируются правила независимости блока:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "для описания элемента используется ",
          {
           "tag": "tt",
           "content": [
            "class"
           ]
          },
          ", но не ",
          {
           "tag": "tt",
           "content": [
            "id"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "каждый блок имеет префикс"
         ]
        },
        {
         "elem": "li",
         "content": [
          "в таблице стилей нет классов вне блоков"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Отказ от id даёт возможность использовать один и тот же блок несколько раз на странице. А также позволяет использовать на одном DOM-узле несколько классов, что в дальнейшем нам пригодилось."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Prostyeisostavnyebloki"
       },
       "content": [
        "Простые и составные блоки"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Блоки делятся на простые и составные."
       ]
      },
      "<blockquote>В простые блоки нельзя вкладывать другие блоки, в составные — можно.</blockquote>",
      {
       "elem": "p",
       "content": [
        "Это было очень наивное деление, мы неоднократно сталкивались с тем, что даже в самые простые блоки вкладывались другие и приходилось переделывать вёрстку."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Такая классификация фактически мешала нам во многих случаях и мы в итоге пришли противоположному принципу: любой блок должен позволять вкладывать в него другой блок, когда это возможно."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Pravilapolnojnezavisimostiblokov"
       },
       "content": [
        "Правила полной независимости блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS не является пуленепробиваемым, когда смешиваются стили из разных источников на одной странице."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В сложных случаях, блоки могут вредить отображению друг друга из-за конфликта имён элементов. Стили, опирающиеся на имена тэгов могут захватывать больше элементов, чем было задумано."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Намучавшись с подобными ошибками, мы сформулировали правила более строгой независимости блоков, которые назвали ",
        {
         "block": "b-link",
         "url": "clubs.ya.ru/bem/replies.xml?item_no=43",
         "content": [
          "абсолютно-независимые блоки"
         ]
        },
        " (сокращённо АНБ):"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "никогда не опираться на элементы, только на классы:",
          {
           "tag": "br"
          },
          "\n     ",
          {
           "tag": "tt",
           "content": [
            ".b-user b -&gt; .b-user .first-letter"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "всем классам внутри блока давать имена начинающиеся с имени этого блока:",
          {
           "tag": "br"
          },
          "\n     ",
          {
           "tag": "tt",
           "content": [
            ".b-user .first-letter -&gt; .b-user-first_letter"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Но класс у каждого DOM-узла существенно увеличивает HTML-код."
       ]
      },
      {
       "elem": "p",
       "content": [
        "На тот момент мы считали, что это дорого и применяли такой подход в исключительных случаях."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Prefiksy"
       },
       "content": [
        "Префиксы"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Как все знают, в программировании одна из самых сложных проблем — подбирать имена переменным. :-)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: We approached it cautiously и придумали, что будем давать блокам разные префиксы, каждый со своей семантикой:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "b-"
           ]
          },
          {
           "tag": "br"
          },
          "\n    обычные блоки"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "h-"
           ]
          },
          {
           "tag": "br"
          },
          "\n    обёртки, используется для оборачивания нескольких блоков"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "l-"
           ]
          },
          {
           "tag": "br"
          },
          "\n    раскладки"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "b",
           "content": [
            "g-"
           ]
          },
          {
           "tag": "br"
          },
          "\n    глобальные стили"
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Modifikaciya"
       },
       "content": [
        "Модификация"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Модификация может быть определена, как особое состояние блока или как метка, несущая определённое свойство."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Лучше всего это показать на примере: блок Кнопка может иметь три состояния: маленькая, нормальная и большая."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Вместо того, чтобы создавать три разных блока, делается модификация одного. Она состоит из имени (например, ",
        {
         "tag": "tt",
         "content": [
          "size"
         ]
        },
        ") и значения (",
        {
         "tag": "tt",
         "content": [
          "small"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "normal"
         ]
        },
        " или ",
        {
         "tag": "tt",
         "content": [
          "big"
         ]
        },
        ")."
       ]
      },
      {
       "elem": "p",
       "content": [
        "У блока есть две причины для модификации:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Блок может изменить свой внешний вид в зависимости от того, где он находится.",
          {
           "tag": "br"
          },
          "\n     Это модификация от контекста."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Можно добавить блоку второй класс, это модификация постфиксом, она не зависит от контекста.",
          {
           "tag": "br"
          },
          "\n     ",
          {
           "tag": "tt",
           "content": [
            "class=&quot;b-block b-block-postfix&quot;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Obshheportalynyjfrejmvork"
       },
       "content": [
        "Общепортальный фреймворк"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Весной 2008 года была поставлена задача сделать брендбук, описывающий наш портальный стиль."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Я начал с того, что умел лучше всего — делать HTML/CSS код."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если делать просто описание — оно устареет, не успев дописаться до конца."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Проект получил название ",
        {
         "tag": "tt",
         "content": [
          "Лего"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "StrukturarepozitoriyaLego"
       },
       "content": [
        "Структура репозитория Лего"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Первичное разделение на верхнем уровне репозитория идёт по технологиям."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "css/\nhtml/\njs/\nxml/\nxsl/"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В каждой технологии своя структура."
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS раскладывается в три разные директории:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "css/\n    block/\n        b-dropdown/\n            b-dropdown.css\n    service/\n        auto/\n            block/\n                b-head-logo-auto.css\n            head.css\n    util/\n        b-hmenu/\n            b-hmenu.css"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "block — общепортальные блоки"
         ]
        },
        {
         "elem": "li",
         "content": [
          "util — блоки, которые имеют смысл вне Яндекса, их можно выложить в OpenSource"
         ]
        },
        {
         "elem": "li",
         "content": [
          "service — стили для конкретных сервисов Яндекса, подключив их на сервис можно отобразить шапку, подвал"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Структура директории html аналогична css."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "html/\n    block/\n        b-dropdown.html\n    service/\n        auto/\n            l-head.html\n    util/\n        b-hmenu.html"
       ]
      },
      {
       "elem": "p",
       "content": [
        "JS находится в зачаточном состоянии:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "js/\n    check-is-frame.js\n    check-session.js\n    clean-on-focus.js\n    dropdown.js\n    event.add.js\n    event.del.js"
       ]
      },
      {
       "elem": "p",
       "content": [
        "У каждого сервиса есть XML-файл, использующийся для построения шапки."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "xml/\n    block/\n        b-head-tabs-communication.xml\n        common-services.ru.xml\n        head-messages.ru.xml\n    service/\n        auto/\n            head.xml"
       ]
      },
      {
       "elem": "p",
       "content": [
        "XSL блоков лежит в одной директории:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "xsl/\n    block/\n        b-dropdown.xsl\n        b-head-line.xsl\n        i-common.xsl\n        i-locale.xsl\n        l-foot.xsl\n        l-head.xsl"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Каждому блоку соответствует один файл."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Подключение Лего на проекты делалось через svn:externals."
       ]
      },
      {
       "elem": "p",
       "content": [
        "При сборке для продакшена, код библиотеки полностью включается в проект, что можно сравнить со статической линковкой."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Такой подход позволяет выпускать версии сервисов с разными версиями Лего и переходить на новую версию, когда это удобно команде проекта."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы используем его до сих пор."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Fajlystranic"
       },
       "content": [
        "Файлы страниц"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Файлы, подключавшиеся на страницах, состояли из @import&apos;ов реализации блоков."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "@import url(../../block/l-head/l-head.css);\n@import url(../../block/b-head-logo/b-head-logo.css);\n@import url(../../block/b-head-logo/b-head-logo_name.css);\n@import url(block/b-head-logo-auto.css);"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Эти import’ы писались вручную."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Именование файлов ещё не устоялось, мы пробуем разные варианты."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "ObshheportalynyjfrejmvorkLego122008"
       },
       "content": [
        "Общепортальный фреймворк: Лего 1.2 (2008)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Чуть позже в рамках версии 1.2 был сделан рефакторинг и структура Лего изменилась."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "common/\n    css/\n    js/\n    xml/\n    xsl/\nexample/\n    html/\nservice/\n    auto/\n        css/\n        xml/"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Убрано разделение на util и block, весь общий CSS лежит в common/css."
       ]
      },
      {
       "elem": "p",
       "content": [
        "От идеи выноса кода в Open Source на тот момент отказались. Вернулись к ней только через два года."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "common/\n    css/\n        b-dropdown/\n            arr/\n                b-dropdown.arr.css\n                b-dropdown.arr.ie.css\n                b-dropdown.css\n                b-dropdown.ie.css"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Файлы для MSIE переименованы, было -ie.css, стало .ie.css. Расширения у файлов теперь могут быть из нескольких слов."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Всё что было в опциональном CSS (файлах ",
        {
         "tag": "tt",
         "content": [
          "b-dropdown_arr.css"
         ]
        },
        ") вынесено в директории (",
        {
         "tag": "tt",
         "content": [
          "arr/b-dropdown.arr.css"
         ]
        },
        ")."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В основном файле блока стало меньше кода."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для модификации постфиксом вместо минуса начали использовать подчёркивание."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Это позволило визуально отделить имя блока от модификатора, что потом пригодилось при реализации инструментов, помогающих работать с кодом."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BEM"
       },
       "content": [
        "БЭМ"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В марте 2009 выходит версия Лего 2.0."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Этим событием заканчивается «Вёрстка независимыми блоками» и начинается «БЭМ»."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM stands for Block, Element, Modifier; these are three key entities we use to develop web components."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Lego202009"
       },
       "content": [
        "Лего 2.0, 2009"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Что же принципиально изменилось с выходом версии 2.0?"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Самое главное изменение — мы вывели вперёд блоки, а не технологии. Блоки стали первичны, а технологии их реализации — вторичны."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Реализация блока делалась в отдельной директории, а технологии — это файлы внутри неё. В том числе появилась документация к блоку — это файл ",
        {
         "tag": "tt",
         "content": [
          ".wiki"
         ]
        },
        " внутри блока."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Какими терминами мы тогда оперировали?"
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Terminologiya"
       },
       "content": [
        "Терминология"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Независимый блок"
         ]
        },
        ", который может быть использован в любом месте страницы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В XML он представлен тегом в неймспейсе ",
        {
         "tag": "tt",
         "content": [
          "lego"
         ]
        },
        ":"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:l-head",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:b-head-logo",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "В HTML класс у блока, такой же, как имя этого тега:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "table",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "l-head",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "div",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "b-head-logo",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        ".l-head\n.b-head-logo"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Все файлы (css, js, html, xsl), относящиеся к блоку, кладутся в его директорию:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    common/\n        block/\n            b-head-logo/\n                b-head-logo.css\n                b-head-logo.xsl\n                b-head-logo.js\n                b-head-logo.wiki"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Элементы в XML пишутся в неймспейсе lego без префикса:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:b-head-logo",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:name",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "lego:b-head-logo",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Класс в HTML — тоже без префикса."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "div",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "b-head-logo",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "span",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "name",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "Авто",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "span",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "div",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n\n.b-head-logo .name { ... }"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Файлы для вложенного элемента кладутся в отдельную директорию."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "common/\n    block/\n        b-head-logo/\n            name/\n                b-head-logo.name.css\n                b-head-logo.name.png\n                b-head-logo.name.wiki"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Модификаторы в XML представлены атрибутами в неймспейсе lego:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:b-head-tabs",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "lego:theme",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "grey",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "В HTML используется дополнительный класс."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "div",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "b-head-tabs b-head-tabs_grey",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n\n.b-head-tabs_grey { ... }"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Файлы для модификатора кладутся в отдельную директорию, с подчёркиванием в начале имени:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "common/\n    block/\n        b-head-logo/\n            _theme/\n                b-head-logo_gray.css\n                b-head-logo_gray.png\n                b-head-logo_gray.wiki"
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Deklaraciyaispolyzuemyxblokov"
       },
       "content": [
        "Декларация используемых блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Все лего-компоненты проекта описываются в XML-файле."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:page",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:l-head",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:b-head-logo",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n            ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:name",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "lego:b-head-logo",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "lego:b-head-tabs",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "type",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "search-and-content",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Из него генерируются CSS-файлы."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "@import url(../../common/block/global/_type/global_reset.css);\n@import url(../../common/block/l-head/l-head.css);\n@import url(../../common/block/b-head-logo/b-head-logo.css);\n@import url(../../common/block/b-head-logo/name/b-head-logo.name.css);\n@import url(../../common/block/b-head-tabs/b-head-tabs.css);\n@import url(../../common/block/b-dropdown/b-dropdown.css);\n@import url(../../common/block/b-dropdown/text/b-dropdown.text.css);\n@import url(../../common/block/b-pseudo-link/b-pseudo-link.css);\n@import url(../../common/block/b-dropdown/arrow/b-dropdown.arrow.css);\n@import url(../../common/block/b-head-search/b-head-search.css);\n@import url(../../common/block/b-head-search/arrow/b-head-search.arrow.css);\n@import url(../../common/block/b-search/b-search.css);\n@import url(../../common/block/b-search/input/b-search.input.css);\n@import url(../../common/block/b-search/sample/b-search.sample.css);\n@import url(../../common/block/b-search/precise/b-search.precise.css);\n@import url(../../common/block/b-search/button/b-search.button.css);\n@import url(../../common/block/b-head-userinfo/b-head-userinfo.css);\n@import url(../../common/block/b-head-userinfo/user/b-head-userinfo.user.css);\n@import url(../../common/block/b-user/b-user.css);\n@import url(../../common/block/b-head-userinfo/service/b-head-userinfo.service.css);\n@import url(../../common/block/b-head-userinfo/setup/b-head-userinfo.setup.css);\n@import url(../../common/block/b-head-userinfo/region/b-head-userinfo.region.css);\n@import url(block/b-head-logo/b-head-logo.css);\n@import url(block/b-head-search/b-head-search.css);"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Из этого файла видно, что сначала идёт общий код, а потом добавляются стили, чтобы привести лего-блоки к дизайну проекта."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Имена файлов элементов пишутся через точку: ",
        {
         "tag": "tt",
         "content": [
          "b-head-logo.name.css"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Из XML-декларации генерируются и JS-файлы."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "js"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "include"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "("
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-string ohl-string-double"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          },
          "../../common/block/i-locale/i-locale.js",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          }
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ";"
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "include"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "("
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-string ohl-string-double"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          },
          "../../common/block/b-dropdown/b-dropdown.js",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          }
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ";"
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "include"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "("
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-string ohl-string-double"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          },
          "../../common/block/b-search/sample/b-search.sample.js",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          }
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ";"
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "include"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "("
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-string ohl-string-double"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          },
          "../../common/block/b-head-userinfo/user/b-head-userinfo.user.js",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&quot;"
           ]
          }
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          ";"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "А также XSL-файлы."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-comment ohl-comment-preproc"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;?"
           ]
          },
          "xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "?&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:stylesheet",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "xmlns:xsl",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "http://www.w3.org/1999/XSL/Transform",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "version",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "1.0",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/i-common/i-common.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/i-items/i-items.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/l-head/l-head.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-logo/b-head-logo.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-logo/name/b-head-logo.name.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-tabs/b-head-tabs.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-dropdown/b-dropdown.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-pseudo-link/b-pseudo-link.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-search/b-head-search.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-search/b-search.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-search/input/b-search.input.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-search/sample/b-search.sample.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-search/precise/b-search.precise.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-search/button/b-search.button.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-userinfo/b-head-userinfo.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-user/b-user.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-userinfo/service/b-head-userinfo.service.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-userinfo/setup/b-head-userinfo.setup.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "xsl:import",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "href",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "../../common/block/b-head-userinfo/region/b-head-userinfo.region.xsl",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/&gt;"
           ]
          }
         ]
        },
        "\n\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "xsl:stylesheet",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы перестали писать эти файлы руками, началась генерация кода."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Skorostyselektorov2009"
       },
       "content": [
        "Скорость селекторов, 2009"
       ]
      },
      {
       "elem": "p",
       "content": [
        "При реализации новой версии Яндекс.Почты была задача сделать её такой быстрой как программа на компьютере."
       ]
      },
      {
       "elem": "p",
       "content": [
        "При решении этой задачи начали использовать XSL в браузере (и подгружать по сети XML, необходимый для отрисовки данных на странице) и столкнулись с проблемой, что трансформации отрабатывают быстро, но вставка в DOM полученного результата происходит очень медленно. При этом, если отключить CSS — всё происходит быстро."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Начали исследовать эту проблему и пришли к тому, что тормозят селекторы CSS, которые при большом DOM-дереве и большой таблице стилей оказывают существенное влияние на скорость отрисовки браузером страницы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Результаты исследования подробно описаны в статье ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=338",
         "content": "http://clubs.ya.ru/bem/replies.xml?item_no=338"
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы поняли, что решение этой проблемы у нас есть давно — это ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=338",
         "content": [
          "абсолютно-независимые блоки"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы переделали все блоки в Лего на АНБ нотацию и с тех пор пишем блоки так, чтобы у каждого DOM-узла был свой class (на который можно навесить стили) и не используемся Tag Rules в CSS."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В классы элементов вносится имя блока, селекторы получаются простыми и быстрыми."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "div",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "b-head-logo",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;"
           ]
          },
          "span",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "class",
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-punctuation"
             },
             "content": [
              "="
             ]
            },
            {
             "tag": "span",
             "attrs": {
              "class": "ohl-string ohl-string-double"
             },
             "content": [
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              },
              "b-head-logo__name",
              {
               "tag": "span",
               "attrs": {
                "class": "ohl-punctuation"
               },
               "content": [
                "&quot;"
               ]
              }
             ]
            }
           ]
          },
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n        Авто\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "span",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name ohl-name-tag"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;/"
           ]
          },
          "div",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&gt;"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Stabilizaciyanotacii"
       },
       "content": [
        "Стабилизация нотации"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Постепенно мы пришли к тому, что нотация в коде и структура на файловой системе устоялась и с тех пор уже не меняется."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В именах файлов разделитель . был заменён на ",
        {
         "tag": "u",
         "content": [
          ". Было "
         ]
        },
        {
         "tag": "tt",
         "content": [
          "b-block.elem.css"
         ]
        },
        ", стало ",
        {
         "tag": "tt",
         "content": [
          "b-block",
          {
           "tag": "u",
           "content": [
            "elem.css"
           ]
          }
         ]
        },
        ". Теперь они совпадают с CSS-селекторами."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Были реализованы модификаторы у элементов по аналогии с модификаторами блоков. ",
        {
         "tag": "tt",
         "content": [
          ".b-block",
          {
           "tag": "u",
           "content": [
            "elem_theme_green"
           ]
          }
         ]
        },
        " по аналогии с ",
        {
         "tag": "tt",
         "content": [
          ".b-block_theme_green"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В имя файла модификатора и в его класс внесён тип модификатора. Было ",
        {
         "tag": "tt",
         "content": [
          ".b-menu",
          {
           "tag": "u",
           "content": [
            "item_current"
           ]
          }
         ]
        },
        ", стало ",
        {
         "tag": "tt",
         "content": [
          ".b-menu",
          {
           "tag": "u",
           "content": [
            "item_state_current"
           ]
          }
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Причина этого изменения — работа с модификаторами из JS."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "OpenSource2010"
       },
       "content": [
        "Open Source (2010)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В 2010 году мы создали организацию ",
        {
         "block": "b-link",
         "url": "https://github.com/bem",
         "content": [
          "bem на github’е"
         ]
        },
        ", чтобы вести разработку в open source."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Bibliotekabembl"
       },
       "content": [
        "Библиотека bem-bl"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы начали выносить блоки из Лего в ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-bl",
         "content": [
          "bem-bl"
         ]
        },
        ", проводя одновременно с этим рефакторинг."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Вместе с выносом блоков публиковали информацию про них в клубе: ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/posts.xml?tag=8486525",
         "content": "http://clubs.ya.ru/bem/posts.xml?tag=8486525"
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Работы по выносу блоков в Open Source пока не закончены."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Instrumenty"
       },
       "content": [
        "Инструменты"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Начали реализацию инструментов ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
         ]
        },
        ", которые помогают работать с файлами по БЭМ-методу."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Инструменты реализуются на JavaScript под Node.js."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Директории с реализацией блоков стали называть «уровнем переопределения»."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, на проекте может быть:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "публичная библиотека блоков с github"
         ]
        },
        {
         "elem": "li",
         "content": [
          "внутренняя библиотека lego"
         ]
        },
        {
         "elem": "li",
         "content": [
          "и блоки самого проекта"
         ]
        }
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "bem-bl/\n    b-logo/\nlego/\n    b-logo/\nauto/\n    blocks/\n        b-logo/"
       ]
      },
      {
       "elem": "p",
       "content": [
        "На уровне переопределения можно задать другую схему именования папок/файлов, отличную от нашей."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для этого нужно сконфигурировать уровень:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        ".bem/\n    level.js"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, вы можете задать другие разделители между именем блока и элемента, или не раскладывать всё по директориям, а сделать плоскую структуру из файлов."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "ShablonizatorBEMHTML"
       },
       "content": [
        "Шаблонизатор BEMHTML"
       ]
      },
      {
       "elem": "p",
       "content": [
        "После экспериментов с разными шаблонизаторами, был разработан шаблонизатор BEMHTML."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Этот шаблонизатор"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "позволяет писать шаблоны в БЭМ-терминах"
         ]
        },
        {
         "elem": "li",
         "content": [
          "доопределять их на уровнях переопределения"
         ]
        },
        {
         "elem": "li",
         "content": [
          "исполнять эти шаблоны, как на сервере, так и в браузере, поскольку\n шаблоны компилируются в простой и быстрый JavaScript"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "О BEMHTML есть много информации в клубе на Яру:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "clubs.ya.ru/bem/replies.xml?item_no=898",
           "content": "clubs.ya.ru/bem/replies.xml?item_no=898"
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "clubs.ya.ru/bem/replies.xml?item_no=899",
           "content": "clubs.ya.ru/bem/replies.xml?item_no=899"
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "clubs.ya.ru/bem/replies.xml?item_no=1153",
           "content": "clubs.ya.ru/bem/replies.xml?item_no=1153"
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "clubs.ya.ru/bem/replies.xml?item_no=1172",
           "content": "clubs.ya.ru/bem/replies.xml?item_no=1172"
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "clubs.ya.ru/bem/replies.xml?item_no=1391",
           "content": "clubs.ya.ru/bem/replies.xml?item_no=1391"
          }
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Rezyume"
       },
       "content": [
        "Резюме"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Как вы можете видеть, БЭМ появился не сразу. У нас был долгий период проб и подбора наиболее подходящего нам варианта."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Но обращаю ваше внимание, что всё это время это был БЭМ."
       ]
      },
      {
       "elem": "p",
       "content": [
        "То, что мы используем сейчас — не единственно верное решение. Наоборот, вы можете использовать БЭМ на своих проектах в том объёме, в котором он принесёт наибольшую пользу."
       ]
      },
      {
       "elem": "p",
       "content": [
        "БЭМ методология очень гибкая и позволяет вам настраивать её под свои процессы, под свои текущие технологии. Это способ организации работы над проектом, который позволяет команде работать c единым кодом и говорить на одном языке."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Каждая конкретная команда встраивает его в свой процесс разработки и использует так, как им удобно."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, у вас есть проект, в котором вы хотите применить БЭМ для вёрстки и ни для чего более."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Хорошо, мы тоже с этого начинали."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Выбирайте подходящую вам схему..."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, с префиксами и каскадом."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        ".b-block\n.b-block .elem\n.b-block_size_l\n.b-block .elem_size_l"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Или задайте класс каждому DOM-узлу и используйте абсолютно-независимые блоки."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        ".b-block\n.b-block__elem\n.b-block_size_l\n.b-block__elem_size_l"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Или можно убрать префиксы."
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        ".block\n.block__elem\n.block_size_l\n.block__elem_size_l"
       ]
      },
      {
       "elem": "p",
       "content": [
        "И начинайте делать вёрстку на проекте по БЭМ."
       ]
      },
      {
       "elem": "p",
       "content": [
        "О вариантах расположения на файловой системе, ",
        {
         "block": "b-link",
         "url": "../filesystem/filesystem.ru.wiki",
         "content": [
          "читайте отдельно"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Chitatydalyshe"
       },
       "content": [
        "Читать дальше"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "definitions/",
           "content": [
            "Определения"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "filesystem/",
           "content": [
            "Организация файловой системы"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "История создания"
         ]
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "block": "footer"
  }
 ]
})