import { User } from './user';

import { Presentation, Visibility } from './presentation';
import { Element, TypeOfElement } from './element';
import { Slide, Transition } from './slide';

export const mockedUsers: User[] = [new User('Mr.Nice', 'nicenice'),
new User('Mr.Nice2', 'nicenice2')
];
// cada apresentação contem : - conjunto de slides - cada slide tem - elementos
// 							 - owner                               - transição
// 							 - visibilidade					       - conjunto de rgb


export const mockedSlides: Slide = new Slide([], Transition.default);
mockedSlides.addElement(new Element(TypeOfElement.titlefield, `<h2> Meu Título </h2>`, 43, 15));
mockedSlides.addElement(new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`, 43, 30,
{ 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue' }));
mockedSlides.addElement(new Element(TypeOfElement.image, '<img src="https://picsum.photos/150/150?random">', 43, 60));

export const mockedPresentations: Presentation = new Presentation([], 'Mr.Nice', Visibility.public,
'http://rugbyinafrica.org/2017/08/backgrounds-for-powerpoint/?showimage_zmdh=backgrounds+for+powerpoint.jpg');
mockedPresentations.addSlide(mockedSlides);

export const mockedPresentations2: Presentation = new Presentation([], 'Mr.Nice2', Visibility.public,
'http://rugbyinafrica.org/2017/08/backgrounds-for-powerpoint/?showimage_zmdh=backgrounds+for+powerpoint.jpg');
mockedPresentations2.addSlide(mockedSlides);
