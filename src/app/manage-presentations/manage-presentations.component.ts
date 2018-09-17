import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Presentation } from '../presentation';
import { DataStorageService } from '../data-storage.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-manage-presentations',
	templateUrl: './manage-presentations.component.html',
	styleUrls: ['./manage-presentations.component.scss']
})
export class ManagePresentationsComponent implements OnInit {

	public user: User;
	public username: String;
	public password: String;
	constructor(private _data: DataStorageService, private router: Router) {
		this.user = this._data.user;
	}

	P: Presentation[] = [];
	ngOnInit() {
		for (let i = 0; i < this._data.Users.length; i++) {
			this.P = this.P.concat( this._data.Users[i].presentations);

		}
		if (this.user !== undefined) {
			for (let i = 0; i <  this._data.Users.length; i++) {
				if (this.user.name ===  this._data.Users[i].name) {
					this.user =  this._data.Users[i];
					this._data.user = this.user;
				}
			}
		}
		console.log(this.P);
		console.log(this.user);
	}

	deletePresentation(i: number) {
		this.P.splice(i, 1);
	}
	editPresentation(i: number) {
		this._data.presentation = this.P[i];
		this.router.navigate(['/edit']);
	}

	login() {
		const temp = new User(this.username, this.password);
		console.log(temp);
		if (this._data.login(temp)) {

		} else {
			alert('Login Incorreto!');
		}
	}
	logout() {
		this._data.user = undefined;
	}
}
