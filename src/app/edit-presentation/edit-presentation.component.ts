import { Component, OnInit } from '@angular/core';
import { Presentation } from '../presentation';
import { Slide } from '../slide';
import { Element, Type } from '../element';

@Component({
	selector: 'app-edit-presentation',
	templateUrl: './edit-presentation.component.html',
	styleUrls: ['./edit-presentation.component.scss']
})
export class EditPresentationComponent implements OnInit {

	constructor() { }
	public presentation: Presentation;
	ngOnInit() {
		this.presentation = new Presentation(undefined, 'Not logged yet', undefined);
		const first_slide: Slide = new Slide([], undefined, '#FFAABB');
		first_slide.addElement(new Element(Type.textbox, `<h1 id="title" (dblclick) ="fireEventEditar($event)"
																						(click)="fireEventMover($event)"> Meu Título</h1>`));
		first_slide.addElement(new Element(Type.textbox, `<p> Meu texto Meu texto Meu texto Meu texto Meu texto
		Meu texto Meu texto Meu texto Meu texto Meu texto	Meu texto Meu texto Meu texto Meu texto Meu
		 texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto		Meu texto
			Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto
			Meu texto Meu texto </p>`));

		this.presentation.addSlide(first_slide);
		console.log(this.presentation);
	}

}
