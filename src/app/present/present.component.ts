import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
@Component({
	selector: 'app-present',
	templateUrl: './present.component.html',
	styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {
	public activeSlide: Number = 1;
	public activeElement = undefined;
	public isFullscreen: boolean;
	public activeToolbarElement;
	public presentation;
	constructor(private _data: DataStorageService) {
		this.presentation = _data.presentation;
		console.log(this.presentation);
	}

	ngOnInit() {
		this.presentation = this._data.presentation;
	}

}
