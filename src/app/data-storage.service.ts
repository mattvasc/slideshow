import { Injectable } from '@angular/core';
import { Presentation, Visibility } from './presentation';
import { User } from './user';
import { Element, TypeOfElement } from './element';
import { Slide, Transition } from './slide';


@Injectable({
	providedIn: 'root'
})
export class DataStorageService {
	public presentation: Presentation;
	public user: User;
	public Users: User[];

	constructor() {
		const backgrounds: String[] = [
			'', '',
			'https://wallpapershome.com/images/pages/pic_h/11925.jpg',
			'http://rugbyinafrica.org/2017/08/backgrounds-for-powerpoint/?showimage_zmdh=backgrounds+for+powerpoint.jpg'
		];

		this.Users = [new User('Mr.Nice', 'nicenice'),
		new User('teste', 'teste')];

		this.Users[0].addPresentation(
			new Presentation([new Slide([new Element(TypeOfElement.titlefield, `<h2> Apresentação X </h2>`, 43, 15),
			new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`, 43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'green' }),
			new Element(TypeOfElement.image, `<img src="https://picsum.photos/150/150?image=${Math.floor(Math.random() * 1084)}">`, 43, 60)
			])], undefined, Visibility.public, backgrounds[Math.floor(Math.random() * backgrounds.length)]));



		this.Users[0].addPresentation(
			new Presentation([new Slide([new Element(TypeOfElement.titlefield, `<h2> Apresentação Y </h2>`, 43, 15),
			new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`, 43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue' }),
			new Element(TypeOfElement.image, `<img src="https://picsum.photos/150/150?image=${Math.floor(Math.random() * 1084)}">`, 43, 60)
			])], undefined, Visibility.public, backgrounds[Math.floor(Math.random() * backgrounds.length)]));



		this.Users[1].addPresentation(
			new Presentation([new Slide([new Element(TypeOfElement.titlefield, `<h2> Apresentação Z </h2>`, 43, 15),
			new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`, 43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'orange' }),
			new Element(TypeOfElement.image, `<img src="https://picsum.photos/150/150?image=${Math.floor(Math.random() * 1084)}">`, 43, 60)
			])], undefined, Visibility.public, backgrounds[Math.floor(Math.random() * backgrounds.length)]));

		this.Users[1].addPresentation(
			new Presentation([new Slide([new Element(TypeOfElement.titlefield, `<h2> Apresentação W </h2>`, 43, 15),
			new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`, 43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'brown' }),
			new Element(TypeOfElement.image, `<img src="https://picsum.photos/150/150?image=${Math.floor(Math.random() * 1084)}">`, 43, 60)
			])], undefined, Visibility.public, backgrounds[Math.floor(Math.random() * backgrounds.length)]
			));

		this.presentation = new Presentation(undefined, 'Not logged yet', undefined,
			'http://rugbyinafrica.org/2017/08/backgrounds-for-powerpoint/?showimage_zmdh=backgrounds+for+powerpoint.jpg');
		const first_slide: Slide = new Slide([], Transition.slideLeft, { 'red': 196, 'green': 196, 'blue': 196 }); // ffaabb
		first_slide.addElement(new Element(TypeOfElement.titlefield, `<h2> Meu Título </h2>`, 43, 15));
		first_slide.addElement(new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`,
			43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue' }));

		first_slide.addElement(new Element(TypeOfElement.image, '<img src="https://picsum.photos/150/150?random">', 43, 60));
		this.presentation.addSlide(first_slide);

	}

	login(x: User): boolean {
		for (let i = 0; i < this.Users.length; i++) {
			console.log('Para i = ' + i + '\nx = \n' + x + '\nthis.users[i] = \n' + this.Users[i]);

			if (x.name === this.Users[i].name && x.password === this.Users[i].password) {
				this.user = this.Users[i];
				return true;
			}
		}
		return false;
	}
}
