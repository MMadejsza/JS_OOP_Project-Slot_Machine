class Game {
	constructor(startWallet) {
		//- initiating previous classes
		this.stats = new Statistics();
		this.wallet = new Wallet(startWallet);
		document.querySelector('#start').addEventListener('click', this.startGame);
		this.spanWallet = document.querySelector('.panel span.wallet');
		this.tiles = document.querySelectorAll('div.tile');
		this.inputBid = document.querySelector('#bid');
		this.divResult = document.querySelector('.score div.result');
		this.spanGames = document.querySelector('.score span.number');
		this.divWins = document.querySelector('.score div.win');
		this.divLosses = document.querySelector('.score div.loss');
		this.render();
	}
	startGame() {}
	render(
		colors = ['grey', 'grey', 'grey'],
		money = this.wallet.getWalletValue(),
		result = '',
		stats = [0, 0, 0],
		wonMoney = 0
	) {
		this.tiles.forEach((tile, index) => {
			tile.style.backgroundColor = colors[index];
		});
		if (result) {
			result = `You won ${wonMoney}`;
		} else if (!result && result != '') {
			//- this means that at the beginning none condition is met and no nay answer will be displayed
			result = `You lost ${bid}`;
		}
		this.divResult.textContent = result;
		this.spanWallet.textContent = money;
		this.spanGames.textContent = stats[0];
		this.divWins.textContent = stats[0];
		this.divLosses.textContent = stats[0];
	}
}
