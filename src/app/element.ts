enum Type {
	textbox,
	image,
	bulletlist
}
export class Element {
	constructor(
		public type: Type,
		public data: String,
		public posX: number,
		public posY: number) { }

	setPosition(x: number = this.posX, y: number = this.posY) {
		this.posX = x;
		this.posY = y;
	}
}
