class Wallet {
	constructor(money) {
		let _money = money;
		this.getWalletValue = () => _money;
		this.checkIfCanPlay = (value) => {
			if (_money >= value) return true;
			return false;
		};
	}
}
const wallet = new Wallet(200);
