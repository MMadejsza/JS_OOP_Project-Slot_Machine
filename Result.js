//- we are writing down rules of the game. We don't need constructor because this class is just to return result of the game and secondly what user won.
class Result {
	static moneyWonInGame(result, bid) {
		if (result) return 3 * bid;
		else return 0;
	}
	static checkIfWon(drawResult) {
		if (
			(draw[0] === draw[1] && draw[1] === draw[2]) ||
			(draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])
		) {
			return true;
		} else return false;
	}
}
Result.moneyWonInGame(true, 12);
