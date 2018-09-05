import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

	@Input() presentation;
	@Input() activeSlide;

	constructor() { }

	ngOnInit() {
	}
	render() {
		// this.slide.render();
	}
}
