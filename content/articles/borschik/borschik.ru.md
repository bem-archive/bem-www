# borschik

borschik — это простой, но мощный сборщик файлов текстовых форматов.

Основная задача – сборка статических файлов веб-проектов (CSS, JS и т.д.).

Что он умеет делать с файлами:

* склеивать
* преобразовывать
* минимизировать

borschik построен на системе плагинов, которые в его терминах называются "технологиями".
На данный момент существуют технологии для CSS, JS.
Вы легко можете написать свою собственную технологию как для других языков, так и расширить существующие.

borschik оперирует двумя понятиями — `include` и `link`.

* `include`: вы указываете ссылку на файл, после сборки ссылка заменяется на содержимое файла.
* `link`: вы указываете ссылку на файл, после сборки ссылка преобразовывается.

Фактически каждая технология определяет как найти `link` или `include` и как их обработать.

## Склейка файлов
### CSS

Из коробки borschik умеет раскрывать правила `@import` и заменять их на содержимое указанного файла.

Допустим, у нас есть два CSS-файла

 * `b-header/b-header.css`

```css
.b-header
{
    border: 1px solid #000;
}
```
 * `b-footer/b-footer.css`

```css
.b-footer
{
    border-top: 1px solid #000;
    background: url("bg.png");
}
```

И мы хотим собрать их в один файл `page.css`, который будет лежать в корне проекта
```css
@import url("b-header/b-header.css");
@import url("b-footer/b-footer.css");
```
С помощью команды
```sh
$ borschik --input=page.css --minimize=no
```

Получаем следующий результат
```css
/* b-header/b-header.css begin */
.b-header
{
    border: 1px solid #000;
}

/* b-header/b-header.css end */


.b-title
{
    font-size: 120%
}

/* b-footer/b-footer.css begin */
.b-header
{
    border-top: 1px solid #000;
    background: url("b-footer/bg.png");
}

/* b-footer/b-footer.css end */
```

Добавление комментариев при раскрытии можно отлючить с помощью опции `--comments=no`.

**Примечание**: *несмотря на то, что картинка `bg.png` лежит в папке `b-footer`, путь до нее преобразовался
и стал относительным файла `page.css`.
Точно также можно указывать вложенные правила `@import`: пути до них будут правильно раскрыты.*



###JS
По аналогии с CSS можно склеивать и JS-файлы. Так как в JS нет стандартных методов для импорта файлов,
в borschik придуман специльный синтаксис `borschik:include:path/to/fie.js`.
Такие конструкции нужно указывать либо в блочных комментариях `/*borschik:include:file.js*/`, либо как строку `"borschik:include:file.js"`.

Если `include` указан как комментарий, то он заменится на содержимое файла без какой-либо обработки. `page.js`
```js
var prj = {};
/* borschik:include:components/cookie.js */
```

Собираем:
```sh
$ borschik --input=page.js --minimize=no
```

Получаем:
```js
var prj = {};
/* components/cookie.js begin */
prj.cookie = {
    set: function(){},
    get: function(){}
};

/* components/cookie.js end */
```

Если `include` указан как строка, то содержимое файла будет обработано с помощью `JSON.stringify`. `page.js`
```js
prj.STATIC_HOST = "borschik:include:components/host.txt";
```

Преобразуется в:
```js
prj.STATIC_HOST = "//yandex.st";
```

## Минимизация CSS и JS

По умолчанию borschik минимизирует CSS посредством [CSSO](https://github.com/css/csso)
, а JS с помощью [UglifyJS](https://github.com/mishoo/UglifyJS) v1.2.

Чтобы отключить минимизацию, используйте опцию `--minimize=no`. По умолчанию, она включена.

## Относительные ссылки на ресурсы

Упоминание картинок в CSS файлах можно изменить с относительных путей на
абсолютные (или другие относительные) с помощью конфига (файл `.borschik`
в любой директории). Конфиг считается относящимся к той директории, в которой
он находится. Конфиги в директории более верхнего уровня (ближе к корню
проекта) важнее конфигов в директории более нижнего.

Пример синтаксиса:

```json
    {
        "paths" : {
            "./": "/",
            "css/": "//yandex.st/my-prj/css/"
        }
    }
```

Находяcь в корне проекта, этот конфиг приводит все ссылки к абсолютному в пределах домена пути, а файлы
в директории `css/` – к `//yandex.st/my-prj/css/`.

Например, если в проекте будет файл `css/my.css`, в котором написано
`background-image: url(../a/b.gif);` (относительная ссылка на картинку), то
из-за мапинга в `.borschik` про `"./": "/"` в результате будет
`background-image: url("/a/b.gif");`.

## Раскрытие символических ссылок

В конфиге можно использовать ключ `follow_symlinks`

Например,

```js
    "follow_symlinks" : {
        "./a/b/c.css" : true,
        "./a" : true
    }
```

Семантика такая: указываются те файлы и папки, при обработке относительных путей
от которых нужно проследовать по символической ссылке.

## «Заморозка» статических ресурсов (freeze)

### Зачем нужна «заморозка» статики

Стандартные способы омптимизации загрузки статики выглядят так:

* Выставить «правильные», навечно кеширующие, заголовки на сервере
```
Cache-Control:max-age=315360000
Expires:Thu, 31 Dec 2037 23:55:55 GMT
```

* Унести статику на отдельный домен
* Добавить версию в урл, чтобы инвалидировать ее при выпуске новой версии



К примеру, вот так вставляем CSS
```xml
<link rel="stylesheet" href="//yandex.st/my-prj/1.0.0/css/page.css"/>
```
Допустим, в нем есть ссылка на картинку:
```css
.b-page
{
    background-image: url('../i/bg.png')
}
```
Получается, что картинка загружается по следующему URL
```
//yandex.st/my-prj/1.0.0/i/bg.png
```

Проблема: если CSS поменяется, необходимо будет изменить версию проекта, что изменит урл
```xml
<link rel="stylesheet" href="//yandex.st/my-prj/1.0.1/css/page.css"/>
```
Урл до картинки также поменяется
```
//yandex.st/my-prj/1.0.1/i/bg.png
```

Значит, из-за изменившегося урла пользователю придется заново загрузить не только новый CSS, но и все картинки в нем.

Подобную аналогию можно провести с JS и HTML.

### Как решить проблему?

1. Можно вручную добавлять к каждому ресурсу его версию. Это просто.
Но неудобно, сложно покрыть все файлы и есть большой риск ошибиться.
2. Можно автоматически добавлять к каждому ресурсу ревизию из VCS или timestamp последнего изменения.
Сложнее в реализации, избавляет от ручной работы, но не от сложности покрытия всех файлов.

borschik предлагает простой, но комплексный вариант решения – загрузка ресурсов по урлу, не зависящему от версии проекта, а
зависящему от содержимого файла, например SHA1-суммы.

Процесс преобразования урла до файла, когда урл заменяется на хеш от контента файла, мы называем freeze.

С помощью borschik вы сможете это автоматизировать.

### .borschik config

Для начала нам нужен конфиг. Он записывается в файл `.borschik`.

Файл `.borschik` влияет на директорию, где он находится, и на все вложенные директории.

Если есть несколько файлов в разных директориях, то конфиги в этих файлах переопределяют друг друга в порядке "кто выше, тот главнее".
```json
{
    "freeze_paths": {
        "i/bg": "../../_",
        "i/ico": "../../_"
    }
}
```

`freeze_paths` — это path-mapping, который определяет, какие файлы и в какую папку замораживать.

Например, когда borschik будет обрабатывать CSS-файл и найдет ссылки на ресурсы в папках `i/bg` или `i/ico`,
он их заморозит.

Ключ — это папка, файлы в которой будут заморожены.

Значение ключа указывает папку, в которую нужно cложить замороженые файлы.
Эта папка считается относительно оригинальной папки.

Например,
```json
{
    "freeze_paths": {
        "i/bg": "_"
    }
}
```
заморозит файлы из папки `i/bg` в папку `i/bg/_`

**Важно:**
* Замораживаются не все файлы в папке, а только те, на которые есть ссылки в обрабатываемых файлах.
* В папке фриза создаются копии оригинальных файлов, но с другим именем. Имя – хеш-сумма от содержимого файла.

###CSS freeze
Например, есть такой CSS `css/main.css`
```css
.b-page
{
    background-image: url('../i/bg/main.png')
}
```

Мы его замораживаем
```sh
$ borschik --input=css/main.css --freeze=yes
```

И получаем такой файл
```css
.b-page
{
    background-image: url('//yandex.st/my-prj/_/wFPs-e1B3wMRud8TzGw7YHjS08I.png')
}
```

Теперь достаточно просто положить замороженные картинки и CSS на сервер.
После заморозки в урле больше нет версии, и все файлы грузятся по хешу.
Все ресурсы всех версий могут спокойно выкладываться в одну и ту же папку.
Даже если у них будут одинаковые картинки, это не вызовет никаких проблем.
Если при обновлении версии картинки не поменяются, урл к ним не изменится и пользователь не будет их заново загружать.

### JS
Так как CSS является декларативным языком, то найти ссылки на картинки или шрифты не проблема.
С JS все сложнее: ссылку на картинку можно указать бесконечно разными способами, а ссылки могут быть динамическими.

#### Статический URL
Вот так обычно выглядит ссылка на картинку

```js
new Image().src = 'i/bg/main.png'
```

Чтобы помочь borschik найти и заморозить картинку, надо ее разметить с помощью `borschik.link()`
```js
new Image().src = borschik.link('i/bg/main.png')
```

Запускаем
```
borschik --tech=js-link --freeze=yes --input=1.js
```

Получаем
```js
new Image().src = '//yandex.st/my-prj/_/wFPs-e1B3wMRud8TzGw7YHjS08I.png'
```

Чтобы было проще разрабатываться, можно определить функцию `borschik.link`.
Она возвращает значение, которое ей передали
```js
borschik.link = function(link) {
    return link;
}
```

#### Динамический URL
С динамическими ссылками на картинки, где урл зависит от значения переменных, возникаются сложности.
```js
var icoName = 'yandex';
new Image().src = 'i/ico/' + iconName + '.png'
```

Такие картинки придется объявлять в отдельном JSON-файле
```json
{
    "ico-yandex-png": "i/ico/yandex.png",
    "ico-github-png": "i/ico/github.png",
    "ico-nodejs-png": "i/ico/nodejs.png"
}
```

Ключ — это любое название, которое вам больше нравится, а значение — путь до файла.
JS придется немного переписать: ссылаться на картинку не по урлу, а по имени из JSON
```js
var icoName = 'yandex';
new Image().src = borschik.link('@ico-' + iconName + '-png')
```
`@` в начале имени указывает на то, что это динамическая картинка.
Ее нужно добавлять обязательно, чтобы уметь отличать имя от пути.
При таком использовании вызов `borschik.link()` не изменится,
а правильный урл будет отдаваться динамически.

Теперь берем JSON, который мы описали, и отдаем его в специальную функцию `borschik.addLinks()`
```js
borschik.addLinks(/* borschik:include:_images.json */)
var icoName = 'yandex';
new Image().src = borschik.link('@ico-' + iconName + '-png')
```

```sh
# замораживаем JSON
$ borschik --tech=json-links --input=images.json > _images.json
# собираем JS
$ borschik --tech=js --input=1.js
```

Получаем
```js
borschik.addLinks({
    "ico-yandex-png": "//yandex.st/my-prj/_/wFPs-e1B3wMRud8TzGw7YHjS08I.png",
    "ico-github-png": "//yandex.st/my-prj/_/8ge7HHM3UfpIESgvrpN3bi-Nz0.png",
    "ico-nodejs-png": "//yandex.st/my-prj/_/1z-l36qqomllvJek_InjAYnHrOE.png"
})
var icoName = 'yandex';
new Image().src = borschik.link('@ico-' + iconName + '-png')
```

`borschik.link()` и `borschik.addLinks()` выглядит [так](https://github.com/veged/borschik/blob/master/js/borschik.js):
```js
(function() {
    var borschik = window['borschik'] = {};

    var links = {};

    borschik.addLinks = function(json) {
        for (var link in json) {
            links[link] = json[link];
        }
    };

    borschik.link = function(link) {
        // link with "@" is dynamic
        if (link.charAt(0) === '@') {
            return links[link.substr(1)];
        }

        return link;
    };

})();
```

### HTML
borschik умеет замораживать ссылки на статические ресурсы в HTML.

Например,
```xml
<html>
    <head>
        <link rel="stylesheet" href="1.css"/>
    </head>
    <body>
        <!-- <img src="1.png"> -->
        <img src="1.png">
        <script src="1.js"></script>
    </body>
</html>
```

Замораживаем
```sh
$ borschik --tech=html --input=index.html
```

Получаем
```xml
<html>
    <head>
        <link rel="stylesheet" href="//yandex.st/prj/_/n8mJAmybm5i9sdsO92s6y0.css"/>
    </head>
    <body>
        <!-- <img src="1.png"> -->
        <img src="//yandex.st/prj/_/jUK5O9GsS2gPWOhRMeBxR0GThf0.png">
        <script src="//yandex.st/prj/_/1qHhHrD9m5i9sdDbCe590URPaBw.js"></script>
    </body>
</html>
```

### «Полная заморозка»
Как рассказано выше, borschik замораживает только те файлы, на которые есть ссылка внутри обрабатываемого файла.
Естественно могут быть ситуации, когда ссылок нет.
Например, при динамической загрузке JS-модулей через [RequireJS](http://www.requirejs.org/).
В такой ситуации будет полезно заморозить все файлы.
Для этого воспользуйтесь подкомандой `borschik freeze`,
которая согласно конфигу `.borschik` заморозит все файлы в указанной папке
```sh
$ borschik freeze \
  --input=path/to/dir \ # папка, в которой надо заморозить все файлы
  --output=freeze-info.json # JSON с mapping'ом оригинальный файл -> замороженный файл
```

Пример
```sh
$ borschik freeze --input=js > freeze-info.json
```

```json
{
    "js/index.js": "//yandex.st/my-prj/_/434046cd5d1b54ae2374868a7363d7d8.js",
    "js/setup.js": "//yandex.st/my-prj/_/bcbf293578cfda2d4543d401d12e2e49.js"
}
```

Дальше этот JSON можно использовать в вашей системе загрузки или с небольшими преобразованиями в RequireJS.

### Преимущества заморозки
С помощью простых операций, вы сможете заморозить статические ресурсы.
При выпуске новых версий пользователи будут загружать заново только изменившиеся ресурсы.
Польза:
* уменьшение нагрузки на статический кластер
* уменьшение количества ресурсов, необходимых для загрузки пользователем
* ускорение загрузки страницы


<!--(Begin) Article author block
<div class="article-author">
    <div class="article-author__photo">
        <img class="article-author__pictures" src="http://img-fotki.yandex.ru/get/5646/51437929.0/0_bf0f0_64369365_S.png" alt="Фотография Алексея Андросова">
    </div>
    <div class="article-author__info">
        <div class="article-author__row">
             <span class="article-author__name">Алексей Андросов,
        </div>
        <div class="article-author__row">
            Ведущий разработчик фронтенда Яндекс.Почты
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://twitter.com/doochik">twitter.com/doochik</a>
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://github.com/doochik">github.com/doochik</a>
        </div>
    </div>
</div>
(End) Article author block-->
