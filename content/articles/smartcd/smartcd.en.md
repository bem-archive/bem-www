# smartcd: how to launch tools locally

We recommend installing all the dependencies including [bem-tools](http://bem.info/tools/bem/) locally in each project. We describe them in `package.json` at the project root - install them with the command `npm install`.

We would like to use locally installed tools inside project directories (at any level) just by calling their names: `bem make`, `borschik path/to/file.css`, etc.

Some of us are using a trick of adding the value `./node_modules/.bin` to the environment variable PATH. But this method only works if the command was run from the project root, and sometimes it's not convenient.

There is a better way to do it!

The tool [smartcd](https://github.com/cxreg/smartcd) can configure any directory so that every time one enters it (or one of its subdirectories) certain commands will be executed or environment variables will be set. We will use it!

Set up everything as follows:

  - install `smartcd` (if you don't want to configure the smartcd, just answer the first question `Configure now? [Y/n]` — `N`)
    ```
    curl -L http://smartcd.org/install | bash
    ```

  - make template `npm-module` for `smartcd`
    ```
    smartcd template create npm-module
    ```

  - in the file @@ insert the line
    ```
    smartcd helper run path prepend __PATH__/node_modules/.bin
    ```
    after the comment: `# Enter any bash_enter commands below here: (leave this line!)`

  - set up the project:
    ```
    cd path/to/project
    echo 'smartcd template run npm-module' | smartcd edit enter
    ```

It's very useful to set an alias for the shell:

```
alias npm-smartcd="echo 'smartcd template run npm-module' | smartcd edit enter"
```

Enjoy!

```
~/projects$ which bem
/usr/local/bin/bem

~/projects$ cd bem-www
smartcd: running /Users/arikon/.smartcd/scripts/Users/arikon/projects/bem-www/bash_enter

~/projects/bem-www$ which bem
/Users/arikon/projects/bem-www/node_modules/.bin/bem

~/projects/bem-www$ cd blocks-desktop/

~/projects/bem-www/blocks-desktop$ which bem
/Users/arikon/projects/bem-www/node_modules/.bin/bem

~/projects/bem-www/blocks-desktop$ cd ../..

~/projects$ which bem
/Users/arikon/n/bin/bem
```

If you are using `zsh` with the option `autocd` enabled, uncomment the line `smartcd setup prompt-hook` in `~/.smartcd_config`.

<!--(Begin) Article author block
<div class="article-author">
    <div class="article-author__photo">
        <img class="article-author__pictures" src="http://www.gravatar.com/avatar/6fa6da3a6927ded01bac659b5f1b4281.png?s=130" alt="Фотография Алексея Андросова">
    </div>
    <div class="article-author__info">
        <div class="article-author__row">
             <span class="article-author__name">Sergey Belov,
        </div>
        <div class="article-author__row">
          Yandex DevTools Group Team Lead 
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://twitter.com/arik0n">twitter.com/arik0n</a>
        </div>
        <div class="article-author__row">
             <a class="article-author__social-icon b-link" target="_blank" href="http://github.com/arikon">github.com/arikon</a>
        </div>
    </div>
</div>
(End) Article author block-->

This article is based on: «[Using locally installed tools from the command line](http://clubs.ya.ru/bem/replies.xml?item_no=2231)» (Russian only) posted at Ya.ru.

