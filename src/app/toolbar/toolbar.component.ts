import { Component, OnInit, Input } from '@angular/core';
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
	constructor() { }

	ngOnInit() {
	}

	addNewSlide() {
		this.presentation.addSlide();
	}
}
