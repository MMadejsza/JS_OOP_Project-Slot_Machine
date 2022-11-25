class Game {
	constructor(startWallet) {
		//- initiating previous classes
		this.stats = new Statistics();
		this.wallet = new Wallet(startWallet);
		document.querySelector('#start').addEventListener('click', this.startGame);
		this.spanWallet = document.querySelector('.panel span.wallet');
		this.tiles = document.querySelectorAll('div.tile');
		this.inputBid = document.querySelector('#bid');
		this.spanResult = document.querySelector('.score div.result');
		this.spanResult = document.querySelector('.score span.number');
		this.spanResult = document.querySelector('.score div.win');
		this.spanResult = document.querySelector('.score div.loss');
		this.render();
	}
	startGame() {}
	render() {
		console.log('lets start');
	}
}
const game = new Game(200);
