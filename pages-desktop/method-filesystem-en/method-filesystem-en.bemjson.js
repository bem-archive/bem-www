({
 "block": "b-page",
 "title": "method-filesystem-en",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-filesystem-en.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-filesystem-en",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-filesystem-en"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-filesystem-en"
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
        "id": "FileSystemRepresentationforaBlock"
       },
       "content": [
        "File System Representation for a Block"
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM is a collection of ideas and methods, a *methodology*. Each company and each team may integrate it into an existing workflow gradually, finding out what works best for them."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Being able to navigate the code base quickly is crucial, when * a project is long-lived and under constant development"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "the development team consists of several people, grows and changes"
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Filenaming"
       },
       "content": [
        "File naming"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Blocksinonefile"
       },
       "content": [
        "Blocks in one file"
       ]
      },
      {
       "elem": "p",
       "content": [
        "I assume you&apos;ve got a web project and want to give BEM a try by using it here and there in your HTML and CSS."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Have a single file per each techonology you use (html, css, js) and put all block declarations together:"
       ]
      },
      "<pre>\nmyfacebook/\n  myfacebook.css\n  myfacebook.js\n  myfacebook.html\n</pre>",
      {
       "elem": "p",
       "content": [
        "Files ",
        {
         "tag": "tt",
         "content": [
          "myfacebook.css"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "myfacebook.js"
         ]
        },
        " contain all the CSS/JS codebase of the project and are linked from HTML as is."
       ]
      },
      {
       "elem": "p",
       "content": [
        "There is now process of building and optimizing such a files. It is the simplest case to start."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In fact, BEM is used only for CSS-classes naming."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Blocksinfiles"
       },
       "content": [
        "Blocks in files"
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: Когда весь CSS код блоков лежит в одном файле, то по этому файлу приходится всё время перемещаться."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: Если проект большой, делать это не удобно. TRANSLATE: Код блока легко искать, если он расположен в файлах, одноимённых ключевому слову блока."
       ]
      },
      "<pre>\nblocks/\n  head.css\n  menu.css\n\nall.css\n\nindex.html\nabout.html\n</pre>",
      {
       "elem": "p",
       "content": [
        "TRANSLATE: Файл ",
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
        "id": "TRANSLATENeobyazatelynoevotdelynyxfajlax"
       },
       "content": [
        "TRANSLATE: Не обязательное в отдельных файлах"
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: Если в ваших блоках есть элементы/модификаторы, которые используются не на всех страницах, TRANSLATE: можно вынести их реализацию в отдельные файлы, чтобы подключать только то, что нужно."
       ]
      },
      {
       "elem": "p",
       "content": [
        "TRANSLATE: При этом можно использовать такую схему расположения на файловой системе:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "TRANSLATE: Основной код блока размещён в файлах ",
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
              "TRANSLATE: Имя файла совпадает с именем блока"
             ]
            },
            {
             "elem": "li",
             "content": [
              "TRANSLATE: Техническая реализация блока размещена в файлах с соответствующими расширениями"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "TRANSLATE: Элементу соответствует файл ",
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
              "TRANSLATE: Имя файла совпадает с именем элемента"
             ]
            },
            {
             "elem": "li",
             "content": [
              "TRANSLATE: Техническая реализация элемента располагается в файлах с соответствующими расширениями"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "TRANSLATE: Модификатору соответствует файл ",
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
              "TRANSLATE: Имя файла содержит как имя модификатора, так и его тип"
             ]
            },
            {
             "elem": "li",
             "content": [
              "TRANSLATE: Техническая реализация модификатора размещается в файлах в этой директории"
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
        "TRANSLATE: Вы можете использовать другую схему отделения имени блока от имени элемента и модификатора."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "b",
         "content": [
          "Example"
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
        "File ",
        {
         "tag": "tt",
         "content": [
          "index.css"
         ]
        },
        " contains enlarged header but without the search form:"
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
        "And file ",
        {
         "tag": "tt",
         "content": [
          "about.css"
         ]
        },
        " contains header of the usual size and the search form:"
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
        "We could start using ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
         ]
        },
        " to build the project."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Eachblockinitsowndirectory"
       },
       "content": [
        "Each block in its own directory"
       ]
      },
      {
       "elem": "p",
       "content": [
        "There could be a task to reuse some blocks from a previous project in a new one."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We want the procedure of block reuse to be as simple as possible - like simply copying the files, or using partial checkout of a repository from a &quot;donor&quot; project."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In both cases it is useful to have all of the files under the same directory:"
       ]
      },
      "<pre>\nblocks/\n  menu/\n    menu.xsl\n    menu.js\n    menu.css\n</pre>",
      {
       "elem": "h3",
       "attrs": {
        "id": "Elementsmodifiersintheirowndirectories"
       },
       "content": [
        "Elements/modifiers in their own directories"
       ]
      },
      {
       "elem": "p",
       "content": [
        "When working on a project we might need to change a block at some point."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A manager could ask:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to change the color of the ",
          {
           "tag": "tt",
           "content": [
            "Current Menu Item"
           ]
          },
          " or"
         ]
        },
        {
         "elem": "li",
         "content": [
          "to make the ",
          {
           "tag": "tt",
           "content": [
            "Menu"
           ]
          },
          " react on hover"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "A developer could ask their colleague:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to help with ",
          {
           "tag": "tt",
           "content": [
            "Search Form"
           ]
          },
          " styling for IE"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "To understand where the relevant code is located, follow these (or similar) rules:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Block code is placed in a separate directory",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Directory name matches block name"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Implementation is placed under this directory"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Elements are placed in subdirectories under the block directory",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Directory name matches element name"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Implementation is placed under this directory"
             ]
            }
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Modifiers are placed in subdirectories under the block directory",
          {
           "elem": "ul",
           "content": [
            {
             "elem": "li",
             "content": [
              "Directory name matches modifier name"
             ]
            },
            {
             "elem": "li",
             "content": [
              "Implementation is placed under this directory"
             ]
            },
            {
             "elem": "li",
             "content": [
              "File name includes both key and value of the modifier (again, for programmatic access)"
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
        "You&apos;l be able to understand a block structure just from its folder structure, without even reading a single line of code. This is an unprecedented level of transparency, although it comes at a cost."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "b",
         "content": [
          "Example"
         ]
        },
        {
         "tag": "br"
        },
        " File structure of a ",
        {
         "tag": "tt",
         "content": [
          "Menu"
         ]
        },
        " block"
       ]
      },
      "<pre>\nmenu/\n  __item/\n    _state/\n      menu__item_state_current.css\n      menu__item_state_current.xsl\n    menu__item.css\n    menu__item.xsl\n  menu.css\n  menu.js\n  menu.xsl\n</pre>",
      {
       "elem": "p",
       "content": [
        "Maintaining such file structure manually is, quite obviously, not convenient. So we&apos;ve developed ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "BEM tools"
         ]
        },
        " to handle the burden. These tools help with creating the directory structure, placing files, generating placeholder content, etc."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Groupingblocksindirectories"
       },
       "content": [
        "Grouping blocks in directories"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Big internet portals often need to reuse the same blocks across different sites."
       ]
      },
      {
       "elem": "p",
       "content": [
        "There could be a task:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to create the same ",
          {
           "tag": "tt",
           "content": [
            "Footer"
           ]
          },
          " on ",
          {
           "tag": "i",
           "content": [
            "all the portal&apos;s sites"
           ]
          },
          " or"
         ]
        },
        {
         "elem": "li",
         "content": [
          "to create a ",
          {
           "tag": "i",
           "content": [
            "new project"
           ]
          },
          " using blocks from the existing sites"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Working for a web design agency often means that one has to use typical solutions for typical web pages."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A project manager could ask you:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to create an order page with a web form ",
          {
           "tag": "i",
           "content": [
            "as on the previous project"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "We have to do these tasks while, preferably, avoiding copying blocks around manually. So it&apos;s nice to have a repository of shared blocks that can be linked to a project. Blocks then should be united under a single directory for that."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Such a directory is usually called ",
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
          "E.g."
         ]
        }
       ]
      },
      "<pre>\nblocks/\n  foot/\n  head/\n  menu/\n  page/\n  search/\n</pre>",
      {
       "elem": "p",
       "content": [
        "That directory can be linked to another project straight from the version control system, so that we can make changes to shared blocks in a single location."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "LevelsofDefinition"
       },
       "content": [
        "Levels of Definition"
       ]
      },
      {
       "elem": "p",
       "content": [
        "If a group of blocks (united under one directory) is linked to a project directly (via a partial checkout, svn:externals, etc.), then every change committed for these blocks influences all projects."
       ]
      },
      {
       "elem": "p",
       "content": [
        "When developing a site based on an existing one we might want:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to enlarge the font in the ",
          {
           "tag": "tt",
           "content": [
            "Head"
           ]
          },
          " on site A without affecting site B"
         ]
        },
        {
         "elem": "li",
         "content": [
          "to add animation when showing a dropdown menu."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "To do so, we need to be able to define or redefine blocks in different technologies for a specific site only, or for certain pages only. It can be achieved using ",
        {
         "tag": "tt",
         "content": [
          "definition levels"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A ",
        {
         "tag": "tt",
         "content": [
          "definition level"
         ]
        },
        " is a set of blocks grouped in one directory."
       ]
      },
      "<div style=\"text-align:center;\">\n<img src=\"images/levels-schema.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "An implementation of every block from the library can be changed (or completely redefined) at project level."
       ]
      },
      "<div style=\"text-align:center;\">\n<img src=\"images/block-levels.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "From page-building process&apos; perspective:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "When building a page we can set a list of levels (directories) to use their blocks on\n   the page. E.g.,\n   ",
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
        "From the file structure point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "A project can have any number of levels. But only the levels that are evaluated during the build\n   will be present on the page. It is possible to specify different sets of definition levels\n   for different parts of the site."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "On the JavaScript side:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "We need to define dynamic behavior of a page in declarative style.\n   Final behavior is gathered from different definition levels. E.g.,"
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
        "From the viewpoint of a template engine:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "To be able not only to define but to redefine a template, one needs to\n   apply a preceding template implementation.",
          {
           "tag": "br"
          },
          "\n   E.g., for XSL:"
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
        "From the architectural point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "When developing a portal of several sites we can extract a block library that serves as one of the\n   definition levels for all the sites which are part of the portal. The blocks for a specific\n   site will form another level."
         ]
        },
        {
         "elem": "li",
         "content": [
          "The same repo can hold blocks of both desktop and mobile versions.",
          {
           "tag": "br"
          },
          "\n   Such a project will have the following levels: common, mobile, desktop.\n   Different combinations of these levels give the resulting implementation, required by specific pages."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-bl",
         "content": [
          "Open source block library bem-bl"
         ]
        },
        " is an example of having several definition levels in one repository."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BuildingaPage"
       },
       "content": [
        "Building a Page"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Working in terms of blocks means having a ",
        {
         "tag": "tt",
         "content": [
          "subject-matter abstraction"
         ]
        },
        ". This abstraction is for developers only, browsers will get a compiled version of the code."
       ]
      },
      {
       "elem": "p",
       "content": [
        "So we have ",
        {
         "tag": "tt",
         "content": [
          "code for people"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "code for browsers"
         ]
        },
        " - they are not the same."
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Programmers code blocks - browsers get the code for the whole page"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "To turn ",
        {
         "tag": "tt",
         "content": [
          "code for people"
         ]
        },
        " into ",
        {
         "tag": "tt",
         "content": [
          "code for browsers"
         ]
        },
        " we ",
        {
         "tag": "tt",
         "content": [
          "build"
         ]
        },
        " a page."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Building a page"
         ]
        },
        " means generating HTML, CSS, and JavaScript code from a page declaration (written in XML or JSON) by applying implementations of declared blocks."
       ]
      },
      {
       "elem": "p",
       "content": [
        "On the CSS side:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "All CSS files are combined into a single &quot;page&quot; CSS file",
          {
           "tag": "br"
          },
          "\n   Despite the fact that CSS for every block, element or modifier is stored in separate\n   files, we don&apos;t have to link these files to the page as-is. It is possible to\n   collect all the required CSS implementations in one file.",
          {
           "tag": "br"
          },
          "\n   This also solves the well-known &apos;number of imports&apos; issue in IE and decreases the number of HTTP requests.\n   For combining CSS we use ",
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
          "Browser gets minimized code",
          {
           "tag": "br"
          },
          "\n   When building CSS, we can minimize and optimize CSS code using the\n   ",
          {
           "block": "b-link",
           "url": "https://github.com/afelix/csso",
           "content": [
            "CSSO"
           ]
          },
          " utility, for example."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Each browser can get CSS code written especially for it",
          {
           "tag": "br"
          },
          "\n   It is also possible to divide CSS implementations for different browsers and deliver\n   only the code needed for each browser.",
          {
           "tag": "br"
          },
          "\n   ",
          {
           "block": "b-link",
           "url": "https://github.com/afelix/setochka",
           "content": [
            "setochka - currently in prototype"
           ]
          },
          " can be used for that."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the JavaScript point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Similarly to CSS, JavaScript files can be combined into one."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the template engine&apos;s point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Only needed templates are included",
          {
           "tag": "br"
          },
          "\n   Final set of templates that are used for displaying a page includes only the templates\n   for required blocks. This boosts template performance and reduces the likelihood of side effects."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the viewpoint of development process:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Robots serve people (not the other way around)",
          {
           "tag": "br"
          },
          "\n   Developer writes code as they sees fit. &quot;Robots&quot; take (some) care of performance by optimizing the\n   code (together with making it unreadable) when building a page."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "In terms of work organization:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Division of labor",
          {
           "tag": "br"
          },
          "\n   We have developers working on the core framework (compilers, tools, performance); library developers, who maintain\n   the block library; application developers, who develop sites using the framework."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "We use ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "BEM tools"
         ]
        },
        " to build pages."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Howtoautomatethebuildingprocess"
       },
       "content": [
        "How to automate the building process?"
       ]
      },
      {
       "elem": "p",
       "content": [
        "The usage of ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem tools"
         ]
        },
        " require to run several commands for each page whenever page input data or blocks implementation are changed. As a result of these commands you get CSS and JavaScript files for the page, page&apos;s template and, if you are developing static pages, HTML code of your page."
       ]
      },
      {
       "elem": "p",
       "content": [
        "To avoid running these commands manually we added ",
        {
         "tag": "tt",
         "content": [
          "bem make"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "bem server"
         ]
        },
        " commands to the ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
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
        " is a command to build project statically. It builds all the files which dependencies were changed since the last run of this command."
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
        " is a command to launch HTTP server, which build project files on the fly during handling of the requests. When the build finishes server serves just built files to the client."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Have a look at the ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools/#bem-make",
         "content": [
          "documentation"
         ]
        },
        " to learn more on this topic."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Readmore"
       },
       "content": [
        "Read more"
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
            "Definitions"
           ]
          }
         ]
        },
        {
         "elem": "li",
         "content": [
          "Filesystem organization"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "history/",
           "content": [
            "History"
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