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
		private posX: number = 0,
		private posY: number = 0,
		public style:  {} = {'display': 'inline-block'}
		) { }

	setPosition(x: number = this.posX, y: number = this.posY) {
		this.posX = x;
		this.posY = y;
	}

}
