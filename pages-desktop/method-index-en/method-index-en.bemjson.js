({
 "block": "b-page",
 "title": "method-index-en",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-index-en.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-index-en",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-index-en"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-index-en"
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
       "elem": "p",
       "content": [
        "Usually the process of development of a website is based on the assumption, that design and technical requirements will not change during development."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Designer, front-end developer and programmer all work in their field, often without interfering with each other:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Designer creates a site design in the form of design layout"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Front-end developer create static HTML/CSS pages based on the design layout"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Programmer creates templates from these static pages and then writes some JavaScript"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Such an approach works well only in a case if the website design remains the same all the time of his life and the changes only add more content."
       ]
      },
      {
       "elem": "p",
       "content": [
        "But usually that is not happening, the website begins to live its own life and is constantly developing. The design of the pages is gradually changing, new pages and new blocks are being added on them."
       ]
      },
      {
       "elem": "p",
       "content": [
        "If the source code of the website is not following a defined structure, it its development is not based on fixes rules, then it gradually becomes more and more difficult to develop such a website. The website code gets beyond the control of its developers."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In a BEM-methodology all people taking part in the development of the website are working with a single codebase and are using the same terms to communicate, the same language:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Design of the website can change at any time, we must be ready for this"
         ]
        },
        {
         "elem": "li",
         "content": [
          "HTML/CSS code is developing together with the design, ready to its changes"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Programmer and front-end developers are working together on the website codebase,\n     contributing to the each other code"
         ]
        }
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "Theconditionsofthemethodologyemergence"
       },
       "content": [
        "The conditions of the methodology emergence"
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM-methodology was developed at ",
        {
         "block": "b-link",
         "url": "http://company.yandex.com",
         "content": [
          "Yandex"
         ]
        },
        " in the development of a large number of web services to solve these tasks:"
       ]
      },
      {
       "elem": "ul",
       "content": [
        {
         "elem": "li",
         "content": [
          "Fast-to-develop, long-lived projects",
          {
           "tag": "br"
          },
          "\n   It should be possible to develop and launch the first version quickly with an\n   architecture that helps maintain it in the long run."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Numerous people working on a project",
          {
           "tag": "br"
          },
          "\n   We should be able to organize work efficiently in teams of 2 or more developers."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Team scalability",
          {
           "tag": "br"
          },
          "\n   Adding new people to a product team should improve its productivity. We need to be\n   able to assign new members to a team without a steep learning curve.",
          {
           "tag": "br"
          },
          "\n   Code should be well-structured for a project to remain maintainable over time and\n   team changes."
         ]
        },
        {
         "elem": "li",
         "content": [
          "Code reuse",
          {
           "tag": "br"
          },
          "\n   To maintain UI consistency and minimize development effort on typical interface\n   components, those components have to be easily reusable.\n   The source code should not have contextual dependency on the other code, it should be\n   easy to move that code to another place."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "For years we kept looking for solutions to our problems, and at one point they became ",
        {
         "tag": "tt",
         "content": [
          "BEM methodology"
         ]
        },
        "."
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