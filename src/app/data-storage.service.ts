import { Injectable } from '@angular/core';
import { Presentation, Visibility } from './presentation';
import { User } from './user';


@Injectable({
	providedIn: 'root'
})
export class DataStorageService {
	public presentation: Presentation;
	public user: User;

	constructor() { }
}
