import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

	login(user: User): boolean {
		if (user.password === '123') {
			return true;
		} else {
			return false;
		}
	}
}
