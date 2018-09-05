import { Slide } from './slide';

export enum Visibility {
	public,
	private
}

export class Presentation {
	constructor(public slides: Slide[] = [],
		public owner: String = 'Not logged Yet',
		public visibility: Visibility = Visibility.public) { }

	addSlide(X: Slide = new Slide()) {
		this.slides.push(X);
	}

	removeSlideByIndex(index: number) {
		this.slides.splice(index, 1);
	}
}
