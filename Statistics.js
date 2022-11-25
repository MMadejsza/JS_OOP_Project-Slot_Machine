class Statistics {
	constructor() {
		this.gameResults = [
			{win: true, bid: 2},
			{win: false, bid: -20},
			{win: true, bid: 15},
		];
	}
	addGameResultToStats(win, bid) {
		let gameResult = {win: win, bid: bid};
		console.log(gameResult);
		this.gameResults.push(gameResult);
	}
}
const stats = new Statistics();
