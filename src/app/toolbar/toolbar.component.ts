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

	public esconderColorPicker = true;

	constructor() { }

	ngOnInit() {
	}

	addNewSlide() {
		this.presentation.addSlide();
	}
	removeSlide() {
		this.presentation.slides.splice(this.activeSlide, 1);
		if ( this.activeSlide === this.presentation.slides.length && this.activeSlide !== 0) {
			this.activeSlide--;
			this.activeSlideChange.emit(this.activeSlide);
		}
		if ( this.presentation.slides.length === 0) {
			this.addNewSlide();
		}

	}
}
