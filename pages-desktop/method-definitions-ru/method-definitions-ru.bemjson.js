({
 "block": "b-page",
 "title": "method-definitions-ru",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-definitions-ru.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-definitions-ru",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-definitions-ru"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-definitions-ru"
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
        "id": "ChtotakoeBEM"
       },
       "content": [
        "Что такое БЭМ?"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "БЭМ"
         ]
        },
        " расшифровывается как Блок-Элемент-Модификатор, смысл этих терминов раскрыт ниже."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Один из самых распространённых примеров методологии в программировании – это ООП. ООП – парадигма программирования, применимая во многих языках. Точно так же и методология БЭМ – способ описания действительности в коде, набор паттернов и способ думать о сущностях вне зависимости от того, на каком языке программирования это реализуется."
       ]
      },
      {
       "elem": "p",
       "content": [
        "На основе этой методологии разработаны подходы к вёрстке и технические решения, которые позволяют нам быстро создавать новые страницы и легко поддерживать уже существующие."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Edinayapredmetnayaoblasty"
       },
       "content": [
        "Единая предметная область"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Представьте обычный сайт. Например, такой, как на картинке."
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/site.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "При разработке и развитии сайта удобно мысленно выделить «блоки», из которых сайт состоит."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, на этом макете есть ",
        {
         "tag": "tt",
         "content": [
          "Шапка"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Основной лайаут"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "Подвал"
         ]
        },
        ". Шапка в свою очередь состоит из ",
        {
         "tag": "tt",
         "content": [
          "Логотипа"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Поиска"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Блока авторизации"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "Меню"
         ]
        },
        ". Основной лайаут содержит ",
        {
         "tag": "tt",
         "content": [
          "Заголовок страницы"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "Блок текста"
         ]
        },
        "."
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/site-marked.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Если у каждой части сайта есть название, этими терминами удобно пользоваться при общении внутри команды."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Менеджер может попросить"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "увеличить ",
          {
           "tag": "tt",
           "content": [
            "Шапку"
           ]
          },
          ", или"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Сделать ещё одну страницу, где в ",
          {
           "tag": "tt",
           "content": [
            "Шапке"
           ]
          },
          " нет ",
          {
           "tag": "tt",
           "content": [
            "Поиска"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Можно попросить JavaScript-разработчика"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Сделать ",
          {
           "tag": "tt",
           "content": [
            "Блок авторизации"
           ]
          },
          " анимированным, и т.д."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Итак,"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Blok"
       },
       "content": [
        "Блок"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы называем блоком некоторую самостоятельную сущность, кирпичик проекта. Блок может быть простым или составным, то есть содержать в себе другие блоки."
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
        " Блок поисковой формы",
        {
         "tag": "br"
        }
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/search-block.png\"/>\n</div>",
      {
       "elem": "h3",
       "attrs": {
        "id": "Element"
       },
       "content": [
        "Элемент"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Элемент – это часть блока, отвечающая за отдельную функцию. Он может находиться только в составе блока и не имеет смысла в отрыве от него."
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
        " Поле ввода и кнопка — элементы поискового блока"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/search-block-marked.ru.png\"/>\n</div>",
      {
       "elem": "h2",
       "attrs": {
        "id": "Credstvaopisaniyastranicyishablony"
       },
       "content": [
        "Cредства описания страницы и шаблоны"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Блоки и элементы – это обозначение содержания страницы. Помимо факта присутствия конкретных блоков на странице, важно также их расположение."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Блоки (или элементы) могут идти друг за другом в определённом порядке."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, товары в интернет-магазине:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/goods-list.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Или пункты меню:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/menu-items.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Блоки могут быть вложены друг в друга."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, блок Шапка содержит другие блоки:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/head-marked.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Чтобы быстро изменять содержание страницы, добавлять новые блоки, перемещать их друг относительно друга, нужен способ описания страницы в виде текста. Для этого необходимо, чтобы каждому блоку или элементу соответствовало ключевое слово."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Ключевое слово, обозначающее конкретный блок, называется ",
        {
         "tag": "tt",
         "content": [
          "именем блока"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, ",
        {
         "tag": "tt",
         "content": [
          "menu"
         ]
        },
        " для меню или ",
        {
         "tag": "tt",
         "content": [
          "head"
         ]
        },
        " для шапки сайта."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Ключевое слово, обозначающее элемент, называется ",
        {
         "tag": "tt",
         "content": [
          "именем элемента"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, каждый пункт меню – это элемент ",
        {
         "tag": "tt",
         "content": [
          "item"
         ]
        },
        " блока ",
        {
         "tag": "tt",
         "content": [
          "menu"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Имя блока должно быть уникальным, из него однозначно следует, о каком блоке идёт речь. Одинаковые имена могут быть только у одинаковых блоков. В этом случае мы говорим о том, что один блок представлен на странице 2 (3, 4, …) раза."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Имя элемента должно быть уникальным только в пределах блока. Элемент может повторяться в блоке несколько раз."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, пункты меню:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/menu-items.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Такие ключевые слова нужно размещать в определённом порядке. Для этого подойдут форматы данных с использованием вложенности. Например, XML или JSON:"
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
          "b:page",
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
          "b:head",
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
          "b:menu",
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
        "\n      …\n    ",
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
          "b:menu",
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
          "e:column",
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
        "\n      ",
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
          "b:logo",
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
            "&lt;/"
           ]
          },
          "e:column",
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
          "e:column",
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
        "\n      ",
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
          "b:search",
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
          "e:input",
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
            "&lt;"
           ]
          },
          "e:button",
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
        "Search",
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
          "e:button",
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
        "\n      ",
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
          "b:search",
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
            "&lt;/"
           ]
          },
          "e:column",
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
          "e:column",
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
        "\n      ",
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
          "b:auth",
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
        "\n        …\n      ",
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
          "b:auth",
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
          "e:column",
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
            "&lt;/"
           ]
          },
          "b:head",
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
          "b:page",
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
        "В данном примере пространства имён ",
        {
         "tag": "tt",
         "content": [
          "b"
         ]
        },
        " и ",
        {
         "tag": "tt",
         "content": [
          "e"
         ]
        },
        " использованы, чтобы отделять узлы блоков от узлов элементы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "То же самое в JSON:"
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
          "block"
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
          "page",
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
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-name"
         },
         "content": [
          "block"
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
          "head",
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
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "["
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "block"
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
          "menu",
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
          "class": "ohl-name"
         },
         "content": [
          "content"
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
        " … ",
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
          ","
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "column",
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
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "block"
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
          "logo",
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
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n      ",
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
          ","
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "column",
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
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "["
         ]
        },
        "\n          ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n            ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "block"
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
          "search",
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
        "\n            ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "["
         ]
        },
        "\n              ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "input",
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
        " ",
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
          ","
         ]
        },
        "\n              ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "button",
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
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "Search",
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
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n            ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "]"
         ]
        },
        "\n          ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "]"
         ]
        },
        "\n      ",
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
          ","
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "column",
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
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n          ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "block"
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
          "auth",
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
          "class": "ohl-name"
         },
         "content": [
          "content"
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
        " …\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "]"
         ]
        },
        "\n  ",
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
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "На примерах выше приведена объектная модель с вложенностью блоков и элементов в другие блоки. Также в описании страницы присутствуют произвольные данные."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Такую структуру мы называем ",
        {
         "tag": "tt",
         "content": [
          "БЭМ-деревом"
         ]
        },
        " (по аналогии с DOM-деревом)."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Конечный HTML для браузера получается из БЭМ-дерева страницы путём наложения шаблонов (например, XSL-шаблоны или JavaScript)."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если разработчику нужно переместить блок в другое место на странице, это делается при помощи изменения дерева. Конечный вид шаблоны сделают сами."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Вы можете использовать любой формат для описания БЭМ-дерева и любой шаблонизатор."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы ориентируемся на JSON как формат описания страницы. Он превращается в HTML при помощи JavaScript-based шаблонизатора BEMHTML."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Nezavisimostyblokov"
       },
       "content": [
        "Независимость блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Во время разработки или поддержки долгоживущего проекта может возникнуть желание переместить блок. Например, стоит задача"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Поменять местами ",
          {
           "tag": "tt",
           "content": [
            "Логотип"
           ]
          },
          " и ",
          {
           "tag": "tt",
           "content": [
            "Блок авторизации"
           ]
          },
          ", или"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Разместить ",
          {
           "tag": "tt",
           "content": [
            "Меню"
           ]
          },
          " под ",
          {
           "tag": "tt",
           "content": [
            "Поиском"
           ]
          }
         ]
        }
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/head.png\"/>\n</div>",
      "<div style=\"text-align: center\">\n<img src=\"images/head-changed.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Для того, чтобы легко выполнять эти просьбы, блоки должны быть ",
        {
         "tag": "tt",
         "content": [
          "независимыми"
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
          "Независимый"
         ]
        },
        " блок реализован так, чтобы его можно было вставить в любое место на странице. В том числе и вставить в другой блок."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "NezavisimyjCSS"
       },
       "content": [
        "Независимый CSS"
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения CSS для блока это означает, что"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "У блока (или элемента) должно быть уникальное «имя», на которое можно написать CSS\n   правило. Например, соответствующий CSS-класс."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Не должно быть CSS-селекторов на теги (",
          {
           "tag": "tt",
           "content": [
            ".menu td"
           ]
          },
          "), они по контекстно-зависимые"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Нужно избегать каскадные селекторы"
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "PrimersxemyimenovaniyanezavisimyxCSSklassov"
       },
       "content": [
        "Пример схемы именования независимых CSS-классов"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Одна из возможных схем именования CSS-классов, удовлетворяющая требованиям, такая:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "CSS-класс блока совпадает с ",
          {
           "tag": "tt",
           "content": [
            "именем блока"
           ]
          }
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
          "ul",
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
              "menu",
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
        "\n  …\n",
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
          "ul",
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
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "CSS-класс элемента — это ",
          {
           "tag": "tt",
           "content": [
            "имя блока"
           ]
          },
          " и ",
          {
           "tag": "tt",
           "content": [
            "имя элемента"
           ]
          },
          ", разделённые\n определённым символом (или символами)"
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
          "ul",
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
              "menu",
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
          "li",
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
              "menu__item",
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
        "…",
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
          "li",
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
          "li",
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
              "menu__item",
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
        "…",
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
          "li",
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
          "ul",
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
        "Необходимость учитывать имя блока в CSS-классе для элемента нужна для минимизации каскада."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Так же важно использовать одинаковые разделители для облегчения написания инструментов (описанных ниже) для программного доступа к элементам."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы используем дефис для разделения слов в длинных именах (например, ",
        {
         "tag": "tt",
         "content": [
          "block-name"
         ]
        },
        ") и два подчёркивания для отделения имени блока от имени элемента (",
        {
         "tag": "tt",
         "content": [
          "block-name_",
          {
           "tag": "span",
           "content": [
            "_"
           ]
          },
          "element-name"
         ]
        },
        ")."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TODO: ссылка на naming.ru.wiki"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Но вы можете использовать другую схему отделения слов в именах и отделения имени блока от имени элемента."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          {
           "tag": "tt",
           "content": [
            "block-name-",
            {
             "tag": "span",
             "content": [
              "-"
             ]
            },
            "element-name"
           ]
          },
          " или"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "tag": "tt",
           "content": [
            "blockName-elementName"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Nezavisimyeshablony"
       },
       "content": [
        "Независимые шаблоны"
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения шаблонного движка независимость блоков означает, что:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Блоки и элементы должны иметь описание во входных данных",
          {
           "tag": "br"
          },
          "\n   У блока (или элемента) должно быть уникальное «имя», чтобы при передаче данных шаблонному движку\n   можно было сказать «здесь нужно разместить Меню»."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Блок может быть легко помещён в любое место в БЭМ-дереве"
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Primernezavisimyxshablonovdlyablokov"
       },
       "content": [
        "Пример независимых шаблонов для блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Встречая во входных данных описание блока, шаблон должен однозначно преобразовывать его в нужный HTML. Для этого у каждого блока должен быть свой шаблон."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, в XSL это может выглядеть так:"
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
              "b:menu",
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
          "ul",
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
              "menu",
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
          "xsl:apply-templates",
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
          "ul",
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
              "b:menu/e:item",
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
          "li",
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
              "menu__item",
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
          "xsl:apply-templates",
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
          "li",
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
        "В своих собственных разработках мы постепенно отказываемся от XSL в пользу собственного JavaScript-based шаблонного движка ",
        {
         "block": "b-link",
         "url": "https://github.com/veged/xjst",
         "content": [
          "XJST"
         ]
        },
        ". Этот шаблонизатор вобрал в себя всё то, что нам нравилось в XSL, но реализует это с производительностью JavaScript как на сервере, так и на клиенте."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы пишем шаблоны для блоков на предметно-ориентированном языке (domain specific language) BEMHTML, в основе которого лежит XJST. ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=992",
         "content": [
          "Основные понятия шаблонизатора BEMHTML"
         ]
        },
        " опубликованы в клубе БЭМ."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TODO: ссылка на BEMHTML reference"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Povtoryaemostyblokov"
       },
       "content": [
        "Повторяемость блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "На сайте может появиться второй блок ",
        {
         "tag": "tt",
         "content": [
          "Меню"
         ]
        },
        ", например, в ",
        {
         "tag": "tt",
         "content": [
          "Подвале"
         ]
        },
        ". Или два блока ",
        {
         "tag": "tt",
         "content": [
          "Текст"
         ]
        },
        ", разделённых рекламной вставкой."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Даже если блок проектировался как единственный, на странице в любой момент может появиться второй такой же."
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения CSS это обозначает, что:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Для CSS-селекторов не используются селекторы с ID",
          {
           "tag": "br"
          },
          "\n   Вместо них удобно использовать классы"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения JavaScript это обозначает, что:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Блоки, которым требуется одинаковое поведение, могут быть однозначно определены: у них\nодинаковый CSS-класс",
          {
           "tag": "br"
          },
          "\n   Используя селекторы класса, можно выбрать все одинаковые блоки на странице и задать им нужное\n   динамическое поведение."
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Modificiruemostyblokov"
       },
       "content": [
        "Модифицируемость блоков"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Может возникнуть ситуация, в которой требуется не просто повторить блок, но и внести в него незначительные изменения."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, стоит задача:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Сделать в подвале ещё одно меню, с ",
          {
           "tag": "i",
           "content": [
            "другим дизайном"
           ]
          },
          "."
         ]
        }
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/site-footer-menu.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Чтобы не разрабатывать блок, минимально отличающийся от уже существующего, нужно воспользоваться ",
        {
         "tag": "tt",
         "content": [
          "модификатором"
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
          "Модификатор"
         ]
        },
        " — это свойство блока или элемента, которое меняет внешний вид или поведение."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Модификатор имеет имя и значение. Одновременно может использоваться несколько разных модификаторов."
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
        " Модификатор блока задаёт ему цвет фона"
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/search-background.png\"/>\n</div>",
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
        " Модификатор элемента для текущего пункта меню изменяет его внешний вид"
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/menu-current-item.png\"/>\n</div>",
      {
       "elem": "h3",
       "attrs": {
        "id": "Stochkizreniyavxodnyxdannyx"
       },
       "content": [
        "С точки зрения входных данных"
       ]
      },
      {
       "elem": "p",
       "content": [
        "В БЭМ-дереве модификаторы представлены как свойства той сущности, которая описывает блок или элемент."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, в XML это могут быть атрибуты соответствующего узла:"
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
          "b:menu",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "m:size",
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
              "big",
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
            "m:type",
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
              "buttons",
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
        "\n  …\n",
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
          "b:menu",
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
        "То же самое в формате JSON:"
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
          "block"
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
          "menu",
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
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "mods"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "["
         ]
        },
        "\n   ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "size"
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
          "big",
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
        " ",
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
          ","
         ]
        },
        "\n   ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "type"
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
          "buttons",
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
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "]"
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
        }
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "CtochkizreniyaHTMLCSS"
       },
       "content": [
        "C точки зрения HTML/CSS"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Модификатор представляется дополнительным CSS-классом блока или элемента."
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
          "ul",
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
              "menu menu_size_big menu_type_buttons",
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
        "\n  …\n",
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
          "ul",
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
       "block": "ohl",
       "mods": {
        "lang": "js"
       },
       "content": [
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
          "menu_size_big"
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
          "class": "ohl-comment ohl-comment-single"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "//"
           ]
          },
          " CSS code to specify height"
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
        "\n",
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
          "menu_type_buttons"
         ]
        },
        " ",
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
          "menu__item"
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
          "class": "ohl-comment ohl-comment-single"
         },
         "content": [
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-punctuation"
           },
           "content": [
            "//"
           ]
          },
          " CSS code to change item&apos;s look"
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
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Мы используем одно подчёркивание для отделение имени модификатора от имени блока и ещё одно подчёркивание для отделения значения модификатора от его имени."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TODO: ссылка на naming.ru.wiki"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Modificiruemostyelementov"
       },
       "content": [
        "Модифицируемость элементов"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Модифицируемость элементов реализуется по аналогии."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Обращаем ещё раз ваше внимание, что при написании CSS очень важно использовать одинаковые разделители имени элемента от имени блока для работы с ними из инструментов и JavaScript-функций."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, модификатором можно обозначить текущий пункт меню:"
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
          "b:menu",
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
          "e:item",
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
        "Index",
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
          "e:item",
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
          "e:item",
          " ",
          {
           "tag": "span",
           "attrs": {
            "class": "ohl-name ohl-name-attribute"
           },
           "content": [
            "m:state",
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
              "current",
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
        "Products",
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
          "e:item",
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
          "e:item",
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
        "Contact",
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
          "e:item",
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
          "b:menu",
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
       "block": "ohl",
       "mods": {
        "lang": "js"
       },
       "content": [
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
          "block"
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
          "menu",
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
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "["
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "item",
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
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "Index",
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
        " ",
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
          ","
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "item",
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
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "mods"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
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
          "state",
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
        " ",
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
          "current",
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
        " ",
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
          ","
         ]
        },
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "Products",
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
        "\n    ",
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
          ","
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "{"
         ]
        },
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "elem"
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
          "item",
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
          "class": "ohl-name"
         },
         "content": [
          "content"
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
          "Contact",
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
        " ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "]"
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
          "menu__item_state_current"
         ]
        },
        "\n",
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
          "font"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          "-"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "weight"
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
          "class": "ohl-name"
         },
         "content": [
          "bold"
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
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Что может быть представлено в HTML так:"
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
          "ul",
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
              "menu",
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
          "li",
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
              "menu__item",
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
        "Index",
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
          "li",
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
          "li",
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
              "menu__item menu__item_state_current",
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
        "Products",
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
          "li",
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
          "li",
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
              "menu__item",
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
        "Contact",
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
          "li",
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
          "ul",
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
        "Или так, чтобы сделать классы меню независимым от деталей реализации его раскладки:"
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
              "menu",
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
          "ul",
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
              "menu__layout",
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
          "li",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item",
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
        "Index",
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
            "&lt;/"
           ]
          },
          "li",
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
          "li",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item menu__item_state_current",
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
        "Products",
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
            "&lt;/"
           ]
          },
          "li",
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
          "li",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item",
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
        "Contact",
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
            "&lt;/"
           ]
          },
          "li",
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
            "&lt;/"
           ]
          },
          "ul",
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
              "menu",
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
              "menu__layout",
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
          "tr",
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
          "td",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item",
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
        "Index",
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
            "&lt;/"
           ]
          },
          "td",
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
          "td",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item menu__item_state_current",
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
        "Products",
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
            "&lt;/"
           ]
          },
          "td",
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
          "td",
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
              "menu__layout-unit",
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
        "\n      ",
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
              "menu__item",
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
        "Contact",
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
            "&lt;/"
           ]
          },
          "td",
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
            "&lt;/"
           ]
          },
          "tr",
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
            "&lt;/"
           ]
          },
          "table",
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
       "elem": "h2",
       "attrs": {
        "id": "Predmetnayaabstrakciya"
       },
       "content": [
        "Предметная абстракция"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если над проектом работает много людей, им нужно договариваться о предметной области. У всех блоков проекта должны быть однозначные имена, которые используются в коде."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, реализованный на сайте блок ",
        {
         "tag": "tt",
         "content": [
          "Облако тегов"
         ]
        },
        " всегда называется ",
        {
         "tag": "tt",
         "content": [
          "tags"
         ]
        },
        ", а каждый элемент (метка) в нём - ",
        {
         "tag": "tt",
         "content": [
          "tag"
         ]
        },
        ". Это справедливо для любой технологии: CSS, JS, XSL, etc."
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения процесса разработки:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Все участники процесса оперируют одними терминами"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения CSS:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "CSS блоков и элементов можно описывать на псевдоязыке, который затем компилируется в чистый\n   CSS согласно принятой схеме именования."
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
        "  ",
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
          "menu"
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
          "class": "ohl-name"
         },
         "content": [
          "__layout"
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
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "display"
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
          "class": "ohl-name"
         },
         "content": [
          "inline"
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
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "__layout"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          "-"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "item"
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
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "display"
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
          "class": "ohl-name"
         },
         "content": [
          "inline"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          "-"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "block"
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
        "\n      …\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "__item"
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
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "_state_current"
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
        "\n        ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "font"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-operator"
         },
         "content": [
          "-"
         ]
        },
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-name"
         },
         "content": [
          "weight"
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
          "class": "ohl-name"
         },
         "content": [
          "bold"
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
        "\n      ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n    ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        },
        "\n  ",
        {
         "tag": "span",
         "attrs": {
          "class": "ohl-punctuation"
         },
         "content": [
          "}"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "С точки зрения JavaScript:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Не нужно обращаться к DOM-узлам блоков и элементов по имени класса:"
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
          "class": "ohl-name"
         },
         "content": [
          "$"
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
          "menu__item",
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
          ")"
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
          "click"
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
        " … ",
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
          "$"
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
          "menu__item",
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
          ")"
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
          "addClass"
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
          "menu__item_state_current",
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
          "$"
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
          "menu",
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
          ")"
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
          "toggle"
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
          "menu_size_big",
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
          ")"
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
          "toggle"
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
          "menu_size_small",
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
        "Схема именования CSS-классов для блоков и элементов может измениться. При использовании специальных JavaScript-функций для обращения к блокам и работы с их модификаторами нужно будет внести изменения только в эти функции"
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
          "block"
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
          "menu",
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
          ")"
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
          "elem"
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
          "item",
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
          ")"
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
          "click"
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
        " … ",
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
          "block"
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
          "menu",
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
          ")"
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
          "elem"
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
          "item",
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
          ")"
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
          "setMod"
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
          "state",
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
          "current",
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
          "block"
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
          "menu",
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
          ")"
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
          "toggleMod"
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
          "size",
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
          "big",
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
          "small",
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
        "Приведённый здесь код - абстрактный. В реальных разработках мы используем JavaScript-ядро блока ",
        {
         "tag": "tt",
         "content": [
          "i-bem"
         ]
        },
        " из библиотеки bem-bl: ",
        {
         "block": "b-link",
         "url": "http://bem.github.com/bem-bl/sets/common-desktop/i-bem/i-bem.ru.html",
         "content": "http://bem.github.com/bem-bl/sets/common-desktop/i-bem/i-bem.ru.html"
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Konsistentnostybloka"
       },
       "content": [
        "Консистентность блока"
       ]
      },
      {
       "elem": "p",
       "content": [
        "На нашем сайте реализован блок ",
        {
         "tag": "tt",
         "content": [
          "Кнопка"
         ]
        },
        ", у которого есть динамическое поведение."
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/button.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "При наведении курсора на этот блок он меняет свой внешний вид."
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/button-cursor.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Менеджер может попросить использовать такую же кнопку на другой странице."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Просто CSS-реализации блока недостаточно. Ведь в данном случае, чтобы полностью повторить блок, нужно повторить и его поведение, описанное в JavaScript."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Таким образом, блок должен знать о себе всё. То есть реализация блока подразумевает описание его внешнего вида и поведения во всех необходимых технологиях. Этот принцип мы называем ",
        {
         "tag": "tt",
         "content": [
          "мультилингвальность"
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
          "Мультилингвальность"
         ]
        },
        " - это описание блока на всех языках (технологиях), необходимых для его работы."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Если блок нужно представить на странице, у него должны быть реализованы технологии:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "шаблоны (XSL, TT2, JavaScript, и т.д.), превращающие декларацию блока на странице в HTML-код"
         ]
        },
        {
         "elem": "li",
         "content": [
          "CSS, отвечающий за внешний вид блока"
         ]
        },
        {
         "elem": "li",
         "content": [
          "JavaScript-реализация блока, если у блока также есть динамическое поведение"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Картинки, относящиеся к блоку"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Документация к блоку"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "В список технологий входит всё, что относится к блоку."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Primeryizrealynojzhizni"
       },
       "content": [
        "Примеры из реальной жизни"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Наиболее широко методологию БЭМ применяет в своих frontend разработках компания ",
        {
         "block": "b-link",
         "url": "http://company.yandex.ru",
         "content": [
          "Яндекс"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "БЭМ-методология не требует применения определённого фреймворка. Также не обязательно применять методологию для всех web-технологий, используемых для построения страницы (хотя это был бы наиболее эффективный путь)."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "http://www.yandex.ru/all",
         "content": [
          "Все сервисы Яндекса"
         ]
        },
        " применяют методологию БЭМ в своём CSS и JavaScript коде и XSL шаблонах страниц. Например,"
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
           "url": "http://maps.yandex.ru/?text=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&amp;sll=37.609218%2C55.753559&amp;ll=37.609218%2C55.753563&amp;spn=2.570801%2C0.884460&amp;z=9&amp;l=map",
           "content": [
            "Яндекс.Карты"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://images.yandex.ru/yandsearch?text=Yandex+office&amp;rpt=image",
           "content": [
            "Яндекс.Картинки"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://video.yandex.ru/#search?text=yac%202011",
           "content": [
            "Яндекс.Видео"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://auto.yandex.ru/",
           "content": [
            "Яндекс.Авто"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://www.yandex.com.tr/",
           "content": [
            "Яндекс в Турции"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Некоторые сервисы вместо XSL шаблонов используют упомянутые в статье ",
        {
         "tag": "tt",
         "content": [
          "bemhtml"
         ]
        },
        " шаблоны:"
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
           "url": "http://yandex.ru/yandsearch?text=BEM+methodology+front-end&amp;lr=213",
           "content": [
            "Поиск Яндекса"
           ]
          },
          {
           "tag": "br"
          },
          "\n   ",
          {
           "block": "b-link",
           "url": "http://yandex.com/yandsearch?text=%22What+is+BEM%3F%22+front-end&amp;lr=213",
           "content": [
            "Поиск на английском"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://apps.yandex.ru/",
           "content": [
            "Поиск по мобильным приложениям"
           ]
          },
          {
           "tag": "br"
          },
          "\n   Сайт для смартфонов"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Другие российские порталы также используют БЭМ."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Например, сервисы ",
        {
         "block": "b-link",
         "url": "http://mail.ru/",
         "content": [
          "Mail.ru"
         ]
        },
        " частично реализованы с применением БЭМ. Это касается CSS реализации страниц, а также собственного C++ шаблонизатора компании."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Другие примеры:"
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
           "url": "http://beta.news.rambler.ru/",
           "content": [
            "Рамблер.Новости"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://hh.ru/",
           "content": [
            "HeadHunter"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://futurecolors.ru/tnkracing/",
           "content": [
            "TNK Racing Team"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Сайты, разработанные на основе ",
        {
         "block": "b-link",
         "url": "http://bem.github.com/bem-bl/index.ru.html",
         "content": [
          "библиотеки bem-bl"
         ]
        },
        ":"
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
           "url": "http://form.dev.eot.su/",
           "content": [
            "Форма с JZ валидацией"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://mishanga.pro/",
           "content": [
            "Mikhail Troshev vCard"
           ]
          },
          {
           "tag": "br"
          },
          "\n   Код проекта на GitHub: ",
          {
           "block": "b-link",
           "url": "https://github.com/mishanga/bem-vcard",
           "content": "https://github.com/mishanga/bem-vcard"
          }
         ]
        }
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
          "Определения"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "filesystem/filesystem.ru.wiki",
           "content": [
            "Организация файловой системы"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "history/history.ru.wiki",
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