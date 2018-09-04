import { Presentation } from './presentation';
export class User {
	constructor(name: String,
		private password: String,
		presentations: Presentation[] ) {}
}
