({
 "block": "b-page",
 "title": "Инструменты для работы в предметной области БЭМ",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_tools-index-ru.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_tools-index-ru",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso"
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
       },
       {
        "elem": "item",
        "elemMods": {
         "state": "current"
        },
        "content": "Tools"
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
        "id": "Instrumenty"
       },
       "content": [
        "Инструменты"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "bemtools"
       },
       "content": [
        "bem-tools"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools/blob/master/README.ru.md#%D0%91%D0%AD%D0%9C-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B",
         "content": [
          "bem-tools"
         ]
        },
        " это инструмент для работы с файлами, написанными по БЭМ-методу: создание сущностей, разработческий сервер, сборка финального runtime."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Optimizatory"
       },
       "content": [
        "Оптимизаторы"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "CSSO"
       },
       "content": [
        "CSSO"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/css/csso/#readme",
         "content": [
          "CSSO"
         ]
        },
        " (CSS Optimizer) является минимизатором CSS, выполняющим как минимизацию без изменения структуры, так и структурную минимизацию с целью получить как можно меньший текст."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "SVGO"
       },
       "content": [
        "SVGO"
       ]
      },
      {
       "elem": "p",
       "content": [
        "SVGO (SVGO Optimizer) — это инструмент для оптимизации векторной графики в формате SVG, написанный на Node.js."
       ]
      },
      {
       "elem": "p",
       "content": [
        "SVG файлы, особенно экспортированные из различных редакторов, содержат много избыточной и бесполезной информации, комментариев, скрытых элементов и другой мусор, удаление которого безопасно и не влияет на конечный результат рендеринга."
       ]
      },
      {
       "elem": "p",
       "content": [
        "SVGO имеет архитектуру, в которой практически каждая оптимизация является отдельным плагином, и вы легко можете добавить свой собственный."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Rabotasfajlami"
       },
       "content": [
        "Работа с файлами"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "borschik"
       },
       "content": [
        "borschik"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Расширяемый сборщик файлов ",
        {
         "block": "b-link",
         "url": "https://github.com/veged/borschik/",
         "content": [
          "borschik"
         ]
        },
        " может использоваться для сборки текстовых файлов из кусочков. Например, для сборки статических файлов веб-страниц (CSS, JS, etc)."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "setochka"
       },
       "content": [
        "setochka"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/afelix/setochka",
         "content": [
          "Сеточка"
         ]
        },
        " — инструмент для выделения CSS-свойств исходного CSS в отдельные файлы. Также может использоваться для удаления этих свойств без записи."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "ParseryYazyki"
       },
       "content": [
        "Парсеры / Языки"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "OmetaJS"
       },
       "content": [
        "OmetaJS"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/veged/ometa-js#ometajs-",
         "content": [
          "OMetaJS"
         ]
        },
        " is a JavaScript implementation of OMeta, an object-oriented language for pattern matching."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This is a Node.js module for developing and using such pattern matching grammars."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "XJST"
       },
       "content": [
        "XJST"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/veged/xjst#extensible-javascript-transformations-",
         "content": [
          "XJST"
         ]
        },
        " is a DSL for universal data transformations with compiler written on top of the node.js and ometajs and output code working in any browser or on server-side."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Shmakowiki"
       },
       "content": [
        "Shmakowiki"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/veged/shmakowiki",
         "content": [
          "Shmakowiki"
         ]
        },
        " is yet another wiki dialect, inspired by WackoWiki and WikiCreole."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Gonzales"
       },
       "content": [
        "Gonzales"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/css/gonzales",
         "content": [
          "Gonzales"
         ]
        },
        " — быстрый парсер CSS."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Быстрый парсер CSS, основанный на идеологии PEG. На данный момент производит AST, совместимый с CSSP, но в будущем будет расширен для поддержки других форматов."
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