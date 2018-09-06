import { Component, OnInit } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';

@Component({
	selector: 'app-edit-presentation',
	templateUrl: './edit-presentation.component.html',
	styleUrls: ['./edit-presentation.component.scss']
})
export class EditPresentationComponent implements OnInit {

	public presentation: Presentation;
	public activeSlide = 0;
	public test: any;
	constructor() { }

	debug() {
		console.log(this.activeSlide);
	}
	ngOnInit() {
		this.presentation = new Presentation(undefined, 'Not logged yet', undefined);
		const first_slide: Slide = new Slide([], undefined, {'red': 196, 'green': 196, 'blue': 196}); // ffaabb
		first_slide.addElement(new Element(TypeOfElement.textbox, `<h1 id="title" (dblclick) ="fireEventEditar($event)"
																						(click)="fireEventMover($event)"> Meu Título</h1>`));
		first_slide.addElement(new Element(TypeOfElement.textbox, `<p> Meu texto Meu texto Meu texto Meu texto Meu texto
		Meu texto Meu texto Meu texto Meu texto Meu texto	Meu texto Meu texto Meu texto Meu texto Meu
		 texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto		Meu texto
			Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto
			Meu texto Meu texto </p>`));

		this.presentation.addSlide(first_slide);
		console.log(this.presentation);
	}

}
