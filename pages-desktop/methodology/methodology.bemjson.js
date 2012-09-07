([
// {
//     block: 'i-global',
//     params: {
//         'key': 'val'
//     }
// },
{
    block: 'b-page',
    title: 'БЭМ: Методология ведения и использования исходного кода проекта',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_methodology.css', ie: false },
        { elem: 'css', url: '_methodology.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_methodology.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'header'
        },
        {
            block: 'content',
            content: [
				{
					block: 'search-wrap',
                    content: [		
                        {
                            block: 'search-form',
                            content: [
                                {
                                    block: 'b-search',
                                    attrs: { action: '/search.xml' },
                                    input: {
                                      elem: 'input',
                                      elemMods: { type: 'search'}
                                    },
                                    button: {
                                      elem: 'button',
                                      elemMods: { type: 'search'},
                                      attrs: { value: 'Искать'}
                                    }
                                }
                            ] 
                        }
				    ]
				},
                {
                    block: 'main',
                    content: [
                        {
                            block: 'title',
                            content: 'bem tools'
                        },
                        {
							block: 'description',
                            content: 'bem-tools в данный момент содержат одну утилиту командной строки bem, которая упрощает работу с различными BEM-сущностями.'
                        },
                        {
                            block: 'title',
							mods: { size: '24' },
                            content: 'Установка на MacOSX'
                        },
                        {
							block: 'b-text',
							mods: { size: '18' },
                            content: [
								 {
									elem: 'ul',
									content: [
										{
											elem: 'li',
											content: [
												'Установить ',
												{
													block: 'b-link',
													url: '#',
													content: 'Xcode'
												},
												' с установочного диска или ',
												{
													block: 'b-link',
													url: '#',
													content: 'сайта Apple'
												}
											]	
										},
										{
											elem: 'li',
											content: [ 
												'Установить ',
												{
													block: 'b-link',
													url: '#',
													content: 'homebrew'
												}
											]
										},
										{
											elem: 'code',
											content: 'ruby -e "$(curl -fsSL https://gist.github.com/raw/323731/install_homebrew.rb)"'
										},
										{
											elem: 'li',
											content: [ 
												'Установить ',
												{
													block: 'b-link',
													url: '#',
													content: 'nodejs'
												}
											]
										},
										{
											elem: 'code',
											content: 'brew install node'
										},
										{
											elem: 'li',
											content: [ 
												'Установить ',
												{
													block: 'b-link',
													url: '#',
													content: 'npm'
												}
											]
										},
										{
											elem: 'code',
											content: 'curl http://npmjs.org/install.sh | sh'
										},
										{
											elem: 'li',
											content: [ 
												'Установить ',
												{
													block: 'b-link',
													url: '#',
													content: 'bem-tools'
												}
											]
										},
										{
											elem: 'code',
											content: 'npm install bem'
										}
									]
								}
							]
                        },
                        {
                            block: 'title',
							mods: { size: '24' },
                            content: 'bem create'
                        },
						{
							block: 'b-text',
							content: [
								{
									elem: 'p',
									elemMods: { size: '18' },
									content: 'С помошью bem create можно создавать сущности:'
								}
							]
						},
						{
							block: 'b-text',
							mods: { size: '18' },
                            content: [
								 {
									elem: 'ul',
									content: [
										{
											elem: 'li',
											content: 'уровни переопределения'
										},
										{
											elem: 'li',
											content: 'блоки'
										},
										{
											elem: 'li',
											content: 'элементы'
										},
										{
											elem: 'li',
											content: 'модификаторы'
										}
									]
								}
							]
                        },
                        {
                            block: 'title',
							mods: { size: '24' },
                            content: 'Уровень переопределения'
                        },
						{
							block: 'b-text',
							mods: { size: '18' },
							content: [
								{
									elem: 'p',
									elemMods: { size: '18' },
									content: 'Уровень переопределения это директория, в которой хранятся реализации блоков и служебная директория .bem (опциональна).'
								},
								{
									elem: 'p',
									elemMods: { size: '18' },
									content: 'В .bem хранятся настройки этого уровня переопределения:'
								},
								{
									elem: 'ul',
									content: [
										{
											elem: 'li',
											content: 'соглашения об именовании'	
										},
										{
											elem: 'li',
											content: 'технологии по умолчанию'
										}
									]
								},
								{
									elem: 'p',
									elemMods: { size: '18' },
									content: 'Создание уровня переопределения blocks в текущей директории:'
								},
								{
									elem: 'ul',
									content: [
										{
											elem: 'code',
											content: 'bem create level blocks'	
										}
									]
								}
							]
						}
						// {	
						// 	block: 'b-text',
						// 	mods: { size: '36' },
						// 	content: 'Оставить комментарий'	
						// },
						// {
						// 	block: 'comments-form',
						// 	content: [
						// 		{
						// 			block: 'b-form-input',
						// 			mods: { theme: 'grey', autocomplete: 'yes', type: 'textarea', template: 'comments'},
						// 			content: { elem: 'input', attrs: { name: 'suggest' } }
						// 		},
						// 		{
						// 			block: 'b-comments-button',
						// 			content: 'Отправить от имени...'
						// 		}
						// 	]
					 //    }
                    ]
                },
                {
                    block: 'sidebar'
                }
            ]
        }       
    ]
}
])