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
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', value: 'БЭМ (Блок, Элемент, Модификатор) – это методология и инструментарий для разработки сайтов в единой предметной области' }},
        { elem: 'meta', attrs: { name: 'keywords', value: 'бэм, бем, bem, блок элемент модификатор, bemjson, bemhtml, i-bem, i-bem.js, borschik, bem tools, csso' }}
    ],
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'inner',
                    content: [
                        {
                              block: 'b-menu-horiz',
                              mods: { layout: 'simple' },
                              separator: ' | ', 
                              content: [
                                {
                                  elem: 'item',
                                  content: 'English'
                                },
                                {
                                  elem: 'item',
                                  content: {
                                    block: 'b-link', url: '#russian', content: 'Русский'
                                  }
                                }
                              ]             
                        },
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
                }
			]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'description',
                    content: [
                        {
							elem: 'link',
							content: [
								{
                                    block: 'b-link',
        							mix: [{ block: 'description', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'Detailed description of BEM'
    							}
						    ]	
                        },
                        {
							elem: 'inner',
                            content: 'BEM stands for “Block”, “Element”, “Modifier”. It is a front-end methodology: a new way of thinking when developing Web interfaces. This article will elaborate on the theory as well as the practice of building websites at Yandex—one of the leading internet companies in Russia.'
                        }
                    ]
                },
                {
                    block: 'history',
                    content: [
                        {
                            block: 'b-link',
							mix: [{ block: 'description', elem : 'link-inner' }],
                            url: '#',
                            content: 'History'
                        },
                        {
                            content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                        },
                        {
                            content: 'As our ambitions, complexity and performance requirements grew, we aimed at replacing XSLT and Perl templates with a JS-based declarative templating DSL, built on top of Node.js. Along with those efforts, we looked into simplifying development workflow and developed a bunch of command-line tools that already helped us manage front-end code on the file system, preprocess CSS and JavaScript code, and so on, and so forth.'
                        },
                        {
                            content: 'Some parts of the BEM stack started as open source projects, while others (like the UI component library) are being gradually open sourced. Our goal is to publish most of them during 2012.'
                        },
                        {
                            content: 'BEM is a toolkit that will help address and resolve front-end issues quickly and effectively. It is available in a range of reusable code libraries—all of them are hosted on Github and are completely open source.'
                        },
                    ]
                },
                {
                    block: 'how-to-start',
                    content: [
                        {
							elem: 'link',
							content: [
								{						
                                    block: 'b-link',
                                    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'How to start?'
							    }
						    ]	
                        },
                        {
                            content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2). As our ambitions, complexity and performance requirements grew, we aimed at replacing XSLT and Perl templates with a JS-based declarative templating DSL, built on top of Node.js. Along with those efforts, we looked into simplifying development workflow and developed a bunch of command-line tools that already helped us manage front-end code on the file system, preprocess CSS and JavaScript code, and so on, and so forth. Some parts of the BEM stack started as open source projects, while others (like the UI component library) are being gradually open sourced. Our goal is to publish most of them during 2012. BEM is a toolkit that will help address and resolve front-end issues quickly and effectively. It is available in a range of reusable code libraries—all of them are hosted on Github and are completely open source.'
                        }
                    ]
                },
                {
                    block: 'tools',
                    content: [
                        {
							elem: 'link',
							content: [
								{							
                                    block: 'b-link',
        							mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'Tools'
							    }
						    ]	
                        },
                        {
                            elem: 'tool',
							mods: { type: 'col-1'},
                            content: [
                                {
                                    block: 'b-link',
									mix: [{ block: 'description', elem : 'link-inner' }],
                                    url: '#',
                                    content: 'BEM tools'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        },
                        {
                            elem: 'tool',
							mods: { type: 'col-2'},
                            content: [
                                {
                                    block: 'b-link',
									mix: [{ block: 'description', elem : 'link-inner' }],								
                                    url: '#',
                                    content: 'CSSO'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        },
                        {
                            block: 'b-menu-vert',
							mods: { type: 'col-3'},
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'cssp'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'imgo'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'setochka'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bem-django'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bem-haml'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'plug-ins for IDE and others'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'scripts: prettyprint, convert, etc.'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bemlint'
                                    }
                                }
                            ]
                        }
                    ]
                },
				{
					block: 'tech-wrapper',
                    content: [
                {
                    block: 'technologies',
                    content: [
                        {
							elem: 'link',
							content: [
								{							
                            block: 'b-link',
						    mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                            url: '#',
                            content: 'Technologies'
							}
						]	
                        },
                        {
							elem: 'info',
                            content: '* БЭМ не накладывает ограничений на используемые технологии, его можно применять с любыми технологиями'
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'CSS'
                                },
                                {
								    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'JS'
                                },
                                {
								    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'BEMHTML'
                                },
                                {
								    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        },
                        {
                            elem: 'tech',
                            content: [
                                {
                                    block: 'b-link',
                                    url: '#',
                                    content: 'Other technologies'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2).'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'libraries',
                    content: [
                        {
							elem: 'link',
							content: [
								{							
                            block: 'b-link',
							mix: [{ block: 'how-to-start', elem : 'link-inner' }],
                            url: '#',
                            content: 'Libraries'
							}
						]	
                        },
                        {
                            elem: 'lib',
                            content: [
                                {
                                    block: 'b-link',
									mods: { lib: 'name'},
                                    url: '#',
                                    content: 'bem-bl'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2). As our ambitions, complexity and performance requirements grew, we aimed at replacing XSLT and Perl templates with a JS-based declarative templating DSL, built on top of Node.js. Along with those efforts, we looked into simplifying development workflow and developed a bunch of command-line tools that already helped us manage front-end code on the file system, preprocess CSS and JavaScript code, and so on, and so forth. Some parts of the BEM stack started as open source projects, while others (like the UI component library) are being gradually open sourced. Our goal is to publish most of them during 2012. BEM is a toolkit that will help address and resolve front-end issues quickly and effectively. It is available in a range of reusable code libraries—all of them are hosted on Github and are completely open source.'
                                }
                            ]
                        },
                        {
                            elem: 'lib',
                            content: [
                                {
                                    block: 'b-link',
									mods: { lib: 'name'},
                                    url: '#',
                                    content: 'bootstrap-bl'
                                },
                                {
                                    content: 'We first began sketching out the internal front-end framework at Yandex around the year 2007, starting with a robust CSS naming convention, and a file system layout that was associated with it. Since the naming convention was well-structured, it seemed suitable to develop certain JavaScript helpers (to work with the DOM and CSS classes in particular, on a higher level of abstraction). We then used those approaches to build an internal library of UI components that could be shared among our various websites and rich applications, built using different technology stacks (XML/XSLT, Python/Django, Perl/TT2). As our ambitions, complexity and performance requirements grew, we aimed at replacing XSLT and Perl templates with a JS-based declarative templating DSL, built on top of Node.js. Along with those efforts, we looked into simplifying development workflow and developed a bunch of command-line tools that already helped us manage front-end code on the file system, preprocess CSS and JavaScript code, and so on, and so forth. Some parts of the BEM stack started as open source projects, while others (like the UI component library) are being gradually open sourced. Our goal is to publish most of them during 2012. BEM is a toolkit that will help address and resolve front-end issues quickly and effectively. It is available in a range of reusable code libraries—all of them are hosted on Github and are completely open source.'
                                }
                            ]
                        }
                     ]
                  }
			    ]
			  },				
              { 
                    block: 'portfolio',
                    content: [
						{
							elem: 'title',
							content: 'Companies already using BEM'
						},
						{
							block: 'companies',
							content: [						
							{
								block: 'b-link',
								mods: { cmp: 'yandex'},
								url: '#'
							},						
							{
								block: 'b-link',
								mods: { cmp: 'thk'},
								url: '#'
							},
							{
								block: 'b-link',
								mods: { cmp: 'hh'},
								url: '#'
							},
							{
								block: 'b-link',
								mods: { cmp: 'rambler'},
								url: '#'
							},
							{
								block: 'b-link',
								mods: { cmp: 'yota'},
								url: '#'
							},		
							{
								block: 'b-link',
								mods: { cmp: 'lj'},
								url: '#'
							},
							{
								block: 'b-link',
								mods: { cmp: 'lenta'},
								url: '#'
							}								
						  ]
						}	
                     ]
                }
            ]
        },
        {

                    block: 'footer',
                    content: [
                        {
                            elem: 'tech',
                            content: [
						{
                            block: 'b-menu-vert',
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bemlint'
                                    }
                                 }
							   ]
						     }
                           ]
                         },
						{
                            elem: 'tech',
                            content: [
						{
                            block: 'b-menu-vert',
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bemlint'
                                    }
                                 }
							   ]
						     }
                           ]
                         },
						{
                            elem: 'tech',
                            content: [
						{
                            block: 'b-menu-vert',
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bemlint'
                                    }
                                 }
							   ]
						     }
                           ]
                         },
						{
                            elem: 'tech',
                            content: [
						{
                            block: 'b-menu-vert',
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'borschik'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'shmakowiki'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'b-link',
                                        url: '#',
                                        content: 'bemlint'
                                    }
                                 }
							   ]
						     }
                           ]
                         },
						 {
                            block: 'copyright',
							content: 'Built with BEM'
                         }   						 
                       ]

        } 
    ]
}
])