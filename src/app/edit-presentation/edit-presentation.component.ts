import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
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
	public hideColorPickerMenu = true;
	public hideAddNewElementMenu = true;
	public test: any;
	private elem;
	public isFullscreen;

	@ViewChild(ToolbarComponent) toolbar: ToolbarComponent;

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent) {
		if (event.which === 122) {
			this.isFullscreen = !this.isFullscreen;
		}
	}

	@HostListener('document:mozfullscreenchange', []) f1() {
		this.exitHandler();
	}

	@HostListener('document:webkitfullscreenchange', []) f2() {
		this.exitHandler();
	}

	@HostListener('document:fullscreenchange', []) f3() {
		this.exitHandler();
	}
	@HostListener('document:MSFullscreenChange', []) f4() {
		this.exitHandler();
	}




	constructor() { }

	debug() {
		this.isFullscreen = !this.isFullscreen;
		console.log(this.isFullscreen);
	}
	ngOnInit() {
		this.elem = document.documentElement;
		this.isFullscreen = false;

		this.presentation = new Presentation(undefined, 'Not logged yet', undefined);
		const first_slide: Slide = new Slide([], undefined, { 'red': 196, 'green': 196, 'blue': 196 }); // ffaabb
		first_slide.addElement(new Element(TypeOfElement.titlefield, `<h2 id="title"> Meu Título</h2>`));
		first_slide.addElement(new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`,
			0, 0, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue', 'display': 'inline-block' }));

		first_slide.addElement(new Element(TypeOfElement.image, '<img src="https://picsum.photos/150/150?random">'));
		this.presentation.addSlide(first_slide);
		console.log(this.presentation);
	}
	unselectElement() {
		this.activeElement = undefined;
	}

	/* View in fullscreen */
	toogleFullscreen() {
		if (!this.isFullscreen /*&& window.fullScreen*/) {

			if (this.elem.requestFullscreen) {
				this.elem.requestFullscreen();
			} else if (this.elem.mozRequestFullScreen) { /* Firefox */
				this.elem.mozRequestFullScreen();
			} else if (this.elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				this.elem.webkitRequestFullscreen();
			} else if (this.elem.msRequestFullscreen) { /* IE/Edge */
				this.elem.msRequestFullscreen();
			}
			this.isFullscreen = true;
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else {
				alert('Non compatible Browser detected!\nPlease update to the last version...');
			}
			this.isFullscreen = false;
		}
	}
	getisFullScreen(): boolean {
		return this.isFullscreen;
	}
	exitHandler() {

		let fullOnFirefox = document.mozFullScreen;
		let fullOnChrome = document.webkitIsFullScreen;
		let fullOnMS = document.msFullscreenElement;
		let fullOnW3 = document.fullscreen;

		fullOnFirefox = (fullOnFirefox === undefined) ? false : fullOnFirefox;
		fullOnChrome = (fullOnChrome === undefined) ? false : fullOnChrome;
		fullOnMS = (fullOnMS === undefined) ? false : fullOnMS;
		fullOnW3 = (fullOnW3 === undefined) ? false : fullOnW3;


		if (!fullOnChrome && !fullOnFirefox && !fullOnMS && !fullOnW3) {
			this.isFullscreen = false;
		}
	}
}
