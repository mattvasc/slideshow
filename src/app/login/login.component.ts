import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public username: String;
	public password: String;
	constructor(private apiService: ApiService, private router: Router) { }

	ngOnInit() {
	}

	doLogin() {
		if (this.apiService.login(this.username, this.password)) {
			this.router.navigateByUrl('/manage');
		} else {
			alert('Login Incorreto');
		}
	}
}
