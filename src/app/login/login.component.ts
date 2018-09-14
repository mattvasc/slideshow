import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: User;
	constructor(private apiService: ApiService, private router: Router) { }

	ngOnInit() {
		this.user = new User('', '');
	}

	doLogin() {
		if (this.apiService.login(this.user)) {
			this.router.navigateByUrl('/manage');
		} else {
			alert('Login Incorreto');
		}
	}
}
