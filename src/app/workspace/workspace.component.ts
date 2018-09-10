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

	@Input() activeElement: Element;
	@Output() public activeElementChange = new EventEmitter();

	@Input() hideColorPickerMenu: boolean;
	@Output() hideColorPickerMenuChange = new EventEmitter();

	@Input() hideAddNewElementMenu: boolean;
	@Output() hideAddNewElementMenuChange = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}
	render() {
		// this.slide.render();
	}
	selectElement(event) {
		this.activeElement = this.presentation.slides[this.activeSlide].elements[event.target.parentElement.id.match(/[0-9]/)[0]];
		this.hideAddNewElementMenu = true;
		this.hideColorPickerMenu = true;
		this.activeElementChange.emit(this.activeElement);
		this.hideAddNewElementMenuChange.emit(this.hideAddNewElementMenu);
		this.hideColorPickerMenuChange.emit(this.hideColorPickerMenu);
	}
	unselectElement(event) {
		if (event.target.id === 'page' || event.target.id === 'workspace' ) {
			this.activeElement = undefined;
			this.activeElementChange.emit(this.activeElement);
		}
	}
	fireEventEditar(e) {
		// Gera bloco de texto editavel com as mesmas dimensões e posição que o <p> por cima para editar ou gerar modal no meio da tela
		console.log(e.clientX);
		console.log(e.clientY);
	}
	fireEventMover(e) {
		// pegar posição do mouse global e verificar se a posição é uma das bordas do elemento
		// caso seja chamar função de redimensionar(?) - extra (?)
		console.log(e.clientX);
		console.log(e.screenX);
		console.log(e.clientY);
		console.log(e.screenY);
	}
	// funções notáveis
	// ao clicar fora da pagina do slide, se há slide em modo de edição, renderizar e sair da edição
	// ao clicar em algum elemento, chamar função
	// -> caso tenha clicado dentro, entrar modo edição daquele elemento
	// -> caso clicou na borda, permitir arrastar
}
