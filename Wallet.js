class Wallet {
	constructor(money) {
		let _money = money;
		this.getWalletValue = () => _money;
		this.checkIfCanPlay = (value) => {
			//-check if still has enough money
			if (_money >= value) return true;
			return false;
		};
		this.changeWallet = (value, typeOfOperation = '+') => {
			//- adding/subtracting money in wallet
			if (typeof value == 'number' && !isNaN(value)) {
				//- if given is number and not "not a number fault"
				if (typeOfOperation === '+') {
					//- ADDITION
					return (_money += value);
				} else if (typeOfOperation === '-') {
					//- SUBTRACTION
					return (_money -= value);
				} else {
					throw new Error('invalid operation type');
				}
			} else {
				console.log(typeof value);
				throw new Error('invalid operation type');
			}
		};
	}
}
const wallet = new Wallet(200);
