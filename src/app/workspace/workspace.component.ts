import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';
import { ToolbarActive } from '../toolbar-active.enum';
import { DataStorageService } from '../data-storage.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

	event: MouseEvent;
	clientX = 0;
	clientY = 0;
	dragging = false;

	@Input() activeSlide;

	@Input() activeElement: Element = undefined;
	@Output() public activeElementChange = new EventEmitter();

	@Input() isFullscreen: boolean;
	@Output() isFullscreenChange: EventEmitter<boolean> = new EventEmitter();

	@Input() activeToolbarElement: ToolbarActive;
	@Output() activeToolbarElementChange: EventEmitter<ToolbarActive> = new EventEmitter();

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent) {
		if (event.keyCode === 46) {
			this.removeElement();
		}
	}




	constructor(private _data: DataStorageService, private router: Router) { }

	ngOnInit() {
	}
	render() {
		// this.slide.render();
	}
	selectElement(event) {
		// poderia procurar ultimo event.target também
		if (!this.isFullscreen &&  this.router.url === '/edit') {
			if (event.target.parentElement.id !== 'page') {
				this.activeElement = this._data.presentation.slides[this.activeSlide].elements[event.target.parentElement.id.match(/[0-9]/)[0]];
				this.activeElementChange.emit(this.activeElement);

				this.activeToolbarElement = undefined;
				this.activeToolbarElementChange.emit();

				this.activeToolbarElement = ToolbarActive.editElement;
				this.activeToolbarElementChange.emit(this.activeToolbarElement);
			} else {
			}
		}
	}
	unselectElement(event) {
		if (event.target.id === 'page' || event.target.id === 'workspace') {
			this.activeElement = undefined;
			this.activeElementChange.emit();
			this.activeToolbarElement = ToolbarActive.none;
			this.activeToolbarElementChange.emit(this.activeToolbarElement);
		}
		event.stopPropagation();
	}


	removeElement() {
		if (this.activeElement === undefined || this.router.url !== '/edit') { return; }

		this._data.presentation.slides[this.activeSlide].elements.splice(
			this._data.presentation.slides[this.activeSlide].elements.indexOf(this.activeElement),
			1);
		this.activeElement = undefined;
		this.activeElementChange.emit();
	}

	getPosition(e) {
		if (this.activeElement === undefined || this.router.url !== '/edit') { return; }
		let positionY = this.clientY - e.offsetTop - e.offsetParent.offsetTop;
		let positionX = this.clientX - e.offsetLeft - e.offsetParent.offsetLeft;
		positionX = positionX / e.clientWidth;
		positionY = positionY / e.clientHeight;
		positionX = Math.ceil(positionX * 100);
		positionY = Math.ceil(positionY * 100);
		if (positionX <= 100 && positionY <= 100) {
			this.moveElement(positionX, positionY);
		}
	}

	moveElement(X: number, Y: number) {
		if (this.activeElement === undefined || this.router.url !== '/edit') { return; }
		this.activeElement.style['left'] = `${X}%`;
		this.activeElement.style['top'] = `${Y}%`;
	}

	changePosition(event: MouseEvent): void {
		this.clientX = event.clientX;
		this.clientY = event.clientY;
	}

	dragStart() {
		this.dragging = true;
	}

	// funções notáveis
	// ao clicar fora da pagina do slide, se há slide em modo de edição, renderizar e sair da edição
	// ao clicar em algum elemento, chamar função
	// -> caso tenha clicado dentro, entrar modo edição daquele elemento
	// -> caso clicou na borda, permitir arrastar
}
