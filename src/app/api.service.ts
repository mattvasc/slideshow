import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

	login(username: String, password: String): boolean {
		if (password === '123') {
			return true;
		} else {
			return false;
		}
	}
}
