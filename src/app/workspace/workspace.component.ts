import { Component, OnInit, Input } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide'; 
import { Element, TypeOfElement } from '../element';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

	@Input() presentation;
	@Input() activeSlide;

	constructor() { }

	ngOnInit() {
	}
	render() {
		// this.slide.render();
	}
}
