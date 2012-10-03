({
 "block": "b-page",
 "title": "method-definitions-en",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-definitions-en.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-definitions-en",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-definitions-en"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-definitions-en"
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
        "id": "WhatisBEM"
       },
       "content": [
        "What is BEM?"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "BEM"
         ]
        },
        " stands for Block, Element, Modifier. The meaning of these terms will be described further in the article."
       ]
      },
      {
       "elem": "p",
       "content": [
        "One of the most common examples of a methodology in programming is Object-Oriented Programming. It&apos;s a programming paradigm embodied by many languages. In some ways, BEM is similar to OOP. It&apos;s a way of describing reality in code, a range of patterns, and a way of thinking about program entities regardless of programming languages being used."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We used BEM principles to create a set of front-end development techniques and tools, that allow us to build websites quickly and maintain them over a long time."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "UnifiedDataDomain"
       },
       "content": [
        "Unified Data Domain"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Imagine an ordinary website, like the one pictured below."
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/site.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "While developing such a site it is useful to mark out &quot;blocks&quot; of which the site consists."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, in this picture there are ",
        {
         "tag": "tt",
         "content": [
          "Head"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Main Layout"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "Foot"
         ]
        },
        " blocks. The ",
        {
         "tag": "tt",
         "content": [
          "Head"
         ]
        },
        " in turn consists of ",
        {
         "tag": "tt",
         "content": [
          "Logo"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Search"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "Auth block"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "Menu"
         ]
        },
        ". ",
        {
         "tag": "tt",
         "content": [
          "Main Layout"
         ]
        },
        " contains a ",
        {
         "tag": "tt",
         "content": [
          "Page Title"
         ]
        },
        " and a ",
        {
         "tag": "tt",
         "content": [
          "Text Block"
         ]
        },
        "."
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/site-marked.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Giving each part of the page a name is very useful when it comes to team communication."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A project manager could ask:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to make the ",
          {
           "tag": "tt",
           "content": [
            "Head"
           ]
          },
          " bigger or"
         ]
        },
        {
         "elem": "li",
         "content": [
          "to create a page without a ",
          {
           "tag": "tt",
           "content": [
            "Search"
           ]
          },
          " form in the ",
          {
           "tag": "tt",
           "content": [
            "Head"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "An HTML guy could ask a fellow JavaScript developer"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "to make ",
          {
           "tag": "tt",
           "content": [
            "Auth Block"
           ]
          },
          " animated, etc."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Let&apos;s now take a closer look at what constitutes BEM:"
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "Block"
       },
       "content": [
        "Block"
       ]
      },
      {
       "elem": "p",
       "content": [
        "A ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        " is an independent entity, a &quot;building block&quot; of an application. A block can be either simple or compound (containing other blocks)."
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
        " Search form block",
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
        "Element"
       ]
      },
      {
       "elem": "p",
       "content": [
        "An ",
        {
         "tag": "tt",
         "content": [
          "element"
         ]
        },
        " is a part of a block that performs a certain function. Elements are context-dependent: they only make sense in the context of the block they belong to."
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
        " An input field and a button are elements of the Search Block"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/search-block-marked.en.png\"/>\n</div>",
      {
       "elem": "h2",
       "attrs": {
        "id": "Meansofdescribingpagesandtemplates"
       },
       "content": [
        "Means of describing pages and templates"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Blocks and elements constitute page content. Besides simply being present on a page, their arrangement is also important."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Blocks (or elements) may follow each other in a certain order."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, a list of goods on a commerce website:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/goods-list.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "…or menu items:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/menu-items.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Blocks may also be contained inside other blocks."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, a ",
        {
         "tag": "tt",
         "content": [
          "Head Block"
         ]
        },
        " includes other blocks:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/head-marked.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Besides our building blocks we need a way to describe page layout in plain text. To do so, every block and element should have a keyword that identifies it."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A keyword designating a specific block is called ",
        {
         "tag": "tt",
         "content": [
          "block name"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, ",
        {
         "tag": "tt",
         "content": [
          "menu"
         ]
        },
        " can be a keyword for the ",
        {
         "tag": "tt",
         "content": [
          "Menu Block"
         ]
        },
        ", ",
        {
         "tag": "tt",
         "content": [
          "head"
         ]
        },
        " can be a keyword for the ",
        {
         "tag": "tt",
         "content": [
          "Head"
         ]
        },
        " block."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A keyword designating an element is called ",
        {
         "tag": "tt",
         "content": [
          "element name"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, each item in a menu is an element ",
        {
         "tag": "tt",
         "content": [
          "item"
         ]
        },
        " of the ",
        {
         "tag": "tt",
         "content": [
          "menu"
         ]
        },
        " block."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Block names must be unique within a project to unequivocally designate which block is being described. Only instances of the same block can have same names. In this case we say that one block is present on the page 2 (3, 4, …) times."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Element names must be unique within the scope of a block. An element can be repeated several times."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, menu items:"
       ]
      },
      "<div style=\"text-align:center\">\n<img src=\"images/menu-items.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "Keywords should be put in certain order. Any data format that supports nesting (XML, JSON) will do:"
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
        "In this example, ",
        {
         "tag": "tt",
         "content": [
          "b"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "e"
         ]
        },
        " namespaces separate block nodes from element nodes."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The same in JSON:"
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
        "Examples above show an object model with blocks and elements nested inside each other. This structure can also contain any number of custom data fields."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We call this structure ",
        {
         "tag": "tt",
         "content": [
          "BEM tree"
         ]
        },
        " (by analogy with DOM tree)."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Final browser markup is generated by applying template transformations (using XSL or JavaScript) to a BEM tree."
       ]
      },
      {
       "elem": "p",
       "content": [
        "If a developer needs to move a block to a different place on a page, he does so by changing the BEM tree. Templates generate the final view themselves."
       ]
      },
      {
       "elem": "p",
       "content": [
        "You can use any format to describe the BEM tree and any template engine."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We went with JSON as a page description format. It is then turned into HTML by a JS-based template engine BEMHTML."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BlockIndependence"
       },
       "content": [
        "Block Independence"
       ]
      },
      {
       "elem": "p",
       "content": [
        "As projects grow, blocks tend to be added, removed, or moved around the page. For example, you may want to swap the ",
        {
         "tag": "tt",
         "content": [
          "Logo"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "Auth Block"
         ]
        },
        " or to place the ",
        {
         "tag": "tt",
         "content": [
          "Menu"
         ]
        },
        " under the ",
        {
         "tag": "tt",
         "content": [
          "Search Block"
         ]
        },
        "."
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/head.png\"/>\n</div>",
      "<div style=\"text-align: center\">\n<img src=\"images/head-changed.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "To make this process easier, blocks must be ",
        {
         "tag": "tt",
         "content": [
          "independent"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "An ",
        {
         "tag": "tt",
         "content": [
          "independent"
         ]
        },
        " block is implemented in a way that allows arbitrary placement — anywhere on the page, including nesting inside another block."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "IndependentCSS"
       },
       "content": [
        "Independent CSS"
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the CSS point of view it means that"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "A block (or an element) must have a unique &quot;name&quot; (a CSS class) that could be used in a CSS rule."
         ]
        },
        {
         "elem": "li",
         "content": [
          "HTML elements must not be used in CSS selectors (",
          {
           "tag": "tt",
           "content": [
            ".menu td"
           ]
          },
          ") as such selectors are inherently\n   not context-free."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Cascading selectors should be avoided."
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "NamingforindependentCSSclasses"
       },
       "content": [
        "Naming for independent CSS classes"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Here&apos;s one of the possible CSS class naming scheme:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "CSS class for a block coincides with its ",
          {
           "tag": "tt",
           "content": [
            "block name"
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
          "CSS class for an element is a ",
          {
           "tag": "tt",
           "content": [
            "block name"
           ]
          },
          " and an ",
          {
           "tag": "tt",
           "content": [
            "element name"
           ]
          },
          " separated\n by some character(s)"
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
        "It is necessary to include block name into a CSS class for an element to minimize cascading."
       ]
      },
      {
       "elem": "p",
       "content": [
        "It is also important to use separators consistently to allow the tools and helpers (described further) unambiguous programmatic access to the elements."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We use hyphen to separate words in long names (for example, ",
        {
         "tag": "tt",
         "content": [
          "block-name"
         ]
        },
        ") and two underscores to separate the name of the block form the name of the element (",
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
        "But you can use any other separators for it."
       ]
      },
      {
       "elem": "p",
       "content": [
        "E.g.:"
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
          " or"
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
        "id": "Independenttemplates"
       },
       "content": [
        "Independent templates"
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the template engine&apos;s perspective, block independence means that:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Blocks and elements must be described in the input data",
          {
           "tag": "br"
          },
          "\n   Blocks (or elements) must have unique &quot;names&quot; to make things like &quot;",
          {
           "tag": "tt",
           "content": [
            "Menu"
           ]
          },
          " should be\n   placed here&quot; expressible in our templates."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Blocks may appear anywhere in a BEM tree"
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Independenttemplatesforblocks"
       },
       "content": [
        "Independent templates for blocks"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Coming upon a block in a template, the template engine should be able to unambiguously transform it into HTML. Thus, every block should have a template for that."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, a template can look like this in XSL:"
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
        "We are gradually discarding XSLT in our products in favor of our own JavaScript-based template engine ",
        {
         "block": "b-link",
         "url": "https://github.com/veged/xjst",
         "content": [
          "XJST"
         ]
        },
        ". This template engine absorbs everything we like about XSLT (we are fans of declarative programming), and implements it with JavaScript&apos;s productivity on either client or server side."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We write our templates using a domain-specific language called BEMHTML, which is based on XJST. ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=992",
         "content": [
          "The main ideas of BEMHTML"
         ]
        },
        " are published in the BEM club on Ya.Ru (in Russian)."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-bl/tree/master/blocks-common/i-bem/__html",
         "content": [
          "BEMHTML"
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BlocksReiteration"
       },
       "content": [
        "Blocks Reiteration"
       ]
      },
      {
       "elem": "p",
       "content": [
        "The second ",
        {
         "tag": "tt",
         "content": [
          "Menu Block"
         ]
        },
        " can occur in the ",
        {
         "tag": "tt",
         "content": [
          "Foot Block"
         ]
        },
        " of a site. Or, a ",
        {
         "tag": "tt",
         "content": [
          "Text Block"
         ]
        },
        " can turn into two, separated by an advertisement."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Even if a block was developed as a singular unit, the same one can appear on a page at any moment."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In CSS related terms, it means:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "ID-based CSS selectors must not be used",
          {
           "tag": "br"
          },
          "\n   Only class selectors satisfy our non-uniqueness requirement."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "On the JavaScript side it means:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Blocks with similar behavior are detected unequivocally: they have the same CSS classes",
          {
           "tag": "br"
          },
          "\n   Using CSS class selectors allow picking all blocks with a given name to apply the required\n   dynamic behavior."
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "ModifiersforBlocks"
       },
       "content": [
        "Modifiers for Blocks"
       ]
      },
      {
       "elem": "p",
       "content": [
        "We often need to create a block very similar to an existing one, but with slightly altered its appearance or behavior."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Let&apos;s say, we have a task:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Add another ",
          {
           "tag": "tt",
           "content": [
            "Menu"
           ]
          },
          " in the ",
          {
           "tag": "tt",
           "content": [
            "Footer"
           ]
          },
          " with a ",
          {
           "tag": "i",
           "content": [
            "different layout"
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
        "To avoid developing another block that is only minimally different from an existing one, we can use a ",
        {
         "tag": "tt",
         "content": [
          "modifier"
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
          "modifier"
         ]
        },
        " is a property of a block or an element that alters its look or behavior."
       ]
      },
      {
       "elem": "p",
       "content": [
        "A modifier has a name and a value. Several modifiers can be used at once."
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
        " A block modifier specifies background color"
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/search-background.png\"/>\n</div>",
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
        " An element modifier changes the look of the &quot;current&quot; item"
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/menu-current-item.png\"/>\n</div>",
      {
       "elem": "h3",
       "attrs": {
        "id": "Fromtheinputdatapointofview"
       },
       "content": [
        "From the input data point of view"
       ]
      },
      {
       "elem": "p",
       "content": [
        "In a BEM tree, modifiers are properties of an entity that describes a block or an element."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, they can be attribute nodes in XML:"
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
        "The same expressed in JSON:"
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
        "id": "FromtheHTMLCSSpointofview"
       },
       "content": [
        "From the HTML/CSS point of view"
       ]
      },
      {
       "elem": "p",
       "content": [
        "A modifier is an additional CSS class for a block or an element."
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
       "elem": "h2",
       "attrs": {
        "id": "Elementmodifiers"
       },
       "content": [
        "Element modifiers"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Element modifiers are implemented in the same fashion."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Again, when writing CSS by hand, it is very important to use separators consistently for programmatic access."
       ]
      },
      {
       "elem": "p",
       "content": [
        "E.g., current menu item can be marked with a modifier:"
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
        "Which could be represented in HTML as follows:"
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
        "Or to make menu classes independent of the implementation details of its layout:"
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
        "id": "SubjectMatterAbstraction"
       },
       "content": [
        "Subject-Matter Abstraction"
       ]
      },
      {
       "elem": "p",
       "content": [
        "When many people work on a project they should agree on a data domain and use it when naming their blocks and elements."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, a ",
        {
         "tag": "tt",
         "content": [
          "Tag Cloud"
         ]
        },
        " block is always named ",
        {
         "tag": "tt",
         "content": [
          "tags"
         ]
        },
        ". Each of its elements is a ",
        {
         "tag": "tt",
         "content": [
          "tag"
         ]
        },
        ". This convention spreads across all languages: CSS, JavaScript, XSL, etc."
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the development process&apos; point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "All participants operate on the same terms"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "From the CSS point of view:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "CSS for blocks and elements can be written in a pseudo language that compiles\n   down to CSS according to the naming convention."
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
        "On the JavaScript side:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Instead of using class selectors directly to find DOM elements, a special helper\n   library may be used:"
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
        "The naming convention for CSS classes of blocks and elements can change in the course of time. Using special JavaScript functions to access blocks and elements and to work with their modifiers makes it possible to change only these functions if the naming convention changes."
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
        "The code above is abstract. In real life we use the JavaScript core of ",
        {
         "tag": "tt",
         "content": [
          "i-bem"
         ]
        },
        " block from the ",
        {
         "tag": "tt",
         "content": [
          "bem-bl"
         ]
        },
        " block library: ",
        {
         "block": "b-link",
         "url": "http://bem.github.com/bem-bl/sets/common-desktop/i-bem/i-bem.en.html",
         "content": "http://bem.github.com/bem-bl/sets/common-desktop/i-bem/i-bem.en.html"
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Blocksconsistency"
       },
       "content": [
        "Blocks consistency"
       ]
      },
      {
       "elem": "p",
       "content": [
        "A site has a ",
        {
         "tag": "tt",
         "content": [
          "Button"
         ]
        },
        " block with certain dynamic behavior."
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/button.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "When a block is hovered, it changes its appearance."
       ]
      },
      "<div style=\"text-align: center\">\n<img src=\"images/button-cursor.png\"/>\n</div>",
      {
       "elem": "p",
       "content": [
        "A manager could ask to use the same button on another page."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Having a CSS implementation of a block is not enough. Reusing a block also means reusing its behavior, described in JavaScript."
       ]
      },
      {
       "elem": "p",
       "content": [
        "So a block must &quot;know&quot; everything about itself. To implement a block we describe its appearance and behavior in all technologies being used - we call that ",
        {
         "tag": "tt",
         "content": [
          "multilingualism"
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
          "Multilingual"
         ]
        },
        " presentation is a description of a block in all the programming languages (techs) that are necessary to implement the view and the functionality of a block."
       ]
      },
      {
       "elem": "p",
       "content": [
        "To have a block present on a page as a UI element we need to implement it in the following techs:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Templates (XSL, TT2, JavaScript, etc), which turn block declarations into HTML code"
         ]
        },
        {
         "elem": "li",
         "content": [
          "CSS that describes appearance of the block"
         ]
        },
        {
         "elem": "li",
         "content": [
          "A JavaScript implementation for the block, if a block has dynamic behavior"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Images"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Documentation"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Everything that constitutes a block is a block technology."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Realexamples"
       },
       "content": [
        "Real examples"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "http://company.yandex.ru",
         "content": [
          "Yandex"
         ]
        },
        " is a large (mostly Russian) company that use BEM methodology to develop its services."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM methodology does not request you to use certain framework. You also don&apos;t have to use BEM for all the technologies you have on your pages (but that would be the most efficient)."
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "block": "b-link",
         "url": "http://www.yandex.ru/all",
         "content": [
          "All the services of Yandex"
         ]
        },
        " have BEM in their CSS and JavaScript code and XSL templates of the pages. E.g.,"
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
            "Yandex.Maps"
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
            "Yandex.Images"
           ]
          },
          {
           "tag": "br"
          },
          "\n   This is a service for searching images in the Internet."
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://video.yandex.ru/#search?text=yac%202011",
           "content": [
            "Yandex.Video"
           ]
          },
          {
           "tag": "br"
          },
          "\n   This is a service for both hosting and searching images."
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "http://auto.yandex.ru/",
           "content": [
            "Yandex.Auto"
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
            "Turkish Yandex"
           ]
          }
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Some services don&apos;t use XSL templates and build their pages with our newest template product, ",
        {
         "tag": "tt",
         "content": [
          "bemhtml"
         ]
        },
        " template engine which was mentioned above. These are the following services:"
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
            "Yandex Search"
           ]
          },
          {
           "tag": "br"
          },
          "\n   or ",
          {
           "block": "b-link",
           "url": "http://yandex.com/yandsearch?text=%22What+is+BEM%3F%22+front-end&amp;lr=213",
           "content": [
            "Yandex Search in English"
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
            "Mobile Apps Search"
           ]
          },
          {
           "tag": "br"
          },
          "\n   This site is to look under smartphones."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "There are also other companies that use BEM methodology."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For example, guys in ",
        {
         "block": "b-link",
         "url": "http://mail.ru",
         "content": [
          "Mail.ru"
         ]
        },
        " partly use BEM for their services. Some blocks on their pages are BEM-based in terms of CSS code. They also have their own C++ template engine and write block templates according to the methodology."
       ]
      },
      {
       "elem": "p",
       "content": [
        "More examples:"
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
            "Rambler.News"
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
        "You may also be interested in sites that use ",
        {
         "block": "b-link",
         "url": "http://bem.github.com/bem-bl/index.ru.html",
         "content": [
          "bem-bl"
         ]
        },
        " block library:"
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
            "BEM based web form with JZ validation"
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
          "\n   Source code is hosted at GitHub: ",
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
          "Definitions"
         ]
        },
        {
         "elem": "li",
         "content": [
          {
           "block": "b-link",
           "url": "filesystem/",
           "content": [
            "Filesystem organization"
           ]
          }
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