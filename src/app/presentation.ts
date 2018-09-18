import { Slide } from './slide';

export enum Visibility {
	public,
	private
}

export class Presentation {
	constructor(public slides: Slide[] = [],
		public owner?: String,
		public visibility: Visibility = Visibility.public,
		public background: String = '',
		public name: String = ''	) { }

	addSlide(X: Slide = new Slide()) {
		this.slides.push(X);
	}

	removeSlideByIndex(index: number) {
		this.slides.splice(index, 1);
	}
}
