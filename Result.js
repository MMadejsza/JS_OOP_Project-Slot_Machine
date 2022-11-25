//- we are writing down rules of the game. We don't need constructor because this class is just to return result of the game and secondly what user won.
class Result {
	static moneyWonInGame(result, bid) {
		if (result) return 3 * bid;
		else return 0;
	}
	static checkIfWon(drawResult) {
		if (
			(drawResult[0] === drawResult[1] && drawResult[1] === drawResult[2]) ||
			(drawResult[0] !== drawResult[1] &&
				drawResult[1] !== drawResult[2] &&
				drawResult[0] !== drawResult[2])
		) {
			return true;
		} else return false;
	}
}
