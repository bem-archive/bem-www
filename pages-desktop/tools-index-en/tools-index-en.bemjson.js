({
 "block": "b-page",
 "title": "BEM Tools",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_tools-index-en.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_tools-index-en",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "BEM is abbreviation for Block-Element-Modifier. It's a way to write code which is easy to support and develop."
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "bem, block, element, modifier, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso"
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
        "id": "Tools"
       },
       "content": [
        "Tools"
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
         "url": "https://github.com/bem/bem-tools/blob/master/README.md#bem-tools-",
         "content": [
          "bem-tools"
         ]
        },
        " is a toolkit to work with files based on BEM methodology: create entities, dev server, build final runtime."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Optimizers"
       },
       "content": [
        "Optimizers"
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
        " (CSS Optimizer) is a CSS minimizer unlike others."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In addition to usual minification techniques it can perform structural optimization of CSS files, resulting in smaller file size compared to other minifiers."
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
        {
         "block": "b-link",
         "url": "http://deepsweet.github.com/svgo/",
         "content": [
          "SVGO"
         ]
        },
        " (SVG Optimizer) is a NodeJS-based tool for optimizing SVG vector graphics files."
       ]
      },
      {
       "elem": "p",
       "content": [
        "SVG files, especially exported from various editors, usually contains a lot of redundant and useless information such as editor metadata, comments, hidden elements and other stuff that can be safely removed without affecting SVG rendering result."
       ]
      },
      {
       "elem": "p",
       "content": [
        "SVGO has a plugin-based architecture, so almost every optimization is a separate plugin, and you can easily add your own."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "TRANSLATErabotasfajlami"
       },
       "content": [
        "TRANSLATE: работа с файлами"
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
        {
         "block": "b-link",
         "url": "https://github.com/veged/borschik/",
         "content": [
          "Borschik"
         ]
        },
        " is a extendable builder for text-based file formats. It&apos;s main purpose is the assembly of static files for web projects (CSS, JS, etc.)."
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
          "Setochka"
         ]
        },
        " is a tool to extract properties of the CSS style in separate files."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Can also be used to remove those properties without storing them in files."
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
        " — fast CSS parser."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Fast CSS parser, based on PEG ideology. At the moment it produces CSSP compatible AST, but will be extended to support other formats."
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