import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() presentation: Presentation;

	@Input() activeSlide: number;
	@Output() public activeSlideChange: EventEmitter<number> = new EventEmitter();

	@Input() activeElement: Element;
	@Output() public activeElementChange: EventEmitter<Element> = new EventEmitter();

	@Input() hideColorPickerMenu: boolean;
	@Output() hideColorPickerMenuChange: EventEmitter<boolean> = new EventEmitter();

	@Input() hideAddNewElementMenu: boolean;
	@Output() hideAddNewElementMenuChange: EventEmitter<boolean> = new EventEmitter();

	@Input() isFullscreen: boolean;
	@Output() isFullscreenChange: EventEmitter<boolean> = new EventEmitter();

	public typeOfElement = TypeOfElement;

	private elem;

	constructor() { }


	ngOnInit() {
		this.elem = document.documentElement;
	}

	addNewElement(type: TypeOfElement) {
		switch (type) {
			case TypeOfElement.textfield:
				this.presentation.slides[this.activeSlide].addElement(new Element(TypeOfElement.textfield, `<p>Lorem Ipsum</p>`));
				break;
			case TypeOfElement.titlefield:
				this.presentation.slides[this.activeSlide].addElement(new Element(TypeOfElement.titlefield, `<h2>Lorem Ipsum</h2>`));
				break;
			case TypeOfElement.image:
				this.presentation.slides[this.activeSlide].addElement(
					new Element(TypeOfElement.image, `<img src="https://picsum.photos/150/150?image=${Math.floor(Math.random() * 1084)}">`));
				break;
			case TypeOfElement.bulletlist:
				break;
		}
	}

	addNewSlide() {
		this.presentation.addSlide();
		// Jumping to the last created slide:
		this.activeSlide = this.presentation.slides.length - 1;
		this.activeSlideChange.emit(this.activeSlide);
		// Unselecting a element, if any...
		this.activeElement = undefined;
		this.activeElementChange.emit(this.activeElement);
	}
	removeSlide() {
		this.presentation.slides.splice(this.activeSlide, 1);
		if (this.activeSlide === this.presentation.slides.length && this.activeSlide !== 0) {
			this.activeSlide--;
			this.activeSlideChange.emit(this.activeSlide);
		}
		if (this.presentation.slides.length === 0) {
			this.addNewSlide();
		}

		this.activeElement = undefined;
		this.activeElementChange.emit(this.activeElement);

	}

	removeElement() {
		this.presentation.slides[this.activeSlide].elements.splice(
			this.presentation.slides[this.activeSlide].elements.indexOf(this.activeElement),
			1);
		this.activeElement = undefined;
		this.activeElementChange.emit(this.activeElement);
	}
	deleteElement() {
		console.log('lerigo');
	}
	debug() {
		console.log(this.presentation.slides[
			this.activeSlide].elements[this.presentation.slides[this.activeSlide].elements.indexOf(this.activeElement)].type);
	}
	changeText() {
		const tag = (this.activeElement.type === TypeOfElement.textfield) ? 'p' : 'h2';
		const regex = new RegExp(`<${tag}.*>(.*)<\/${tag}>`, 'imu');
		console.log(this.activeElement.data.toString());
		console.log(regex.exec(this.activeElement.data.toString()));

		const returno = prompt('Type the text:', regex.exec(this.activeElement.data.toString())[1]);
		if (returno != null) {
			this.activeElement.data = `<${tag}>${returno}</${tag}>`;
		}
	}
	changeImage() {
		const regex = /src=\"(.*)\"/;
		const returno = prompt('Input the URL of the Image:', regex.exec(this.activeElement.data.toString())[1]);
		if (returno != null) {
			this.activeElement.data = `<img src="${returno}"></img>`;
		}
	}
	toogleMenu(witch_one) {
		switch (witch_one) {
			case 'element':
				this.hideAddNewElementMenu = !this.hideAddNewElementMenu;
				this.hideColorPickerMenu = true;
				break;
			case 'bgcolor':
				this.hideColorPickerMenu = !this.hideColorPickerMenu;
				this.hideAddNewElementMenu = true;
				break;

		}
		this.activeElement = undefined;
		this.activeElementChange.emit(this.activeElement);
		this.hideAddNewElementMenuChange.emit(this.hideAddNewElementMenu);
		this.hideColorPickerMenuChange.emit(this.hideColorPickerMenu);
	}

	/* Go to fullscreen */
	goFull() {
		this.isFullscreen = true;
		this.isFullscreenChange.emit(this.isFullscreen);

		if (this.elem.requestFullscreen) {
			this.elem.requestFullscreen();
		} else if (this.elem.mozRequestFullScreen) { /* Firefox */
			this.elem.mozRequestFullScreen();
		} else if (this.elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			this.elem.webkitRequestFullscreen();
		} else if (this.elem.msRequestFullscreen) { /* IE/Edge */
			this.elem.msRequestFullscreen();
		}
}


}
