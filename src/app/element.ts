enum Type {
	textbox,
	image,
	bulletlist
}
export class Element {
	constructor (
		public type: Type,
		public data: String,
		public posX: number,
		public posY: number ) { }
}
