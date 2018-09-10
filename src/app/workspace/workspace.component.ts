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

	@Input() activeElement: Element = undefined;
	@Output() public activeElementChange = new EventEmitter();

	lastActiveElement : Element = undefined;
	constructor() { }

	ngOnInit() {
	}
	render() {
		// this.slide.render();
	}
	selectElement(event) {
		//poderia procurar ultimo event.target também
		this.lastActiveElement = this.activeElement;
		
		this.activeElement = this.presentation.slides[this.activeSlide].elements[event.target.parentElement.id.match(/[0-9]/)[0]];
		this.selectedBorder(this.lastActiveElement, this.activeElement);
		this.activeElementChange.emit(this.activeElement);
	}
	unselectElement(event) {
		if (event.target.id === 'page' || event.target.id === 'workspace' ) {
			//this.selectedBorder(this.activeElement, false);
			if(this.activeElement != undefined) {
				this.activeElement.style["border-style"] = 'none';
			}
			this.activeElement = undefined;
			this.activeElementChange.emit(this.activeElement);
			
		}
	}

	//bordaSelecionado(activeElement, Boolean) {
	selectedBorder(lastActiveElement, activeElement) {
		if (lastActiveElement == activeElement){
			console.log("nada muda");
		}
		else if(lastActiveElement != activeElement && lastActiveElement != undefined){
			this.lastActiveElement.style["border-style"] = 'none';
			console.log("mudou de volta");
		}
		this.activeElement.style["border-style"] = 'dotted';
		
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
