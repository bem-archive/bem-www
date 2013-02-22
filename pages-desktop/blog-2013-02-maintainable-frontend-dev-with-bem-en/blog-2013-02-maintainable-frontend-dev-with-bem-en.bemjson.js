({
 "block": "b-page",
 "title": "Maintainable frontend dev with BEM",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "/bundles-desktop/inner/_inner.css"
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "content": ""
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "content": ""
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
    {
     "block": "lang-switcher",
     "content": [
      "English | ",
      {
       "block": "b-link",
       "url": "//ru.bem.info/blog/2013/02/maintainable-frontend-dev-with-bem/",
       "content": "Русский"
      }
     ]
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
         "level": "first"
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
        "content": {
         "block": "b-link",
         "url": "/tools/",
         "content": "Tools"
        }
       },
       {
        "elem": "item",
        "elemMods": {
         "state": "parent"
        },
        "content": {
         "block": "b-link",
         "url": "/blog/2013/02/bem-goes-to-india/",
         "content": "Blog"
        }
       },
       {
        "elem": "item",
        "content": {
         "block": "b-link",
         "url": "/articles/start-with-project-stub/",
         "content": "Articles"
        }
       }
      ]
     },
     {
      "block": "b-menu-horiz",
      "mods": {
       "layout": "normal"
      },
      "mix": [
       {
        "block": "nav",
        "mods": {
         "level": "second"
        }
       }
      ],
      "js": false,
      "content": [
       {
        "elem": "item",
        "elemMods": {
         "state": "current"
        },
        "content": "Maintainable frontend dev"
       },
       {
        "elem": "item",
        "content": {
         "block": "b-link",
         "url": "/blog/2013/02/bem-goes-to-india/",
         "content": "BEM goes to India"
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
    null,
    {
     "block": "b-text",
     "mods": {
      "type": "global"
     },
     "content": "<h1>Maintainable Frontend Development with BEM at MetaRefresh 2013 in Bangalore by Varvara Stepanova</h1>\n<iframe width=\"560\" height=\"315\" frameborder=\"0\" src=\"http://static.video.yandex.ru/lite/ya-events/lydx75hks7.7039/\" allowfullscreen></iframe>\n\n<iframe src=\"http://www.slideshare.net/slideshow/embed_code/16700315\" width=\"427\" height=\"356\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px\" allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe>\n"
    }
   ]
  },
  {
   "block": "footer"
  },
  {
   "block": "metrika"
  }
 ]
})