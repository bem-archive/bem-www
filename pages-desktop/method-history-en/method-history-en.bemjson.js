({
 "block": "b-page",
 "title": "method-history-en",
 "favicon": "/favicon.ico",
 "head": [
  {
   "elem": "css",
   "url": "_method-history-en.css",
   "ie": false
  },
  {
   "elem": "css",
   "url": "_method-history-en",
   "ie": true
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "description",
    "value": "method-history-en"
   }
  },
  {
   "elem": "meta",
   "attrs": {
    "name": "keywords",
    "value": "method-history-en"
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
        "id": "TheHistoryofBEM"
       },
       "content": [
        "The History of BEM"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Once upon a time, in a distant country far-far away, an IT company named Yandex started developing web search and affiliated services. Time went by and services were growing, and more and more frontend developers put their tireless efforts into improving the ecosystem of Yandex."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Great things they did, and amazing tools they built, making their developers&apos; lives easier, and times now have come to share that knowledge with the community, to embrace the magic power of Open Source and benefit all good people around."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This article tells about Yandex frontend developers constantly revising and improving the way they build web pages. Frontend developers are well known for their enormous curiosuty (that often brings innovation) and their remarkable lazyness that makes them devise sophisticated systems to save precious time, to unify and automate everything."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This is how many exciting things were born into life, but now let&apos;s travel back in time to 2005 and sneak a peek over a shoulder of a really-really-busy Yandex frontend developer, and thus see..."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "WhereItAllBegan"
       },
       "content": [
        "...Where It All Began"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Back in 2005, the focus was still petty much on the server side of things. From frontender&apos;s perspective, a typical Yandex project was a set of static HTML pages that served as a base reference for creating advanced templates like XSL stylesheets."
       ]
      },
      {
       "elem": "p",
       "content": [
        "These pages were kept in a separate folder and looked like this after a checkout:"
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
        "There was a static HTML file for each page, with all the CSS pushed into a single stylesheet, ",
        {
         "tag": "tt",
         "content": [
          "project.css"
         ]
        },
        ", and all Javascript placed in a single ",
        {
         "tag": "tt",
         "content": [
          "project.js"
         ]
        },
        "; both files were shared between project pages."
       ]
      },
      {
       "elem": "p",
       "content": [
        "At those times, JavaScript was only sparsely applied to some controls, so all the interaction magic for the whole project could fit comfortably into a single small file."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Images were placed into a separate folder, as they were numerous. With IE 5 roaming in the wild and no CSS3, images were used for all sorts of eye-candy, even for creating rounded corners (although none of the younger web developers would probably believe me :-",
        "",
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "To keep some structure, style definitions for different page sections were separated using plain CSS comments like this:"
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
        "Both IDs and classnames were used in the HTML markup."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Static HTML was manually copied into production XSL stylesheets, and all changes were synced two-way, manually."
       ]
      },
      {
       "elem": "p",
       "content": [
        "That was hard, and even when it wasn&apos;t hard, it was dull."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "MidScaleProjects"
       },
       "content": [
        "Mid-Scale Projects"
       ]
      },
      {
       "elem": "p",
       "content": [
        "At the beginning of 2006, the first version of Yandex.Music had been under heavy development. Multiple pages, each unlike the other, didn&apos;t fit well into familiar simplistic concepts."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Dozens of CSS classes you had to invent meaningful names for, a growing number of unintentional dependencies spread along the project — all that had been calling for a better solution."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Typical piece of CSS code from those days:"
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
        "See that long cascade rules are used throughout the code."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Have another look:"
       ]
      },
      {
       "block": "ohl",
       "mods": {
        "lang": "xml"
       },
       "content": [
        "    /* Background images (begin) */\n        #foot div\n        {\n            height: 71px;\n            background: transparent url(../i/foot-1.png) 4% 50% no-repeat;\n        }\n\n        #foot div div\n        {\n            background-position: 21%;\n            background-image: url(../i/foot-2.png);\n        }\n\n        #foot div div div\n        {\n            background-position: 38%;\n            background-image: url(../i/foot-3.png);\n        }\n\n        #foot div div div div\n        {\n            background-position: 54%;\n            background-image: url(../i/foot-4.png);\n        }\n\n        #foot div div div div div\n        {\n            background-position: 71%;\n            background-image: url(../i/foot-5.png);\n        }\n\n        #foot div div div div div div\n        {\n            background-position: 87%;\n            background-image: url(../i/foot-6.png);\n        }\n    /* Background images (end) */"
       ]
      },
      {
       "elem": "p",
       "content": [
        "See that ",
        {
         "tag": "tt",
         "content": [
          "id"
         ]
        },
        " and tag names selectors are used in many rules."
       ]
      },
      {
       "elem": "p",
       "content": [
        "At the same time, even bigger project was started ",
        {
         "block": "b-link",
         "url": "http://wow.yandex.ru",
         "content": [
          "Yaru"
         ]
        },
        " — a blogging platform, a place for people to interact, to share, to read and to engage."
       ]
      },
      {
       "elem": "p",
       "content": [
        "There were dozens of various pages to support, and with the old-fashioned approach the code was running out of control on many levels."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "BlocksToTheRescue"
       },
       "content": [
        "Blocks To The Rescue"
       ]
      },
      {
       "elem": "p",
       "content": [
        "We needed to specify a data domain for managing page interface objects. This was a methodology thing, we needed to put more clarity into the way we work with concepts like ",
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
        "For a typical web page of a Yandex project, HTML structure and its CSS styles were still the focus of our development efforts, and JavaScript was understood as a supplementary technology."
       ]
      },
      {
       "elem": "p",
       "content": [
        "For easier maintenance of HTML/CSS for many different components, a new term was invented: ",
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
        "In most cases, any distinct page element (either complex or simple) may be seen as a block. Then its HTML container gets a unique CSS class, which is also used as a block name."
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS classes for blocks got prefixes (",
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
        ") to provide sort of a namespace emulation in CSS."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The naming convention itself was changed later, here&apos;s the initial list explained:"
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
          "\n   an independent block, placed on a page wherever you need it"
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
          "\n   a control (an independent block) with a JavaScript object bound to it"
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
          "\n   a global definition, used sparingly and always defined for a specific, unique reason;\n   the number of these definitions kept at a minimum."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "Some suffixes were employed as well, e.g.:"
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
          "\n   style rule to be applied with JavaScript turned off. The onload callback may contain an ",
          {
           "tag": "tt",
           "content": [
            "init()"
           ]
          },
          "\n   function call that removes these suffixes from all objects, thus semantically marking them\n   up as &quot;JavaScript-enabled&quot;."
         ]
        }
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
        "In an HTML container forming a block, some nodes get a distinct CSS classname. This not only facilitates the creation of tagname-independent style rules, but also assigns semantically meaningful roles to each node. Such inner nodes are called &quot;block elements&quot;, or simply &quot;elements&quot;."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The core distinction between a block and an element is the element&apos;s inability to exist out of its parent block&apos;s context. As long as you cannot detach something from a block, it&apos;s an element; detachable elements (probably) should become blocks themselves."
       ]
      },
      {
       "elem": "p",
       "content": [
        "At first, elements could have been defined only inside their parent block&apos;s container; later, a technique was provided to place some elements outside and still keep a block consistent."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In stylesheets, elements with lots of CSS got extra indentation and were wrapped in comments:"
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
        "id": "ProjectFileStructureEvolves"
       },
       "content": [
        "Project File Structure Evolves"
       ]
      },
      {
       "elem": "p",
       "content": [
        "At Yandex, a frontend developers usually supports more than one project."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Switching between different repositories and various branches is easier when all projects use the same (or very similar) file structure."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Granularity is another requirement as it provides more flexibility for version control systems and helps avoid conflicts during concurrent development."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This led us to a more unified structure."
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS, JavaScript, and image files reside in separate folders."
       ]
      },
      {
       "elem": "p",
       "content": [
        "JavaScript was employed more and more daily, thus the addition of optional components and libraries."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Typical file structure:"
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
        "MSIE-specific hacks could have gone into the main CSS file (",
        {
         "tag": "tt",
         "content": [
          "yaru.css"
         ]
        },
        ") if they were in compliance with the CSS standards:"
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
        "Non-valid workarounds were put in a standalone ",
        {
         "tag": "tt",
         "content": [
          "yaru-ie.css"
         ]
        },
        " (loaded with IE-only conditional comments)."
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
        "id": "BuildingUpAFrameworkTheBeginning"
       },
       "content": [
        "Building Up A Framework: The Beginning"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Designing similar projects eventually leads to re-creating the same blocks over and over again."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Yandex is a portal having more than 100 services sharing the same corporate style, so careless copy/paste doesn&apos;t work really well on this scale."
       ]
      },
      {
       "elem": "p",
       "content": [
        "So, to have something to begin with, we had a small compilation of reusable components, which inside Yandex was referred to as &quot;common blocks library&quot;, or simply &quot;the Common&quot;."
       ]
      },
      {
       "elem": "p",
       "content": [
        "First page fragments to be unified were: header, footer and some typographic CSS definitions."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The corresponding files were hosted on an internal dedicated server (",
        {
         "tag": "b",
         "content": [
          "common.cloudkill.yandex.ru"
         ]
        },
        " in the listings below)."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This was the very beginning of our unified framework."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Styles could be imported directly from that server:"
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
        "Obviousy, too many imports, page loads slowly! So, we decided to pre-compile styles (and later, JS files) before deployment."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The compilation replaces ",
        {
         "tag": "tt",
         "content": [
          "@import"
         ]
        },
        " directives with the actual contents of external files (this is called ",
        {
         "tag": "tt",
         "content": [
          "inlining"
         ]
        },
        ") and performs more optimizations, e.g. unrequired to browser whitespaces and comments."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Our internal inlining tool evolved from a simple wrapper perl script into an open source project ",
        {
         "block": "b-link",
         "url": "https://github.com/veged/borschik",
         "content": [
          "borschik"
         ]
        },
        "; try it out!"
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "IndependentBlocksAsaConcept"
       },
       "content": [
        "Independent Blocks As a Concept"
       ]
      },
      {
       "elem": "p",
       "content": [
        "By the fall of 2007, our everyday practice got some theory behind it."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The Independent Block concept, which was by that time the basis of our HTML layouts, was featured at the ClientSide&apos;2007 conference in Moscow, Russia."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In that presentation, the first attempt to define a ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        " has been made."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "BlocksTheDeclarationofIndependence"
       },
       "content": [
        "Blocks: The Declaration of Independence"
       ]
      },
      {
       "elem": "p",
       "content": [
        "In our attempt to produce a formal (in fact, semi-formal) declaration of ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        ", the following 3 principles were highlighted:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Only classnames (not IDs) should be used to describe styles;"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Each block&apos;s classname has a prefix;"
         ]
        },
        {
         "elem": "li",
         "content": [
          "Any CSS rules except ones prefixed with g- must belong to a block."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "As soon as unique IDs are dropped, the same block can be used on the same page more than once. This also allows two or more classes to co-exist on the same DOM node, which turned out to be quite useful later."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "BlocksSimpleandCompoundTheMisclassification"
       },
       "content": [
        "Blocks Simple and Compound: The Misclassification"
       ]
      },
      {
       "elem": "p",
       "content": [
        "We defined simple blocks as not being able to contain another blocks anywhere inside their markup."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Compound blocks were allowed (or sometimes, required) to have nested blocks embedded."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This classification was naive; even the simplest blocks sometimes were wrapped around other blocks and had to be &quot;upgraded&quot; and refactored to fit the new role."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This misclassification in fact had struck back in so many cases that we had finally accepted the opposite principle: any block should allow for arbitrary content to be embedded, whenever possible."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "CompletelyIndependentBlocks"
       },
       "content": [
        "Completely Independent Blocks"
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS definitions aren&apos;t bulletproof when we mix a lot of styled content originating from different sources on a single web page."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In complex layouts, blocks may alter each other&apos;s appearance because of element names conflicts. Tagname-based CSS rules may match more tags than we intended them to."
       ]
      },
      {
       "elem": "p",
       "content": [
        "As soon as we had to fight these and similar bugs in production, a strict version of an independent block (named Absolutely Independept Block, abbreviated AIB) was defined with the following extra rules:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "never match CSS to tagnames, use classnames for everything:",
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
          "classnames for block elements must be prefixed with the parent block name:",
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
        "Such classnames tend to be much longer, and the resulting HTML code is considerably bigger in size."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This was the main reason why AIB was considered a &quot;costly solution&quot; to be used more as a remedy, not as an everyday practice."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Prefixes"
       },
       "content": [
        "Prefixes"
       ]
      },
      {
       "elem": "p",
       "content": [
        "As everybody is aware nowadays, giving names to variables is one of the most difficult problems in development, ever."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We approached it cautiously, and invented four prefixes allowed for block names, each one with its own semantics:"
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
          "\n    common blocks"
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
          "\n    holsters, used for gluing several elements together"
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
          "\n    layout grids"
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
          "\n    global styles"
         ]
        }
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "Modifications"
       },
       "content": [
        "Modifications"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Modification"
         ]
        },
        " can be defined as a specific state of a block, or as a flag that holds some specific property."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This is best explained with an example: a block representing a button may have three default sizes: small, normal and big."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Instead of creating 3 different blocks, you should assign a ",
        {
         "tag": "tt",
         "content": [
          "modification"
         ]
        },
        " to your block. The modification requires a name (e.g. ",
        {
         "tag": "tt",
         "content": [
          "size"
         ]
        },
        ") and a value (",
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
        " or ",
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
        "There are two reasons for a block to get a modification:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "Block may alter its presentation according to its placement in the layout.",
          {
           "tag": "br"
          },
          "\n     Such modification is called ",
          {
           "tag": "tt",
           "content": [
            "context-dependent"
           ]
          },
          "."
         ]
        },
        {
         "elem": "li",
         "content": [
          "An additional (postfixed) classname may change block&apos;s appearance. This is a context-independent (postfix-based) modification.",
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
        "id": "UnifiedPortalWideFramework"
       },
       "content": [
        "Unified Portal-Wide Framework"
       ]
      },
      {
       "elem": "p",
       "content": [
        "At the beginning of 2008, Yandex had been going through a major review of its internal design policies. We decided to create a brand book (for internal use) to enforce best practices in interface design, company-wide."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This task was assigned to the front-end team, and after some pondering of options, we decided to proceed with technologies we were the most proficient with, namely: HTML and CSS code."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Interfaces evolve fast, so fast that any long-term attempt to describe interfaces with words and pictures will become obsolete even before completion. We needed a brand book that would represent our interfaces as they were: changing rapidly and still unified between different Yandex services and products."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Therefore, we decided that our interface brand book should be built with the same blocks we used to build our web sites. Blocks could be shared between projects and represent the latest in Yandex interface design."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We decided to build a portal-wide framework of blocks so all could benefit from it and contribute back. The project was internally named ",
        {
         "tag": "tt",
         "content": [
          "Lego"
         ]
        },
        "."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "LegoRepositoryStructureFirstApproach"
       },
       "content": [
        "Lego Repository Structure, First Approach"
       ]
      },
      {
       "elem": "p",
       "content": [
        "The topmost level corresponded to various available ",
        {
         "tag": "tt",
         "content": [
          "implementations"
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
        "css/\nhtml/\njs/\nxml/\nxsl/"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Each implementation contained its own sub-structure of folders."
       ]
      },
      {
       "elem": "p",
       "content": [
        "CSS went into 3 different folders:"
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
          "block — blocks shared between services"
         ]
        },
        {
         "elem": "li",
         "content": [
          "util — general-purpose blocks ready to be opensourced"
         ]
        },
        {
         "elem": "li",
         "content": [
          "service — CSS styles for specific Yandex services, used for branding, header/footer etc."
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "HTML folder structure was identical to CSS:"
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
        "JavaScript was yet loosely structured and used inconsistently between services:"
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
        "Each service had a corresponding XML file semantically describing its page header (and providing necessary project-specific data), which in conjunction with an XSL stylesheet generated header HTML code."
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
        "XSL templates for various blocks (one file per block) were contained in one folder:"
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
        "What about integration?"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Lego is linked to projects with the help of a version control feature known as ",
        {
         "tag": "tt",
         "content": [
          "svn:externals"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "When a package is built for production deployment, the external library (Lego) code is embedded into the package; this is similar to static library linking in compiled languages."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Lego provides an SVN branch for each of its major releases; sticking to a branch in svn:externals allows for hotfixes to arrive to a project; for extreme stability, project can freeze at a specific Lego revision. In either case, major versions switches can be prepared and made whenever necessary."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This simple technique proved quite flexible and is employed up to this day by many Yandex services."
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "PerPageFiles"
       },
       "content": [
        "Per-Page Files"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Files linked from web pages were mostly importing corresponding block implementations from the Lego folder structure."
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
        "The consistency of import directives was maintained manually."
       ]
      },
      {
       "elem": "p",
       "content": [
        "At that point, we didn&apos;t yet come to a unified file naming convention and tried several approaches."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "PortalWideFrameworkLego122008"
       },
       "content": [
        "Portal-Wide Framework Lego 1.2 (2008)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Upon releasing Lego version 1.2, the code had been refactored and folder structure had changed."
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
        "Blocks previously separated and placed in ",
        {
         "tag": "tt",
         "content": [
          "util"
         ]
        },
        " and ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        " folders are now combined. Common styles shared by most blocks are stored in common/css."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We had been pondering the possibility of open-sourcing the code but postponed it until two years later."
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
        "MSIE-specific styles were renamed from *-ie.css to *.ie.css."
       ]
      },
      {
       "elem": "p",
       "content": [
        "All contents of optional CSS files (such as ",
        {
         "tag": "tt",
         "content": [
          "b-dropdown_arr.css"
         ]
        },
        ") was moved into separate folders (",
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
        "For classname-based modification of a block, the underscore was assigned as a separator, replacing a single dash that was used previously."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This made a block name visually separated from a modificator name, and proved quite useful while developing automated tools, as it allowed for unambiguous search and pattern matching."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BEMest2009"
       },
       "content": [
        "BEM, est. 2009"
       ]
      },
      {
       "elem": "p",
       "content": [
        "In March of 2009, Lego 2.0 had been released."
       ]
      },
      {
       "elem": "p",
       "content": [
        "That event marked the end of the &quot;independent blocks&quot; epoch and formation of the BEM methodology."
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
        "id": "Lego20in2009"
       },
       "content": [
        "Lego 2.0 in 2009"
       ]
      },
      {
       "elem": "p",
       "content": [
        "What was the key update the 2.0 version had delivered?"
       ]
      },
      {
       "elem": "p",
       "content": [
        "What really changed our understanding of the methodology was the primacy of ",
        {
         "tag": "tt",
         "content": [
          "block"
         ]
        },
        " regardless of the underlying implementation technologies."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Each block is contained in a separate folder; each technology (CSS, JS, XSL etc.) is represented by a separate file. Documentation just gets its own file type such as ",
        {
         "tag": "tt",
         "content": [
          ".wiki"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "What additional terms did we operate on at that time?"
       ]
      },
      {
       "elem": "h4",
       "attrs": {
        "id": "TerminologyExcerpts"
       },
       "content": [
        "Terminology Excerpts"
       ]
      },
      {
       "elem": "p",
       "content": [
        {
         "tag": "tt",
         "content": [
          "Independent Block"
         ]
        },
        " may be used on any web page and placed anywhere in the layout."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In XML we apply XSL stylesheets to, the block is represented by a node in ",
        {
         "tag": "tt",
         "content": [
          "lego"
         ]
        },
        " namespace:"
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
        "In HTML, block&apos;s container gets a classname exactly corresponding to its name:"
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
        "All block files (CSS, JS, HTML, XSL) are stored in block&apos;s folder:"
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
        "In XML files that describe page structure, blocks are described with nodes in ",
        {
         "tag": "tt",
         "content": [
          "lego"
         ]
        },
        " namespace; block name prefix is omitted:"
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
        "HTML classes inside the block have their prefixes omitted as well."
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
        "Files related to inner elements each get their own folder:"
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
        "Modifiers in XML are specified as node attributes in ",
        {
         "tag": "tt",
         "content": [
          "lego"
         ]
        },
        " namespace:"
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
        "In HTML, an extra classname is added:"
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
        "Modifier files (styles etc.) go into separate folders prefixed with an underscore:"
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
        "id": "DeclarationinXML"
       },
       "content": [
        "Declaration in XML"
       ]
      },
      {
       "elem": "p",
       "content": [
        "All Lego components used in a project are described in an XML file:"
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
        "This XML allows for CSS imports to be generated:"
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
        "This example shows that common styles are imported first; then, project styles add extra definitions or redefine some of the common blocks. This makes project-specific changes possible while maintaining a common shared codebase."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Same XML declarations allow for JS includes to be autogenerated."
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
        "XSL templates imports are autogenerated as well, using the same XML-based definitions:"
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
        "Code generation was an important step forward; from this point onwards, we don&apos;t have to maintain depenpencies manually."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "CSSSelectorSpeedRevisited2009"
       },
       "content": [
        "CSS Selector Speed Revisited, 2009"
       ]
      },
      {
       "elem": "p",
       "content": [
        "During major redesign of Yandex.Mail service in 2009, interface responsiveness and overall speed were the key factors. It was our goal to release a web application that feels as fast as a piece of desktop software, and maybe even faster."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Client-side (in-browser) XSL transformations were employed as a main templating solution (XML with all the data was loaded separately). XSL transforms are applied really fast, but the resulting HTML code takes significant time to be appended to the page DOM. However, disabling all CSS made this problem go away magically."
       ]
      },
      {
       "elem": "p",
       "content": [
        "While studying various factors that could have affected the rendering speed, CSS selectors were identified as a major source of the slowdown. The bigger the DOM tree and the CSS stylesheet, the longer it takes for all CSS rules to be applied."
       ]
      },
      {
       "elem": "p",
       "content": [
        "These&apos;s a summary of our study available (in Russian): ",
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
        "It turned out there is a way to make CSS many times faster: switching to simple selectors and eliminating CSS cascade wherever possible. Selectors based on a single classname are quick and browser handles them with ease. We already had a solution that could use such selectors: the so-called ",
        {
         "block": "b-link",
         "url": "http://clubs.ya.ru/bem/replies.xml?item_no=338",
         "content": [
          "completely independent blocks"
         ]
        },
        "."
       ]
      },
      {
       "elem": "p",
       "content": [
        "All Lego blocks were refactored to follow the completely independent blocks restrictions. As soon as all classnames become unique, most rules require a single class query and work way faster."
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
        "id": "EstablishingNamingConventions"
       },
       "content": [
        "Establishing Naming Conventions"
       ]
      },
      {
       "elem": "p",
       "content": [
        "After taking several attempts to modify naming conventions, we agreed on some naming principles that hadn&apos;t changed since then."
       ]
      },
      {
       "elem": "p",
       "content": [
        "In file names, the dot separator was replaced by double underscore ",
        {
         "tag": "u",
         "content": [
          ". Before: "
         ]
        },
        {
         "tag": "tt",
         "content": [
          "b-block.elem.css"
         ]
        },
        ", after: ",
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
        "; thus, file names were made consistent with CSS selectors."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Block&apos;s elements were allowed to have their own modifiers, too."
       ]
      },
      {
       "elem": "p",
       "content": [
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
        ", similar to ",
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
        "Modifiers were changed to be a key/value pair: Before: ",
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
        " After: ",
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
        "This change turned out to be useful when working with modifiers from JavaScript."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "GoingOpenSource2010"
       },
       "content": [
        "Going Open Source (2010)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "In 2010, we had published some code on ",
        {
         "block": "b-link",
         "url": "https://github.com/bem",
         "content": [
          "our GitHub account"
         ]
        },
        " to continue growing as an open source project."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "CreatingbemblLibrary"
       },
       "content": [
        "Creating bem-bl Library"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Blocks from Lego are being gradually ported to ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-bl",
         "content": [
          "bem-bl"
         ]
        },
        ", a library of blocks we consider useful for any web site, not just a Yandex project. As blocks are gradually open-sourced, we improve code and add new features."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This is very much a work in progress, and we invite everybody to make pull requests :-)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "We also develop ",
        {
         "block": "b-link",
         "url": "https://github.com/bem/bem-tools",
         "content": [
          "bem-tools"
         ]
        },
        ", a set of helper scripts and automation utilities that make working with BEM files easier. This is mostly done with Node.js, to keep the barriers low for front-end people familiar with JavaScript and willing to contribute."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "RedefinitionLevelsInBEM"
       },
       "content": [
        "Redefinition Levels In BEM"
       ]
      },
      {
       "elem": "p",
       "content": [
        "One size never fits all... but one BEM does! Because blocks and elements are represented on a file system as files and folders, and BEM file structure is unified and based mostly on semantical criteria, we can easily redefine a part of a BEM block, or add more functionality. Similar to the way we extend objects in JavaScript, BEM blocks can be extended using so-called &quot;redefinition levels&quot;."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Typical redefinition levels may be defined like this:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "public bem-bl library pulled from github, extended by..."
         ]
        },
        {
         "elem": "li",
         "content": [
          "internal block library (such as Lego), extended by.."
         ]
        },
        {
         "elem": "li",
         "content": [
          "project-specific block library"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "You&apos;re free to go and add more levels. You might need some page-specific block improvements... oh, I believe you got the idea."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Example:"
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
        "It is also possible to use a custom file structure on a redefinition level; as long as you follow the BEM concept, all you need is to configure our build tools according to your new cool structure."
       ]
      },
      {
       "elem": "p",
       "content": [
        "We won&apos;t go into much detail here, but there&apos;s a configuration file for that:"
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
        "You can specify different file naming patterns, or even flatten your folder structure completely."
       ]
      },
      {
       "elem": "h3",
       "attrs": {
        "id": "BEMHTMLTemplatingEngine"
       },
       "content": [
        "BEMHTML Templating Engine"
       ]
      },
      {
       "elem": "p",
       "content": [
        "We tried different templating solutions, and ended up developing our own, called BEMHTML."
       ]
      },
      {
       "elem": "p",
       "content": [
        "This templating engine:"
       ]
      },
      {
       "elem": "ol",
       "content": [
        {
         "elem": "li",
         "content": [
          "operates on core BEM (Block, Element, Modifier) terms"
         ]
        },
        {
         "elem": "li",
         "content": [
          "supports redefinition levels: build common blocks and tailor them to your needs"
         ]
        },
        {
         "elem": "li",
         "content": [
          "precompiles templates into JavaScript code that runs either in a browser, or on a server"
         ]
        }
       ]
      },
      {
       "elem": "p",
       "content": [
        "More details on BEMHTML will be available soon."
       ]
      },
      {
       "elem": "h2",
       "attrs": {
        "id": "BEMTryThisAtHome"
       },
       "content": [
        "BEM: Try This At Home!"
       ]
      },
      {
       "elem": "p",
       "content": [
        "As you can see, BEM has a long history of trial and error. It took Yandex a while to figure out what&apos;s important and what not."
       ]
      },
      {
       "elem": "p",
       "content": [
        "The foundation of the BEM methodology are Block, Element and Modifier; these entities are consistently used in all our projects."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM as we know and use it today is not the final truth, nor the revelation, but something constantly being driven by practice, and tested on real-life projects. You can follow this methodology to the extent that you find useful."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM is quite flexible, as it is mostly a methodology; there is no such thing as BEM API, or BEM SDK. While we encourage you to try and use the open source tools we provide, which are indeed a BEM framework, you might find BEM principles good enough to be embedded into your products or technologies in some other way."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM is a development methodolody that allows team members to collaborate and communicate ideas using the unified language consisting of simple yet powerful terms: blocks, elements, modifiers."
       ]
      },
      {
       "elem": "p",
       "content": [
        "There is no such thing as &quot;true BEM&quot;, and we don&apos;t try to create one. The implementation we offer is consistent and we like it a lot, but you may create your own and still call it BEM, as long as you stay true to the core principles."
       ]
      },
      {
       "elem": "p",
       "content": [
        "BEM is a collection of ideas and methods, a *methodology*.",
        {
         "tag": "br"
        },
        " Each company and each team may integrate it into an existing workflow gradually, finding out what works best for them."
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
        "That&apos;s great! It&apos;s how we started using BEM, too :-)"
       ]
      },
      {
       "elem": "p",
       "content": [
        "Choose an approach you find the easiest to understand and maintain, for example let your block elements have simple (non-prefixed) classes, and use modifiers with a key/value pair:"
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
        "You can go one step further and assign a specific class to all DOM nodes inside your block that have a semantic meaning (we call that &quot;completely independent blocks&quot;, see above):"
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
        "Find CSS prefixes too long to type? Remove them!"
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
        "This is a perfect opportunity to try BEM concepts, and since we don&apos;t really have those strict rules, you&apos;re not really breaking anything as long as you hold on to the main principle of blocks, elements and modifiers."
       ]
      },
      {
       "elem": "p",
       "content": [
        "Read more about putting blocks to filesystem in ",
        {
         "block": "b-link",
         "url": "../filesystem/filesystem.en.wiki",
         "content": [
          "a separate article"
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
          "History"
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