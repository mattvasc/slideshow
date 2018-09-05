import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';


@Component({
	selector: 'app-thumbnails-menu',
	templateUrl: './thumbnails-menu.component.html',
	styleUrls: ['./thumbnails-menu.component.scss']
})
export class ThumbnailsMenuComponent implements OnInit {
	@Input() presentation: Presentation;
	@Input() activeSlide: number;
	@Output() public activeSlideChange = new EventEmitter();

	constructor() { }

	ngOnInit() {
		this.activeSlide = 0;
		this.activeSlideChange.emit(0);
	}
	renderList() {

	}
	changeCurrentSlide(index: number) {
		this.activeSlide = index;
		this.activeSlideChange.emit(index);
	}
}
