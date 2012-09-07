([
// {
//     block: 'i-global',
//     params: {
//         'key': 'val'
//     }
// },
{
    block: 'b-page',
    title: 'БЭМ | Команда',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_team.css', ie: false },
        { elem: 'css', url: '_team.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_team.js' },
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
							block: 'b-text',
							mods: { size: '36' },
							content: 'Команда'
						},
						{
							block: 'team',
							content: [
								{
								    elem: 'first-string',
									content: [
										{
											block: 'user',
											mods: { position: 'first' },
											content: [
											{
												block: 'b-link',
												mods: { type: 'userpic' },
												url: '#',
												content: [
													{
														block: 'user-avatar',
														mix: [{ block: 'user', elem : 'user-avatar' }],
														tag: 'img',
														attrs: { src: 'blocks/user/__user-avatar/user-avatar.png', alt: 'Виталий Харисов' }
													}
												]
											},
											{
												elem: 'name',
												content: 'Виталий Харисов'
											},
											{
												elem: 'skype',
												content: [
													{
														elem: 'user-skype-icon'
													},
													 'vitaly.harisov'
												]
											},
											{
												elem: 'mail',
												content: [
													{
														block: 'b-link',
														url: 'mailto:vitaly@harisov.name',
														content: 'vitaly@harisov.name'
													}
												]
											},
											{
												elem: 'mail',
												content: [
													{
														block: 'b-link',
														target: '_blank',
														url: '//vitaly.harisov.name',
														content: 'vitaly.harisov.name'
													}
												]
											},
											{
												elem: 'specialization',
												content: 'bem-tools, bem-method.'
											}
										]
									},
								    {
										block: 'user',
										content: [
											{
												block: 'b-link',
												mods: { type: 'userpic' },
												url: '#',
												content: [
													{
														block: 'user-avatar',
														mix: [{ block: 'user', elem : 'user-avatar' }],
														tag: 'img',
														attrs: { src: 'blocks/user/__user-avatar/user-avatar-2.png', alt: 'Евгений Батовский' }
													}
												]
											},
											{
												elem: 'name',
												content: [
													{
														block: 'b-link',
														mods: { type: 'username' },
														url: '#',
														content: 'Евгений Батовский'
													}
												]
											},
											{
												elem: 'mail',
												content: [
													{
														block: 'b-link',
														url: 'mailto:eugene@batovsky.com',
														content: 'eugene@batovsky.com'
													}
												]
											},
											{
												elem: 'mail',
												content: [
													{
														block: 'b-link',
														target: '_blank',
														url: '//batovsky.com',
														content: 'batovsky.com'
													}
												]
											},
											{
												elem: 'specialization',
												content: 'guard-livereload, statusdashboard, bem-bl-test.'
											}
										]
								    },
								    {
										block: 'user',
										mods: { position: 'last' },
										content: [
											{
												block: 'b-link',
												mods: { type: 'userpic' },
												url: '#',
												content: [
													{
														block: 'user-avatar',
														mix: [{ block: 'user', elem : 'user-avatar' }],
														tag: 'img',
														attrs: { src: 'blocks/user/__user-avatar/user-avatar-3.png', alt: 'Сергей Бережной' }
													}
												]
											},
											{
												elem: 'name',
												content: [
													{
														block: 'b-link',
														mods: { type: 'username' },
														url: '#',
														content: 'Сергей Бережной'
													}
												]
											},
											{
												elem: 'skype',
												content: [
													{
														elem: 'user-skype-icon'
													},
													 'mr.veget'
												]
											},
											{
												elem: 'mail',
												content: [
													{
														block: 'b-link',
														url: 'mailto:veget@yandex-team.ru',
														content: 'veget@yandex-team.ru'
													}
												]
											},
											{
												elem: 'icq',
												content: [
													{
														elem: 'user-icq-icon'
													},
													{
														block: 'b-text',
														mods: { type: 'icq' },
														url: '#',
														content: '132196472'
													}
												]
											},
											{
												elem: 'specialization',
												content: 'jspath, bem-bl, bemidea-bemhtml, javascript'
											}
										]
								    }
								]
							    },
							    {
									block: 'user',
									mods: { position: 'first' },
									content: [
										{
											block: 'b-link',
											mods: { type: 'userpic' },
											url: '#',
											content: [
												{
													block: 'user-avatar',
													mix: [{ block: 'user', elem : 'user-avatar' }],
													tag: 'img',
													attrs: { src: 'blocks/user/__user-avatar/user-avatar-4.png', alt: 'Константин Константинопольский' }
												}
											]
										},
										{
											elem: 'name',
											content: [
												{
													block: 'b-link',
													mods: { type: 'username' },
													url: '#',
													content: 'Константин Константинопольский'
												}
											]
										},
										{
											elem: 'skype',
											content: [
												{
													elem: 'user-skype-icon'
												},
												 'konstanta'
											]
										},
										{
											block: 'b-link',
											target: '_blank',
											url: '//kostik.livejournal.com',
											content: [
												{
													block: 'user-lj-icon',
													mix: [{ block: 'user', elem : 'user-lj-icon' }],
												},
												 'kostik'
											]
										}
								    ]
							    },
							    {
									block: 'user',
									content: [
										{
											block: 'b-link',
											mods: { type: 'userpic' },
											url: '#',
											content: [
												{
													block: 'user-avatar',
													mix: [{ block: 'user', elem : 'user-avatar' }],
													tag: 'img',
													attrs: { src: 'blocks/user/__user-avatar/user-avatar-5.png', alt: 'Георгий Мостоловица' }
												}
											]
										},
										{
											elem: 'name',
											content: [
												{
													block: 'b-link',
													mods: { type: 'username' },
													url: '#',
													content: 'Георгий Мостоловица'
												}
											]
										},
										{
											block: 'b-link',
											target: '_blank',
											url: '//twitter.com/gfranco',
											content: [
												{
													block: 'user-twitter-icon',
													mix: [{ block: 'user', elem : 'user-twitter-icon' }],
												},
												 'gfranco'
											]
										},
										{
											elem: 'specialization',
											content: 'Локализация на болгарский.'
										}
									]
							    },
							    {
								 	block: 'user',
									mods: { position: 'last' },
									content: [
										{
											block: 'b-link',
											mods: { type: 'userpic' },
											url: '#',
											content: [
												{
													block: 'user-avatar',
													mix: [{ block: 'user', elem : 'user-avatar' }],
													tag: 'img',
													attrs: { src: 'blocks/user/__user-avatar/user-avatar-6.png', alt: 'Кир Белевич' }
												}
											]
										},
										{
											elem: 'name',
											content: [
												{
													block: 'b-link',
													mods: { type: 'username' },
													url: '#',
													content: 'Кир Белевич'
												}
											]
										},
										{
											elem: 'specialization',
											content: 'bem-bl.'
										}
									]
							    }
						   	]
						}
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