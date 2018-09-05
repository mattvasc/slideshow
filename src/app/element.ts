export enum TypeOfElement {
	textbox,
	image,
	bulletlist
}
export class Element {
	constructor(
		public type: TypeOfElement,
		private data: String,
		private posX: number = 0,
		private posY: number = 0) { }

	setPosition(x: number = this.posX, y: number = this.posY) {
		this.posX = x;
		this.posY = y;
	}

	setData(x: String) {
		this.data = x;
	}
}
