# The Syntax for `deps.js`

## The complete implementation of the deps object:

```js
    {
        block : 'bBlock',
        elem  : 'elem',
        mod   : 'modName',
        val   : 'modValue',
        tech  : 'techName',    // file extention for this dependency (e.g. if javaScript `tech : '.js'`)
        mustDeps   : [  ],     // Array of blocks connected to this dependency
        shouldDeps : [  ],     // The order of connected blocks is not important (important that they connect)
        noDeps : [  ],         // It's possible to exclude some blocks, for example: `[ 'i-bem__dom_init_auto' ]`
    }
```

## Notes to consider while constructing your deps.js for your project:

### 1. `blocks` and `elements` have the filename as a root.

A file named: `b1.deps.js` can be written according to either of these patterns:

```js
    ({
      block : 'b1',
      mustDeps : { block : 'b2' }
    })

    ({
      mustDeps : { block : 'b2' }
    })
```

### 2. `elem` includes **only** the `element` (but not the block itself):

```js
    { block : 'b1', elem : 'e1' }
```

This is comparable to `mod` and `val`.

### 3. `elems` — This is a shortcut, which allows you to connect to several elements to the same block

```js
    { block : 'b1', elems : ['e1', 'e2'] }
```

Or, like this:

```js
    {
      block : 'b1',
      elems : [
        { elem : 'e1' },
        { elem : 'e2', mod : 'modName' },
        { elem : 'e3', mods : { modName : modVal }
      ]
    }
```

<!--(Begin) Article author block
<div class="article-author">
    <div class="article-author__photo">
        <img class="article-author__pictures" src="http://img-fotki.yandex.ru/get/6434/51437929.0/0_bfef0_5d9cdb30_M.jpg" alt="Фотография Владимира Варанкина">
    </div>
    <div class="article-author__info">
        <div class="article-author__row">
             <span class="article-author__name">Vladimir Varankin (Владимир Варанкин),
        </div>
        <div class="article-author__row">
            Team Leader of the Interface Designers in Yandex (Ведущий разработчик интерфейсов в Яндексе)
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://twitter.com/tvii">twitter.com/tvii</a>
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://github.com/narqo">github.com/narqo</a>
        </div>
    </div>
</div>
(End) Article author block-->
