import { Presentation } from './presentation';
export class User {
	constructor(public name: String,
		public password: String,
		public presentations: Presentation[] = [] ) {}

	login() {
		// Mock goes here
	}

	addPresentation(x: Presentation) {
		if (x.owner === undefined || x.owner === '') {
			x.owner = this.name;
		}
		this.presentations.push(x);
	}

	removePresentationByIndex(x: number) {
		this.presentations.splice(x, 1);
	}
}
