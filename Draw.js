class Draw {
	constructor() {
		this.options = ['red', 'green', 'blue']; //- what are the options to draw in the game
		let _result = this.drawResult(); // - when initiating class it's assign straight away
		this.getDrawResult = () => _result;
	}
	drawResult() {
		let colors = []; //- we want result in form of array
		for (let i = 0; i < this.options.length; i++) {
			const index = Math.floor(Math.random() * this.options.length);
			const color = this.options[index]; //- [options.length] times draw tile
			colors.push(color);
		}
		return colors;
	}
}
