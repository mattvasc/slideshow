import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Presentation, Visibility } from '../presentation';
import { Slide, Transition } from '../slide';
import { Element, TypeOfElement } from '../element';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ToolbarActive } from '../toolbar-active.enum';
import { DataStorageService } from '../data-storage.service';
@Component({
	selector: 'app-edit-presentation',
	templateUrl: './edit-presentation.component.html',
	styleUrls: ['./edit-presentation.component.scss']
})
export class EditPresentationComponent implements OnInit {

	public activeSlide = 0;
	public activeElement: Element = undefined;
	public test: any;
	private elem;
	public isFullscreen;
	public presentation: Presentation;
	// The following enum dictates wich session of the template render
	public activeToolbarElement: ToolbarActive = ToolbarActive.none;

	@ViewChild(ToolbarComponent) toolbar: ToolbarComponent;

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent) {
		switch (event.which) {
			case 122: // F11
				this.isFullscreen = !this.isFullscreen;
				break;
			// case 40: // Down Arrow
			case 37: // Left Arrow
				if (this.isFullscreen && this.activeSlide > 0) {
					this.activeSlide--;
				}
				break;
			// case 38: // Up Arrow
			case 39: // Right Arrow
				if (this.isFullscreen && this.activeSlide < this.presentation.slides.length - 1) {
					this.activeSlide++;
				}
				break;

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




	constructor(private _data: DataStorageService) {
		this.presentation = _data.presentation;
	}

	debug() {
		this.isFullscreen = !this.isFullscreen;
		console.log(this.isFullscreen);
	}
	ngOnInit() {
		this.elem = document.documentElement;
		this.isFullscreen = false;

		this.presentation = new Presentation(undefined, 'Not logged yet', undefined,
			'http://rugbyinafrica.org/2017/08/backgrounds-for-powerpoint/?showimage_zmdh=backgrounds+for+powerpoint.jpg');
		const first_slide: Slide = new Slide([], Transition.slideLeft, { 'red': 196, 'green': 196, 'blue': 196 }); // ffaabb
		first_slide.addElement(new Element(TypeOfElement.titlefield, `<h2> Meu Título </h2>`, 43, 15));
		first_slide.addElement(new Element(TypeOfElement.textfield, `<p> Lorem Ipsum </p>`,
			43, 30, { 'font-size': '24px', 'font-weight': 'bold', 'color': 'blue' }));

		first_slide.addElement(new Element(TypeOfElement.image, '<img src="https://picsum.photos/150/150?random">', 43, 60));
		this.presentation.addSlide(first_slide);
		this._data.presentation = this.presentation;
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

		let fullOnFirefox = document['mozFullScreen'];
		let fullOnChrome = document['webkitIsFullScreen'];
		let fullOnMS = document['msFullscreenElement'];
		let fullOnW3 = document['fullscreen'];

		fullOnFirefox = (fullOnFirefox === undefined) ? false : fullOnFirefox;
		fullOnChrome = (fullOnChrome === undefined) ? false : fullOnChrome;
		fullOnMS = (fullOnMS === undefined) ? false : fullOnMS;
		fullOnW3 = (fullOnW3 === undefined) ? false : fullOnW3;


		if (!fullOnChrome && !fullOnFirefox && !fullOnMS && !fullOnW3) {
			this.isFullscreen = false;
		}
	}
}
