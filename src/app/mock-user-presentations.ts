import { User } from './user';

import { Presentation, Visibility} from './presentation';
import { TypeOfElement } from './element';
import { Transition } from './slide';

export const USERS: User[] = [ new User('Mr.Nice', 'nicenice'),
		new User('Mr.Nice2', 'nicenice2')
	];
	// cada apresentação contem : - conjunto de slides - cada slide tem - elementos
	// 							 - owner                               - transição
	// 							 - visibilidade					       - conjunto de rgb
export const PRESENTATIONS: Presentation[] = [
		{
			// conjunto de paginas
			slides: [
						// cada uma desses conjuntos é uma pagina do slide
						{
							elements: [
										{
											typeOfElement: TypeOfElement.titlefield,
											data: '<h2> Meu Título </h2>',
											posX: 43,
											posY: 15,
											style: {},
										},
										{
											typeOfElement: TypeOfElement.textfield,
											data: '<p> Lorem Ipsum </p>',
											posX: 43,
											posY: 30,
											style: { 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue'},
										},
										{
											typeOfElement: '',
											data: '<h2> Meu Título </h2>',
											posX: 43,
											posY: 15,
											style: {'position': 'absolute', 'left': `${posX}%`, 'top': `${posY}%`},
										},
									],
							transition: Transition.slideLeft,
							bgcolor: {
										red: 196,
										green: 196,
										blue: 196
									}
						},
						{
							elements: [ {}, {}, {} ],
							transition: '',
							bgcolor: {
										red: 196,
										green: 196,
										blue: 196
									}
						},
						{
							elements: [{}, {}, {}],
							transition: '',
							bgcolor: {
										red: 196,
										green: 196,
										blue: 196
									}
						},
					],
			owner: 'mr.nice',
			visibility: Visibility.public,
		},

		{
			slides: [
						{
							elements: [{}, {}, {}],
							transition: '',
							bgcolor: {
										red: '',
										green: '',
										blue: ''
									}
						},

						{
							elements: [{}, {}, {}],
							transition: '',
							bgcolor: {
										red: '',
										green: '',
										blue: ''
									}
						},

						{
							elements: [{}, {}, {}],
							transition: '',
							bgcolor: {
										red: '',
										green: '',
										blue: ''
									}
						},
					],
			owner: 'mr.nice',
			visibility: Visibility.public,
		},
	];