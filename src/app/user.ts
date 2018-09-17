import { Presentation } from './presentation';
export class User {
	constructor(public name: String,
		private password: String,
		public presentations: Presentation[] = [] ) {}

	login() {
		// Mock goes here
	}

	addPresentation(x: Presentation) {
		this.presentations.push(x);
	}

	removePresentationByIndex(x: number) {
		this.presentations.splice(x, 1);
	}
}
