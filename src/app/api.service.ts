import { Injectable } from '@angular/core';
<<<<<<< HEAD

=======
import { User } from './user';
>>>>>>> dev
@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor() { }

<<<<<<< HEAD
	login(username: String, password: String): boolean {
		if (password === '123') {
=======
	login(user: User): boolean {
		if (user.password === '123') {
>>>>>>> dev
			return true;
		} else {
			return false;
		}
	}
}
