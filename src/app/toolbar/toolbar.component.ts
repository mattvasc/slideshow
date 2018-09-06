import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element } from '../element';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	@Input() presentation: Presentation;

	@Input() activeSlide: number;
	@Output() public activeSlideChange = new EventEmitter();

	@Input() activeElement: Element;
	@Output() public activeElementChange = new EventEmitter();

	public esconderColorPicker = true;

	constructor() { }

	ngOnInit() {
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
}
