import { Component, OnInit , ViewChild } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
	selector: 'app-edit-presentation',
	templateUrl: './edit-presentation.component.html',
	styleUrls: ['./edit-presentation.component.scss']
})
export class EditPresentationComponent implements OnInit {

	public presentation: Presentation;
	public activeSlide = 0;
	public activeElement: Element = undefined;
	public test: any;

	@ViewChild(ToolbarComponent) toolbar: ToolbarComponent;
	constructor() { }

	debug() {
		this.toolbar.deleteElement();
	}
	ngOnInit() {
		this.presentation = new Presentation(undefined, 'Not logged yet', undefined);
		const first_slide: Slide = new Slide([], undefined, {'red': 196, 'green': 196, 'blue': 196}); // ffaabb
		first_slide.addElement(new Element(TypeOfElement.textbox, `<h1 id="title"> Meu Título</h1>`));
		first_slide.addElement(new Element(TypeOfElement.textbox, `<p> Meu texto Meu texto Meu texto Meu texto Meu texto
		Meu texto Meu texto Meu texto Meu texto Meu texto	Meu texto Meu texto Meu texto Meu texto Meu
		 texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto		Meu texto
			Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto Meu texto
			Meu texto Meu texto </p>`));
		first_slide.addElement(new Element(TypeOfElement.image, '<img src="https://picsum.photos/150/150?random">'));

		this.presentation.addSlide(first_slide);
		console.log(this.presentation);
	}
	unselectElement() {
		this.activeElement = undefined;
	}
}
