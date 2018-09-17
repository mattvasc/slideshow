import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataStorageService } from '../data-storage.service';

@Component({
	selector: 'app-manage-presentations',
	templateUrl: './manage-presentations.component.html',
	styleUrls: ['./manage-presentations.component.scss']
})
export class ManagePresentationsComponent implements OnInit {
	public user: User;
	constructor(private _data: DataStorageService) {
		this.user = this._data.user;
	}

	ngOnInit() {
	}
}
