import { Slide } from './slide';

enum Visibility {
	public,
	private
}

export class Presentation {
	constructor(public slides: Slide[] = [],
		public owner: String,
		public visibility: Visibility = Visibility.public) { }

	addSlide(X: Slide) {
		this.slides.push(X);
	}

	removeSlideByIndex(index: number) {
		this.slides.splice(index, 1);
	}
}
