import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';
import { ToolbarActive } from '../toolbar-active.enum';
import {
	faPlay, faPlusSquare, faWrench, faPencilAlt, faImage, faFont, faSquare
	, faMinusSquare, faPalette
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	// FontAwesome declarations:
	faPlay = faPlay;
	faPlusSquare = faPlusSquare;
	faWrench = faWrench;
	faPencilAlt = faPencilAlt;
	faImage = faImage;
	faFont = faFont;
	faSquare = faSquare;
	faPalette = faPalette;
	faMinusSquare = faMinusSquare;



	@Input() presentation: Presentation;

	@Input() activeSlide: number;
	@Output() public activeSlideChange: EventEmitter<number> = new EventEmitter();

	@Input() activeElement: Element;
	@Output() public activeElementChange: EventEmitter<Element> = new EventEmitter();

	@Input() isFullscreen: boolean;
	@Output() isFullscreenChange: EventEmitter<boolean> = new EventEmitter();

	@Input() activeToolbarElement: ToolbarActive;
	@Output() activeToolbarElementChange: EventEmitter<ToolbarActive> = new EventEmitter();

	// Workaround to use enum on template:
	public toolbarActive = ToolbarActive;
	public typeOfElement = TypeOfElement;
	public transition = Transition;
	// End of the workaround

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

	addNewTSlide() {
		var X: Slide = new Slide()
		X.addElement(new Element(TypeOfElement.titlefield, `<h2> Title </h2>`, 45, 15, { 'font-size': '30px', 'font-weight': 'bold' }));
		this.addNewSlide(X);
	}
	addNewTSSlide() {
		var X: Slide = new Slide()
		X.addElement(new Element(TypeOfElement.titlefield, `<h2> Title </h2>`, 10, 15, { 'font-size': '30px', 'font-weight': 'bold' }));
		X.addElement(new Element(TypeOfElement.titlefield, `<p> Subtitle </p>`,
			15, 30, { 'font-size': '24px', 'color': 'blue' }));
		this.addNewSlide(X);
	}
	addNewTSTSlide() {
		var X: Slide = new Slide()
		X.addElement(new Element(TypeOfElement.titlefield, `<h2> Title </h2>`, 10, 15, { 'font-size': '30px', 'font-weight': 'bold' }));
		X.addElement(new Element(TypeOfElement.titlefield, `<p> Subtitle </p>`,
			15, 30, { 'font-size': '24px', 'color': 'blue' }));
		X.addElement(new Element(TypeOfElement.textfield, `<p> Text </p>`,
			20, 45, { 'font-size': '15px', 'color': 'red' }));
		this.addNewSlide(X);
	}
	addNewBSlide() {
		this.addNewSlide();
	}

	addNewSlide(X: Slide = new Slide()) {
		this.presentation.addSlide(X);
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
	removeActiveElementBgColor() {
		delete this.activeElement.style['background-color'];
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
				this.activeToolbarElement = (this.activeToolbarElement === ToolbarActive.addElement)
					? ToolbarActive.none
					: ToolbarActive.addElement;
				break;
			case 'transition':

				this.activeToolbarElement = (this.activeToolbarElement === ToolbarActive.transition)
					? ToolbarActive.none
					: ToolbarActive.transition;
				break;

		}
		this.activeElement = undefined;
		this.activeElementChange.emit(this.activeElement);
		this.activeToolbarElementChange.emit(this.activeToolbarElement);
	}
	hexToRGB(hex) {

		if (hex.substring(0, 1) === '#') {
			hex = hex.substring(1);
		}

		const red = parseInt(hex.substring(0, 2), 16);
		const green = parseInt(hex.substring(2, 4), 16);
		const blue = parseInt(hex.substring(4), 16);
		const rgb: number[] = [red, green, blue];
		return rgb;


	}

	rgbToHex(rgb) {
		const hex = '#' + ((1 << 24) + (rgb['red'] << 16) + (rgb['green'] << 8) + rgb['blue']).toString(16).slice(1);
		return hex;
	}

	setRGB(hex) {
		const colors = this.hexToRGB(hex);
		this.presentation.slides[this.activeSlide].bgcolor['red'] = colors[0];
		this.presentation.slides[this.activeSlide].bgcolor['green'] = colors[1];
		this.presentation.slides[this.activeSlide].bgcolor['blue'] = colors[2];
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


	printPosition() {
		console.log(this.activeElement.style['left']);
		this.activeElement.style['left'] = `${this.activeElement.style['left']}%`;
		this.activeElement.style['top'] = `${this.activeElement.style['top']}%`;
		console.log(this.activeElement.style['left']);
	}
}
