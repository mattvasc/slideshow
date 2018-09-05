import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

	el: Element = new Element(0, '<p> Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto	Meu texto Meu texto Meu texto Meu texto Meu 	 texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto		Meu texto 		Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto </p>');
	elements = [];
	
	constructor() { }

	ngOnInit() {
		this.elements.push(this.el);
	}
	render() {
	}
}
