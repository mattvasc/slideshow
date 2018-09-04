import { Slide } from './slide';

enum Visibility {
	public,
	private
}

export class Presentation {
	constructor(public slides: Slide[],
				public owner: String,
				public visibility: Visibility = Visibility.public) {}
}
