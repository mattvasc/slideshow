import { Element } from './element';

export enum Transition {
	default,
	slideLeft,
	spinleft
}


export class Slide {
	constructor(public elements: Element[] = [],
		public transition: Transition = Transition.default,
		public bgcolor: String = '#FFFFFF') { }

	addElement(x: Element) {
		this.elements.push(x);
	}

	removeElementByIndex(x: number) {
		this.elements.splice(x, 1);
	}

	setTransition(x: Transition) {
		this.transition = x;
	}
}
