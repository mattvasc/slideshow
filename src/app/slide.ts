import { Element } from './element';

export enum Transition {
	default,
	slideLeft,
	spinleft
}


export class Slide {
	constructor(public elements: Element[] = [],
		public transition: Transition = Transition.default,
		public bgcolor: {'red', 'green', 'blue'} = {'red' : 255, 'green' : 255, 'blue' : 255}
		// public style:  {} = {'background-color': '#ff0000'}
	) { }

	public addElement(x: Element) {
		this.elements.push(x);
	}

	public removeElementByIndex(x: number) {
		this.elements.splice(x, 1);
	}

	public setTransition(x: Transition) {
		this.transition = x;
	}
}

