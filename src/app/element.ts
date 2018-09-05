enum Type {
	textbox,
	image,
	bulletlist
}
export class Element {
	constructor(
		public type: Type,
		private data: String,
		private posX: number,
		private posY: number) { }

	setPosition(x: number = this.posX, y: number = this.posY) {
		this.posX = x;
		this.posY = y;
	}

	setData(x: String) {
		this.data = x;
	}
}
