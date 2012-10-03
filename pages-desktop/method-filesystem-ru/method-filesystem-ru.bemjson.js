({
 "block": "b-page",
 "title": "method-filesystem-ru",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-filesystem-ru.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-filesystem-ru",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-filesystem-ru"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-filesystem-ru"
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
        "id": "Predstavlenieblokovnafajlovojsisteme"
       },
       "content": [
        "Представление блоков на файловой системе"
       ]
      },
      {
       "elem": "p",
       "content": [
        "БЭМ методология очень гибкая и позволяет вам настраивать её под свои процессы, под свои текущие технологии."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Нужен способ быстро определять, где может находиться код блока, если"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "проект живёт долго и постоянно обрастает новыми сущностями"
         ]
        },
        {
         "elem": "li",
         "content": [
          "а команда разработки состоит из нескольких специалистов, растёт и изменяется (появляются новые люди)"
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Variantyimenovaniyafajlov"
       },
       "content": [
        "Варианты именования файлов"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Blokivodnomfajle"
       },
       "content": [
        "Блоки в одном файле"
       ]
      },
      {
       "elem": "p",
       "content": [
        "У вас есть проект, в котором вы хотите применить БЭМ для HTML/CSS вёрстки и ни для чего более."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Используйте самую простую схему на файловой системе, когда реализация блоков лежит в файлах с разделением по технологиям: html, css, js."
       ]
      },
      "<pre>\nmyfacebook/\n  myfacebook.css\n  myfacebook.js\n  myfacebook.html\n</pre>",
      {
       "elem": "p",
       "content": [
        "Файлы ",
        {
         "tag": "tt",
         "content": [
          "myfacebook.css"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "myfacebook.js"
         ]
        },
        " содержат весь CSS/JS код проекта и подключаются в HTML как есть."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Нет процесса сборки и оптимизации этих файлов. Это самый простой вариант, чтобы попробовать."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Фактически, БЭМ применяется только для именования CSS-классов."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Blokivfajlax"
       },
       "content": [
        "Блоки в файлах"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Когда весь CSS код блоков лежит в одном файле, то по этому файлу приходится всё время перемещаться."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если проект большой, делать это не удобно. Код блока легко искать, если он расположен в файлах, одноимённых ключевому слову блока."
       ]
      },
      "<pre>\nblocks/\n  head.css\n  menu.css\n\nall.css\n\nindex.html\nabout.html\n</pre>",
      {
       "elem": "p",
       "content": [
        "Файл ",
        {
         "tag": "tt",
         "content": [
          "all.css"
         ]
        },
        " может состоять из ",
        {
         "tag": "tt",
         "content": [
          "@import"
         ]
        },
        " соответствующих файлов из директории ",
        {
         "tag": "tt",
         "content": [
          "blocks"
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
        "@import url(blocks/head.css);\n@import url(blocks/menu.css);\n…"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Neobyazatelynoevotdelynyxfajlax"
       },
       "content": [
        "Не обязательное в отдельных файлах"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если в ваших блоках есть элементы/модификаторы, которые используются не на всех страницах, можно вынести их реализацию в отдельные файлы, чтобы подключать только то, что нужно."
       ]
      },
      {
       "elem": "p",
       "content": [
        "При этом можно использовать такую схему расположения на файловой системе:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Основной код блока размещён в файлах ",
          {
           "tag": "tt",
           "content": [
            "имя-блока"
           ]
          },
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя файла совпадает с именем блока"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация блока размещена в файлах с соответствующими расширениями"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Элементу соответствует файл ",
          {
           "tag": "tt",
           "content": [
            "имя-блока",
            {
             "tag": "u",
             "content": [
              "имя-элемента"
             ]
            }
           ]
          },
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя файла совпадает с именем элемента"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация элемента располагается в файлах с соответствующими расширениями"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Модификатору соответствует файл ",
          {
           "tag": "tt",
           "content": [
            "имя-блока_имя-модификатора_тип"
           ]
          },
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя файла содержит как имя модификатора, так и его тип"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация модификатора размещается в файлах в этой директории"
             ]
            }
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Вы можете использовать другую схему отделения имени блока от имени элемента и модификатора."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "b",
         "content": [
          "Пример"
         ]
        },
        {
         "tag": "br"
        }
       ]
      },
      "<pre>\nblocks/\n  head.css\n  head__search.css\n  head_size_big.css\n  menu.css\n\nabout.css\nabout.html\n\nindex.css\nindex.html\n</pre>",
      {
       "elem": "p",
       "content": [
        "Файл ",
        {
         "tag": "tt",
         "content": [
          "index.css"
         ]
        },
        " содержит увеличенную в размере шапку, но без поискового поля:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "@import url(blocks/head.css);\n@import url(blocks/head_size_big.css);\n@import url(blocks/menu.css);\n…"
       ]
      },
      {
       "elem": "p",
       "content": [
        "A в файле ",
        {
         "tag": "tt",
         "content": [
          "about.css"
         ]
        },
        " шапка обычного размера и есть поле поиска:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "@import url(blocks/head.css);\n@import url(blocks/head__search.css);\n@import url(blocks/menu.css);\n…"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В этом случае можно начинать использовать ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
         ]
        },
        " для сборки проекта."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Kazhdyjblokvsvoejdirektorii"
       },
       "content": [
        "Каждый блок в своей директории"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Может возникнуть задача использовать несколько блоков предыдущего проекта на новом проекте."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Чтобы легко делать это, реализацию блока (во всех технологиях) нужно уметь доставлять в другое место. Это может быть сделано при помощи копирования файлов или частичным чекаутом репозитория проекта-донора."
       ]
      },
      {
       "elem": "p",
       "content": [
        "И в том, и в другом случае удобно, чтобы все файлы, относящиеся к блоку, были объединены в одну директорию:"
       ]
      },
      "<pre>\nblocks/\n  menu/\n    menu.xsl\n    menu.js\n    menu.css\n</pre>",
      {
       "elem": "h3",
       "attrs": {
        "id": "Elementymodifikatoryvotdelynyxdirektoriyax"
       },
       "content": [
        "Элементы/модификаторы в отдельных директориях"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В процессе работы над проектом может возникнуть необходимость изменить какой-нибудь блок."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Менеджер может попросить:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Изменить цвет ",
          {
           "tag": "tt",
           "content": [
            "активному пункту Меню"
           ]
          },
          ", или"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Сделать ",
          {
           "tag": "tt",
           "content": [
            "Меню"
           ]
          },
          " реагирующим на наведение курсора"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Один разработчик может попросить другого:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Помочь с вёрсткой ",
          {
           "tag": "tt",
           "content": [
            "Поисковой формы"
           ]
          },
          " под IE"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Чтобы можно было сразу понять, где лежит код, о котором идёт речь, можно соблюдать в разработке следующие (или похожие) требования:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Код блока размещён в отдельной директории",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя директории совпадает с именем блока"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация блока размещена в файлах в директории блока"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Элементу соответствует поддиректория в директории блока",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя директории совпадает с именем элемента"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация элемента располагается в файлах в этой директории"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Модификатору соответствует поддиректория в директории блока",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Имя директории соответствует имени модификатора"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Техническая реализация модификатора размещается в файлах в этой директории"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Названия файлов содержат как имя, так и значение модификатора"
             ]
            }
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Этот вариант очень наглядный, при взгляде на файловую систему можно увидеть всю структуру блока."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "b",
         "content": [
          "Пример"
         ]
        },
        {
         "tag": "br"
        },
        " Файловая структура блока Меню"
       ]
      },
      "<pre>\nmenu/\n  __item/\n    _state/\n      menu__item_state_current.css\n      menu__item_state_current.xsl\n    menu__item.css\n    menu__item.xsl\n  menu.css\n  menu.js\n  menu.xsl\n</pre>",
      {
       "elem": "p",
       "content": [
        "Поддержка такой файловой структуры в ручном режиме, очевидно, неудобна. Чтобы с этим справиться мы сделали ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "BEM tools"
         ]
        },
        ". Этот пакет инструментов помогает создавать и поддерживать файловую структуру, создавать файлы по шаблонам и т.д."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Gruppirovkablokovvpapki"
       },
       "content": [
        "Группировка блоков в папки"
       ]
      },
      {
       "elem": "p",
       "content": [
        "На большом портале необходимо реализовывать одни и те же блоки на разных проектах."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Может возникнуть задача:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Реализовать одинаковый Подвал ",
          {
           "tag": "tt",
           "content": [
            "на всех проектах Портала"
           ]
          },
          ", или"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Сделать ",
          {
           "tag": "tt",
           "content": [
            "новый проект"
           ]
          },
          ", используя блоки уже существующего"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Разработка сайтов один за другим в web-студии часто подразумевает использование типовых решений для типовых страниц."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Менеджер может попросить:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Сделать Страницу заказа товара с формой ",
          {
           "tag": "tt",
           "content": [
            "как на позапрошлом проекте"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Выполнять эти задачи нужно без копирования блоков из проекта в проект. Должна быть возможность подключить блоки одного проекта к другому. Для этого блоки нужно объединять в одну директорию."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы называем такую директорию ",
        {
         "tag": "tt",
         "content": [
          "blocks"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "b",
         "content": [
          "Пример"
         ]
        }
       ]
      },
      "<pre>\nblocks/\n  foot/\n  head/\n  menu/\n  page/\n  search/\n</pre>",
      {
       "elem": "p",
       "content": [
        "Такую папку можно подключить к новому проекту прямо из репозитория."
       ]
      },
      {
       "elem": "p",
       "content": [
        "В этом случае код блока будет храниться только в одном месте. Если нужно исправить ошибку или внести изменения, это нужно будет сделать только там."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Urovnipereopredeleniya"
       },
       "content": [
        "Уровни переопределения"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если группа блоков одного проекта (объединённая в папку) подключена к другому проекту напрямую (при помощи частичного чекаута или svn:externals), то любое закоммиченное изменение в таких блоках повлияет на оба проекта."
       ]
      },
      {
       "elem": "p",
       "content": [
        "При разработке одного сайта на основе существующего может потребоваться:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Увеличить шрифт в Шапке на всём сайте (не затрагивая предыдущий сайт),"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Добавить анимацию для раскрытия всех выпадающих меню."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "То есть необходима возможность переопределять (или доопределять) блоки в разных технологиях только для определённого сайта или только для определённых страниц. Это возможно благодаря ",
        {
         "tag": "tt",
         "content": [
          "уровням переопределения"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Уровень переопределения"
         ]
        },
        " — это набор реализаций блоков, сгруппированных в одну директорию."
       ]
      },
      "<div style=\"text-align:center;\">\n<img src=\"images/levels-schema.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Реализация любого блока библиотеки может быть расширена (или переопределена) на уровне проекта."
       ]
      },
      "<div style=\"text-align:center;\">\n<img src=\"images/block-levels.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "С точки зрения сборки страниц:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "При сборке каждой страницы можно указать список уровней (директорий), блоки которых будут\n   представлены на странице. Например,",
          {
           "tag": "br"
          },
          "\n   ",
          {
           "tag": "tt",
           "content": [
            "build-page -l blocks-common -l blocks-my my-page.html"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения файловой структуры:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Проект можно содержать любое количество реализаций блоков. Но на страницу попадут только те,\n   которые явно указаны к применению для сборки этой страницы. Возможно делать разные наборы\n   уровней переопределения для разных разделов сайтов."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения JavaScript"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Необходима возможность декларативного описания динамического поведения элементов на странице.\n   Конечное поведение должно собираться с разных уровней переопределения. Например,"
         ]
        }
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
          "class": "ohl-comment ohl-comment-multiline"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/*"
           ]
          },
          " blocks-common/dropdown/dropdown.js ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "*/"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "Block"
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
          "class": "ohl-string ohl-string-single"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&apos;"
           ]
          },
          "dropdown",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&apos;"
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
          ","
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "init"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          ":"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-keyword ohl-keyword-declaration"
         },
         "content": [
          "function"
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
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n    …\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
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
        "\n\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-comment ohl-comment-multiline"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "/*"
           ]
          },
          " blocks-my/dropdown/dropdown.js ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "*/"
           ]
          }
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "Block"
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
          "class": "ohl-string ohl-string-single"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&apos;"
           ]
          },
          "dropdown",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&apos;"
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
          ","
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "init"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          ":"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-keyword ohl-keyword-declaration"
         },
         "content": [
          "function"
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
          "class": "ohl-punctuation"
         },
         "content": [
          ")"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-keyword"
         },
         "content": [
          "this"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          "."
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "__base"
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
        "\n    …\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
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
        "С точки зрения шаблонного движка"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Для того, чтобы можно было не только переопределять, но и &quot;доопределять&quot; шаблон, нужна\n   возможность вызвать предыдущую реализацию шаблона.",
          {
           "tag": "br"
          },
          "\n   Например, в случае xsl:"
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
          "xsl:template",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "match",
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
              "b:head",
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
        "\n  ",
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
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-comment"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "&lt;!--"
           ]
          },
          " Node for extra design ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "--&gt;"
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
          "xsl:apply-imports",
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
        "\n  ",
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
          "xsl:template",
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
        "С точки зрения архитектуры проекта"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "При разработке портала из нескольких сайтов можно выделить общую библиотеку блоков, которая станет\n   одним из уровней переопределения для всех сайтов портала. Блоки конкретного сайта — объединить в\n   другой уровень переопределения."
         ]
        },
        {
         "elem": "li",
         "content": [
          "В одном и том же репозитории может храниться реализация сайта для десктопных и мобильных браузеров.",
          {
           "tag": "br"
          },
          "\n   В таком проекте есть уровень переопределения для общей реализации блоков, для мобильной и для десктопной.\n   Различные комбинации уровней дают желаемую реализацию блоков на конкретных страницах."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Примером реализации нескольких уровней переопределения в одном репозитории может служить ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-bl",
         "content": [
          "Open Source библиотека блоков bem-bl"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Sborkastranic"
       },
       "content": [
        "Сборка страниц"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Работа со страницей в терминах блоков подразумевает ",
        {
         "tag": "tt",
         "content": [
          "предметную абстракцию"
         ]
        },
        ". Эта предметная абстракция обязательна только на уровне взаимодействия человека с кодом."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Когда код попадает в браузер, наличие предметной абстракции не обязательно, важно лишь сохранить требуемый внешний вид и поведение блоков на странице."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Таким образом, ",
        {
         "tag": "tt",
         "content": [
          "код для людей"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "код для браузеров"
         ]
        },
        " — не одно и то же: ` * Человек пишет код блоков, браузер получает код целой страницы"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для того, чтобы превратить «код для людей» в «код для браузеров» мы используем ",
        {
         "tag": "tt",
         "content": [
          "сборку страниц"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Сборка страницы"
         ]
        },
        " — это формирование кода страницы в различных технологиях (HTML, CSS, JavaScript) на основе декларативного описания страницы (XML, JSON) путём применения реализаций описанных блоков."
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения CSS"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Файлы всех блоков собираются в один файл страницы",
          {
           "tag": "br"
          },
          "\n   Несмотря на то, что CSS для каждого блока, элемента и модификатора реализован в отдельном файле,\n   для работы страницы нет необходимости подключать эти файлы as is. Всю необходимую CSS-реализацию\n   страницы можно собрать в один файл. К тому же это решает проблемы: ограниченного количества импортов\n   в IE, количества HTTP-запросов к серверу. Объединение всех CSS в один файл мы делаем при помощи\n   утилиты ",
          {
           "block": "b-link",
           "url": "https://github.com/veged/borschik",
           "content": [
            "borschik"
           ]
          },
          "."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Браузер получает минимизированный код",
          {
           "tag": "br"
          },
          "\n   В процессе сборки можно минимизировать и оптимизировать CSS-код. Например, при помощи утилиты\n   ",
          {
           "block": "b-link",
           "url": "https://github.com/css/csso",
           "content": [
            "CSSO"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Каждый браузер получает CSS, написанный специально для него",
          {
           "tag": "br"
          },
          "\n   Есть возможность разделять CSS-реализации для разных браузеров и поставлять в каждый конкретный\n   браузер только тот CSS, который нужен ему. Для этого можно использовать ",
          {
           "block": "b-link",
           "url": "https://github.com/afelix/setochka",
           "content": [
            "Сеточку, прототип"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения JavaScript"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Много файлов для блоков, один файл для страницы",
          {
           "tag": "br"
          },
          "\n   Так же, как и в случае CSS, JavaScript-реализация всех необходимых блоков может быть объединена в один файл."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения шаблонных движков"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Работают только нужные шаблоны",
          {
           "tag": "br"
          },
          "\n   Конечный набор шаблонов, используемых для вывода HTML страницы в результате сборки содержит только\n   шаблоны нужных блоков. Благодаря этому увеличивается производительность шаблонов и  уменьшается\n   вероятность возникновения побочных эффектов."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения процесса разработки"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Роботы на службе у человека (не наоборот)",
          {
           "tag": "br"
          },
          "\n   Разработчик пишет код так, как ему удобно. О производительности заботятся роботы, которые в процессе\n   сборки превращают код в оптимизированный (и, возможно, нечитаемый)."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения организации труда"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Разделение труда",
          {
           "tag": "br"
          },
          "\n   Существуют одни разработчики, создающие блоки, и существуют другие разработчики, занимающиеся\n   оптимизацией конечного продукта."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Для сборки файлов страниц используются ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "БЭМ-инструменты"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Avtomatizaciyasborki"
       },
       "content": [
        "Автоматизация сборки"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Использование ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "БЭМ-инструментов"
         ]
        },
        " подразумевает выполнение нескольких операций для каждой страницы. В результате этих операций на основе bemjson описания страницы генерируются CSS и JavaScript файлы страницы, шаблоны страницы и (в случае статической разработки) - HTML страницы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Чтобы не выполнять эти команды вручную, мы добавили в ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
         ]
        },
        " команды ",
        {
         "tag": "tt",
         "content": [
          "bem make"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "bem server"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "bem make"
         ]
        },
        " — команда для статической сборки проекта. При запуске собирает все файлы, которые требуют пересборки."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "bem server"
         ]
        },
        " — команда для запуска HTTP сервера, который при обработке запросов запускает точечную сборку файлов проекта и после успешного выполнения сборки отдаёт их клиенту."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Чтобы узнать больше, смотрите в ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools/blob/master/README.ru.md#bem-make",
         "content": [
          "документацию"
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
          "Организация файловой системы"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "history/",
           "content": [
            "История создания"
           ]
          }
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