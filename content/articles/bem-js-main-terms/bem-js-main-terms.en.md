# JavaScript for BEM: The Main Terms

There is a block [i-bem](http://bem.github.com/bem-bl/sets/common-desktop/i-bem/i-bem.ru.html) which lives in the `bem-bl` library.  The `bem-bl` library is included in what we call the `BEM Stack`.

It's JavaScript implementation strictly adheres to, and in some ways defines, the `BEM Coding Style` and `BEM Conventions`.  The use of this library allows one to manipulate the client-side JavaScript/DOM in *BEM-Style* according to *BEM-Principles*, not only in the design of visible components, but also their behavior.


## Why Do We Need One More Framework?

Principally, all existent JavaScript libraries can be divided into the following categories:

 * Polyfills<br/>
   For example jQuery and base2 (a long time ago, at the dawn of stack frameworks, it was very popular).
 * Ready-made Widget Sets
 * Complicated Libraries
   which for now we'll call "Rich UI Interfaces".
 * "Monsters"<br/>
   Robust libraries for writing complex web-applications

This categorization is not absolute, and probably many libraries answer problems which exist across several categories.  The important thing here is that each of these libraries have been designed with one similar goal; to help us solve our problems.


OldSchool designers still remember the good'ol days when nothing like jQuery existed and they had to program everything from scratch.
Each project had its own `common.js` which included a set of commonly used functions.
At the beginning of it was a section which would be copy-&-pasted from project to project.  Later these functions might be collected into a small JavaScript library.

That was the evolution of JavaScript frameworks.

The same thing happened to BEM.  Initially, we understood that we wanted to have these things called `blocks` which were `Interface Modules`, their smaller CSS-elements and modifiers existed only in CSS.  Later developers wanted to work using a similar structure, but this time in JavaScript.  During this time developers also wanted to include the key-concept of `levels` which allows one to build upon and improve the behavior of blocks from project to project.

This is how the JavaScript was written for the *helper block* [i-bem.js](https://github.com/bem/bem-bl/tree/master/blocks-common/i-bem) which lives over at GitHub.  This is the core framework for writing JavaScript in `BEM Terminology`.

## Connection With HTML Code
As all JavaScript components, code for `i-bem.js` has to be coupled with some HTML, eventually intended to be the functional code behind some part of an interface.  In order to use i-bem all you have to do is add the CSS-Class `i-bem`, and define the `onclick` attribute to contain the parameters of the block.

```js
<div
    class="myblock i-bem"
    onclick="return {
        myblock: { }}">

    <span class="myblock__item"></span>

</div>
```

If you are curious about why `onclick` attribute is used, see Sergey Berezhnoy's talk (Russian only) "[Different ways of creating components for the client-side](http://events.yandex-team.ru/events/yasubbotnik/msk-jul-2012/talks/302/)" - presented at [Ya.Subbotnik (Yandex Developer Day)](http://events.yandex-team.ru/events/yasubbotnik/) in July 2012.

Usually, the blocks initialization starts on `domReady` event.  Thanks to the ability to read the `onclick` attribute and receive a native javascript object we don't need access to any `id` components or to wait for the parsing of CSS classes.  All blocks that have the class attribute `i-bem` will be transformed according to their parameter's components.

## Behavior Declaration
A block's behavior is described in a JavaScript file which has the same name as the block it's self (`myblock.js`).

From an OOP point of view, similar blocks form classes.  Furthermore, for every block on the page a instance of each corresponding "class" is generated.

The `decl` method is used for describing the block's behaviour, it receives 3 parameters:
 1. The `name` of the block we're talking about.
 2. This specific block's properties.
 3. The static properties of the class to which the block belongs.

```js
BEM.DOM.decl('myblock', {

    /\* Properties specific to this instance \*/

}, {

    /\* Static properties specific to the class to which this block belongs \*/

});
```

Inside JavaScript, the reference to the instance you can always get with help of keyword `this` and use its reserved fields `__self` and  `__base`.

 * `this.__self`<br/>
 Refers to the class static methods (to which the instance belongs)
 * `this.__base`<br/>
  Perform a `super call`, which means to call the base method implementation.

The last one allows us to operate within different `levels`.
When extending functionality of an existing block, a developer always has access to the block's behaviour as defined on the previous level.
In other words, methods can be fully overwritten or they can be extended with additional behavior.

```js
BEM.DOM.decl('myblock', {

    method: function() {

        this.__base();
        this.doMore();

    }

});
```

Other than inheritance by definition levels, a block has the possibility to inherit one from another block.  Because of the possibility of inheritance from one level to another, it's better to understand this of the merging of implementations.

## A Block's Selectors
To find other blocks it is possible to use of the `find*` methods, it depends on where the desirable block is located relative to the current block:

```js
// Search within the current block's context.
this.findBlockInside([elem], block)

// Search outside of the current block's context.
this.findBlockOutside([elem], block)

// Search DOM-node of the named block.
this.findBlockOn([elem], block)
```

Each of these methods return a JavaScript object, an instance of the block which was located by the search method.

In a similar way a collection of blocks can be found:

```js
// Search inside the current block's context.
this.findBlocksInside([elem], block)

// Search outside of the current block's context.
this.findBlocksOutside([elem], block)

// Search DOM-node of the named block
this.findBlocksOn([elem], block)
```

## Elements
There are methods for accessing a block's `elements`: `elem` and `findElem`.
The difference between them is that the `elem` method cashes elements before it's initial call, therefore there is no need to store a result of `elem` method in a variable.  It's already implemented for this method.

```js
//cashing selector
this.elem(name,
    [modName], [modVal])

//non-cashing selector
this.findElem([ctx], name,
    [modName], [modVal])
```

## Modifiers
Modifiers in JavaScript exist for expressing the state of a block or element.

The methods for working with modifiers are the same for blocks and for elements.

The first parameter is optional, and may serve for illustration purposes.

```js
// Get the value of the block's modifier
this.getMod(modName)

// Get the value of the the element's modifier
this.getMod(elem, modName)

// Verify modifiers
this.hasMod([elem], modName, modVal)

// Set modifiers
this.setMod([elem], modName, modVal)

// Delete modifiers
this.delMod([elem], modName)

// Toggle a modifier's value
this.toggleMod([elem], modName,
    modVal1, modVal2, [condition])
```


Modifiers describe a block's state.  Every block has an event `onSetMod` which allows us to define the behaviour of a block's instance.  This event is fired when a modifier is being applied to the block.

```js
BEM.DOM.decl('myblock', {
    onSetMod : {
        'mod1' : {

            // Set the value of `mod1` to `val1`
            'val1' : function(mod, val, oldVal) {
            }

        },

        // Set the value of the modifier `mod2` to any value
        'mod2' : function(mod, val, oldVal) {
        }
    }
});
```

We declare modifiers for elements in a similar way:

```js
BEM.DOM.decl('myblock', {
    // …

    onElemSetMod : {

        // The same structure as the block
        'elem' : {
            'mod1' : {

                // the additional parameter `elem`
                'val1' : function(elem, mod, val, oldVal) {
                }

            }
        }
    }

});
```

## Events
Events play a key-role in JavaScript.  There are special methods which allow us to work with events on the DOM-level with existing blocks, and with events for BEM-objects (JavaScript objects that are the block's instances).

```js
// DOM-event
this
    .bindTo([elem], event, fn)
    .unbindFrom([elem], event)

// BEM-event
this
    .on(event, [data], fn, [ctx])
    .un(event, [data], fn, [ctx])
    .trigger(event, [data])
```

A DOM-event doesn't need any explanations, it the result of a user's action: click, key press, scroll, etc.

BEM-events are like "custom events", they exist for the possibility to create an API for blocks.

## Initialization
The block starts to work after it is initialised.  The moment a block is initialised, it receives the `js_inited` modifier.

Similar to other methods, code can be assigned to the `inited` property which will be executed when this modifier is initialised.
In other words, it's possible to write a "constructor".


```js
onSetMod : {

    'js' : {

        'inited' : function(){

            // The block's "constructor"

        }
    }
}
```

`i-bem` makes possible lazy initialization for the blocks, and creation of blocs without DOM-representation. <br/>
More information can be found at [the `i-bem` block's page ](http://bem.github.io/bem-bl/sets/common-desktop/i-bem/i-bem.en.html).

<!--(Begin) Article author block
<div class="article-author">
    <div class="article-author__photo">
        <img class="article-author__pictures" src="http://img-fotki.yandex.ru/get/5625/51437929.0/0_bf4ad_363d4605_S.png" alt="Varvara Stepanova">
    </div>
    <div class="article-author__info">
        <div class="article-author__row">
             <span class="article-author__name">Varvara Stepanova,
        </div>
        <div class="article-author__row">
            Team Leader of Yandex Frontend Development Group.
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://twitter.com/toivonens">twitter.com/toivonens</a>
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://github.com/toivonen">github.com/toivonen</a>
        </div>
    </div>
</div>
(End) Article author block-->

This article is based on [Vladimir Varankin's](https://github.com/narqo) talk ["BEM and JavaScript: Why Did We Created a JS-framework?"](http://events.yandex.ru/events/yasubbotnik/msk-sep-2012/talks/323/) that was presented at Ya.Subbotnik (Yandex Developer's Day) in Moscow September 8, 2012.
