//
class Game {
	constructor(startWallet) {
		//- initiating previous classes
		this.stats = new Statistics();
		this.wallet = new Wallet(startWallet);
		this.spanWallet = document.querySelector('.panel span.wallet');
		this.tiles = document.querySelectorAll('div.tile');
		this.inputBid = document.querySelector('#bid');
		this.spanResult = document.querySelector('.score span.result');
		this.spanGames = document.querySelector('.score span.number');
		this.spanWins = document.querySelector('.score span.win');
		this.spanLosses = document.querySelector('.score span.loss');
		document.querySelector('#start').addEventListener('click', this.startGame.bind(this)); //- binding this to this object for startGame() usage
		this.render();
	}

	render(
		colors = ['grey', 'grey', 'grey'],
		money = this.wallet.getWalletValue(),
		result = '',
		stats = [0, 0, 0],
		bid = 0,
		wonMoney = 0
	) {
		this.tiles.forEach((tile, index) => {
			tile.style.backgroundColor = colors[index];
		});
		if (result) {
			result = `You WON ${wonMoney}$`;
		} else if (!result && result !== '') {
			// - must be without conversion to not let JS change it into false in DOM
			//- this means that at the beginning none condition is met and no nay answer will be displayed
			result = `You LOST ${bid}$`;
		}
		this.spanResult.textContent = result;
		this.spanWallet.textContent = `${money}$`;
		this.spanGames.textContent = ` ${stats[0]}`;
		this.spanWins.textContent = ` ${stats[1]}`;
		this.spanLosses.textContent = ` ${stats[2]}`;
		this.inputBid.value = '';
	}
	startGame() {
		if (this.inputBid.value < 1) return alert('Minimal bid not reached');
		const bid = Math.floor(this.inputBid.value);
		if (!this.wallet.checkIfCanPlay(bid)) {
			return alert('Empty wallet or invalid value');
		}
		this.wallet.changeWallet(bid, '-');
		this.draw = new Draw();
		const tilesColors = this.draw.getDrawResult();
		const won = Result.checkIfWon(tilesColors); //- pass draw and check if you won. If yes, assign it
		const wonMoney = Result.moneyWonInGame(won, bid); //- we won so "won" is true -> functions gives prize
		this.wallet.changeWallet(wonMoney);
		this.stats.addGameResultToStats(won, bid);
		this.render(
			tilesColors,
			this.wallet.getWalletValue(),
			won,
			this.stats.showGameStats(),
			bid,
			wonMoney
		);
	}
}
