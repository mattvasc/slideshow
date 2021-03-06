import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';
import { Presentation } from '../presentation';
import { DataStorageService } from '../data-storage.service';
import { Router } from '@angular/router';
import { Element, TypeOfElement } from '../element';
import { Slide } from '../slide';
import {
	faPlay, faPlusSquare, faSignOutAlt,
	faPencilAlt,
	faMinusSquare, faSignInAlt, faUserPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-manage-presentations',
	templateUrl: './manage-presentations.component.html',
	styleUrls: ['./manage-presentations.component.scss']
})

export class ManagePresentationsComponent implements OnInit {
	faPlay = faPlay;
	faPlusSquare = faPlusSquare;
	faPencilAlt = faPencilAlt;
	faSignInAlt = faSignInAlt;
	faMinusSquare = faMinusSquare;
	faSignOutAlt = faSignOutAlt;
	faUserPlus = faUserPlus;

	indexDelete: number = undefined;




	@ViewChild('modalusername') modalusername: ElementRef;
	public user: User;
	public username: String;
	public password: String;
	constructor(private _data: DataStorageService, private router: Router) {
		this.user = this._data.user;
	}

	P: Presentation[] = [];
	ngOnInit() {
		for (let i = 0; i < this._data.Users.length; i++) {
			this.P = this.P.concat(this._data.Users[i].presentations);
		}
		console.log(this.P.length);
		if (this.user !== undefined) {
			for (let i = 0; i < this._data.Users.length; i++) {
				if (this.user.name === this._data.Users[i].name) {
					this.user = this._data.Users[i];
					this._data.user = this.user;
				}
			}
		}
	}

	deletePresentation(i: number) {
		this.P.splice(i, 1);
		this.indexDelete = undefined;
	}
	editPresentation(i: number) {
		this._data.presentation = this.P[i];
		this.router.navigate(['/edit']);
	}

	login() {
		const temp = new User(this.username, this.password);
		if (this._data.login(temp)) {
			const element = document.getElementById('dismiss') as HTMLElement;
			element.click();
		} else {
			alert('Login Incorreto!');
		}

	}
	logout() {
		this._data.user = undefined;
	}
	openModalLogin() {
		this.username = '';
		this.password = '';
		this.modalusername.nativeElement.focus();
	}
	openModalCreate() {
		this.username = '';
		this.password = '';
	}
	newPresentation() {
		const p = new Presentation(
			[new Slide(
				[
					new Element(TypeOfElement.titlefield, `<p> ${this.username} </p>`, 43, 15, {'font-size': '30px'})
				])],
			this._data.user.name,
			undefined,
			this.password,
			this.username);

		this._data.user.addPresentation(p);
		this._data.presentation = p;
		this.router.navigate(['/edit']);
	}
	present(i: number) {
		this._data.presentation = this.P[i];
		this.router.navigate(['/present']);
	}
	signUp () {
		const u = new User(this.username, this.password);
		if (this._data.Users.find(x => x.name === u.name)) {
			alert('Erro, usuário Já Cadastrado!');
			return;
		}
		this._data.Users.push(u);
		this._data.user = this._data.Users[this._data.Users.length - 1];
	}
}
