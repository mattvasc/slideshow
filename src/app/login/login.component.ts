import { Component, OnInit, Inject } from '@angular/core';
import {TesteComponent} from '../teste/teste.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	animal: string;
	name: string;
	ngOnInit() {
	}
	constructor() { }
	// constructor() { }
	// openDialog(): void {
	// 	const dialogRef = this.dialog.open(TesteComponent);

	// 	dialogRef.afterClosed().subscribe(result => {
	// 		console.log('The dialog was closed');
	// 		this.animal = result;
	// 	});
	// }
}
