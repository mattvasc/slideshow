import { Element } from './element';

export enum Transition {
	default,
	slideLeft,
	spinLeft
}


export class Slide {
	constructor(public elements: Element[] = [],
		public transition: Transition = Transition.default,
		public bgcolor: { 'red', 'green', 'blue' } = { 'red': 255, 'green': 255, 'blue': 255 }
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

	public hexToRGB(hex: String) {
		if (hex.substring(0, 1) === '#') {
			hex = hex.substring(1);
		}

		/* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
		this.bgcolor['red'] = parseInt(hex.substring(0, 2), 16);
		this.bgcolor['green'] = parseInt(hex.substring(2, 4), 16);
		this.bgcolor['blue'] = parseInt(hex.substring(4), 16);

	}
}

