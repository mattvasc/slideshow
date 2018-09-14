export enum TypeOfElement {
	textfield,
	titlefield,
	image,
	bulletlist
}


export class Element {
	constructor(
		public type: TypeOfElement,
		public data: String,
		private posX: number = 40,
		private posY: number = 35,
		public style:  {} = {'position': 'absolute', 'left': `${posX}%`, 'top': `${posY}%`}
		) {
			this.style['position'] = 'absolute';
			this.style['left'] = `${posX}%`;
			this.style['top'] = `${posY}%`;
		}

	setPosition(x: number = this.posX, y: number = this.posY) {
		this.posX = x;
		this.posY = y;
	}

}
