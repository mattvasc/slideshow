import { Element } from './element';

enum Transition {
	default,
	slideLeft,
	spinleft
}


export class Slide {
	constructor(public elements: Element[],
				public transition: Transition = Transition.default,
				public bgcolor: String = '#FFFFFF' ) { }

}
