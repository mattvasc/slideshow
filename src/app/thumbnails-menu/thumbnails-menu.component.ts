import { Component, OnInit, Input } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide'; 
import { Element, TypeOfElement } from '../element';


@Component({
	selector: 'app-thumbnails-menu',
	templateUrl: './thumbnails-menu.component.html',
	styleUrls: ['./thumbnails-menu.component.scss']
})
export class ThumbnailsMenuComponent implements OnInit {
	@Input() presentation;
	@Input() activeSlide;

	constructor() { }

	onClick() {
		console.log(this.presentation);
	}
	ngOnInit() {
		this.activeSlide = 0;
	}
	renderList() {

	}
	changeCurrentSlide(index: number) {
		this.activeSlide = index;
	}
}
