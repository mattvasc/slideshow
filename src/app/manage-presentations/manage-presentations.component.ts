import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { mockedUsers, mockedPresentations, mockedPresentations2 } from '../mock-user-presentations';
import { Presentation } from '../presentation';

@Component({
	selector: 'app-manage-presentations',
	templateUrl: './manage-presentations.component.html',
	styleUrls: ['./manage-presentations.component.scss']
})
export class ManagePresentationsComponent implements OnInit {

	public user: User = mockedUsers[0];
	public logged: boolean = true;

	constructor() { }
	P: Presentation[] = [mockedPresentations, mockedPresentations2];
	ngOnInit() {
	}

	deletePresentation(i: number) {
		this.P.splice(i, 1);
	}

	teste() {
		console.log(this.user);
	}
}
