class Statistics {
	constructor() {
		this.gameResults = [
			{win: true, bid: 2},
			{win: false, bid: -20},
			{win: true, bid: 15},
		];
	}
	addGameResultToStats(win, bid) {
		//? may be { win, bid} and automatically will create following:
		let gameResult = {win: win, bid: bid};
		console.log(gameResult);
		this.gameResults.push(gameResult);
	}
	showGameStats() {
		let gamesNumber = this.gameResults.length;
		let winsNumber = this.gameResults.filter((result) => result.win == true).length;
		let lossesNumber = this.gameResults.filter((result) => result.win == false).length;
		return [gamesNumber, winsNumber, lossesNumber];
	}
}
const stats = new Statistics();
