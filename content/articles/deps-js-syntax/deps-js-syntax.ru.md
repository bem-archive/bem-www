# Синтаксис deps.js

Полная запись deps-сущности

```js
    {
        block : 'bBlock',
        elem  : 'elem',
        mod   : 'modName',
        val   : 'modValue',
        tech  : 'techName',  // технология, для которой собираются зависимости (например, js)
        mustDeps   : [],     // подключатся до блока
        shouldDeps : [],     // порядок подключения не важен (важно лишь подключить)
        noDeps : [],         // можно отменить какую-то зависимость (например, i-bem__dom_init_auto)
    }
```

Примечания
----------

### 1. Корневые блок и элементы берутся из имени файла, поэтому необязательны

Для файла `b1.deps.js` записи ниже эквивалентны:

```js
    ({
      block : 'b1',
      mustDeps : { block : 'b2' }
    })

    ({
      mustDeps : { block : 'b2' }
    })
```

### 2. `elem` подключает **только** элемент (но не сам блок)

```js
    { block : 'b1', elem : 'e1' }
```

Аналогично для `mod` и `val`.

### 3. `elems` — это шорткат, который позволяет подключить несколько элементов для блока, а **также сам блок**

```js
    { block : 'b1', elems : ['e1', 'e2'] }
```

Либо так:

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
             <span class="article-author__name">Владимир Варанкин,
        </div>
        <div class="article-author__row">
            Ведущий разработчик интерфейсов в Яндексе
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
