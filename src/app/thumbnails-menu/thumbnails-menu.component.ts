import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-thumbnails-menu',
	templateUrl: './thumbnails-menu.component.html',
	styleUrls: ['./thumbnails-menu.component.scss']
})
export class ThumbnailsMenuComponent implements OnInit {
	@Input() presentation;
	@Input() activeSlide;

	constructor() { }

	ngOnInit() {
	}
	renderList() {

	}
	changeCurrentSlide() {
		// workspace.active-slide = x;
		// worspace.render()
	}
}
