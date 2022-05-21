export class Db
{
	constructor ()
	{
		this.player = ' { "player": [' +
		' { ' +
			'"job": "You are a doctor of a given hospital where you perform brain operations",' +
			'"salary": "400000",' +
			'"savings":  "20000"' +
		' },' +
		' { ' +
			'"job": "Your are a sofware developer in a company which produces electionic equipements",' +
			'"salary": "800000",' +
			'"savings":  "10000"' +
		' },' +
		' { ' +
			'"job": "Your are a musician, you write songs and sell them to earn money",' +
			'"salary": "200000",' +
			'"savings":  "20000"' +
		' },' +
		' { ' +
			'"job": "You are a doctor of a given hospital where you perform brain operations",' +
			'"salary": "400000",' +
			'"savings":  "20000"' +
		' },' +
		' { ' +
			'"job": "Your are a taxi driver, that\'s you carry people from place to another in exchange to money",' +
			'"salary": "200000",' +
			'"savings":  "17000"' +
		' },' +
		' { ' +
			'"job": "Architect: You design circuit diagrams for electronic devices",' +
			'"salary": "10000000",' +
			'"savings":  "4000"' +
		' },' +
		' { ' +
			'"job": "Buyer and Seller: tell tomatoes in the market",' +
			'"salary": "30000",' +
			'"savings":  "2000"' +
		' }' +
		'] }';
		this.fast = '{ "getdream": [' +
			' {"dream": "dinner with linus"}, ' +
			' {"dream": "dream one"}, ' +
			' {"dream": "dream dream two"}, ' +
			' {"dream": "dream dream three"}, ' +
			' {"dream": "dream dream four"}, ' +
			' {"dream": "dream dream five"}, ' +
			' {"dream": "dream dream seven"} ' +
		'] }'
		this.respons = '{' +
			'"mortgage": "200000",' +
			'"School": "178000",' +
			'"Car": "20000",' +
			'"Credit_Cards": "6000",' +
			'"Retail_debt": "1000"' +
		'}';
		this.opport = '{ "opport": [' +
			' { ' +
				'"name": "market one",' +
				'"cashflow": "0",' +
				'"sellprice": "1200",' +
				'"buyprice": "1000",' +
				'"downpay": "0"' +
			' }, ' +
			' { ' +
				'"name": "market two",' +
				'"cashflow": "0",' +
				'"sellprice": "1200",' +
				'"buyprice": "1000",' +
				'"downpay" : "0"' +
			' }, ' +
			' { ' +
				'"name": "market three",' +
				'"cashflow": "200",' +
				'"sellprice": "1200",' +
				'"buyprice": "1000",' +
				'"downpay": "0"' +
			' }' +
		' ] }'
		this.marketplace = '{ "market": [' +
			' { ' +
				'"name": "market one"' +
			' }, ' +
			' { ' +
				'"name": "market two"' +
			' }, ' +
			' { ' +
				'"name": "market three"' +
			' } ' +
		' ] }'
		this.used_opportunity = [];
		this.used_market = [];
		this.used_dream = [];
		this.used_player = [];
	}
	get_market ()	
	{
		let getop = JSON.parse(this.marketplace);
		let random = Math.floor(Math.random() * getop.market.length);
		while (this.checkin(this.used_market, random))
			random = Math.floor(Math.random() * getop.market.length);
		// store the random number
		this.used_market.push(random);
		return getop.market[random].name;
	}
	get_opportunity ()	
	{
		let getop = JSON.parse(this.opport), tired = [];
		let random = Math.floor(Math.random() * getop.opport.length);
		//while (this.checkin(this.used_opportunity, random))
			//random = Math.floor(Math.random() * getop.opport.length);
		// store the random number
		this.used_opportunity.push(random);
		tired = [
			getop.opport[random].name,
			getop.opport[random].cashflow,
			getop.opport[random].sellprice,
			getop.opport[random].buyprice,
			getop.opport[random].downpay
		];
		return tired;
	}
	get_liability ()	
	{
		let getop = JSON.parse(this.respons), tired = [];
		tired = [
			[ "Home mortgage", getop.mortgage, "mortgage expenses"],
			[ "School Loans", getop.School, "School expenses"],
			[ "Car Loans", getop.Car, "Car expenses"],
			[ "Credit cards", getop.Credit_Cards, "Credit cards"],
			[ "Retail_debts", getop.Retail_debt, "Retail_debts"]
		];
		return tired;
	}
	get_expenses ()	
	{
		let getop = JSON.parse(this.respons), tired = [];
		tired = [
			[ "mortgage expenses", getop.mortgage*0.1 ],
			[ "School expenses", getop.School*0.1 ],
			[ "Car expenses", getop.Car*0.1 ],
			[ "Credit cards", getop.Credit_Cards*0.1 ],
			[ "Retail_debts", getop.Retail_debt*0.1 ]
		];
		return tired;
	}
	checkin(something, value)
	{
		for(const val of something)
			if (val === value)
				return true;
		return false;
	}
	get_player ()
	{
		let getop = JSON.parse(this.player), tired = [];
		let random = Math.floor(Math.random() * getop.player.length);
		if (this.used_player.length === getop.player.length) {
			return false;
		}
		while (this.checkin(this.used_player, random))
			random = Math.floor(Math.random() * getop.player.length);
		this.used_player.push(random);
		tired = [
			getop.player[random].job,
			getop.player[random].salary,
			getop.player[random].savings
		];
		return tired;
	}
	get_dream ()
	{
		let getopt = JSON.parse(this.fast), tired = [];
		if (this.used_dream.length === getopt.getdream.length) {
			return false;
		}
		let random = Math.floor(Math.random() * getopt.getdream.length);
		while (this.checkin(this.used_dream, random))
			random = Math.floor(Math.random() * getopt.getdream.length);
		this.used_dream.push(random);
		console.log("finish!!");
		return getopt.getdream[random].dream;
	}
}

