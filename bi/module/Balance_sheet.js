'use strict';
export class Balance_sheet
{
	constructor(salary, savings, liabilities, expenses)
	{
		this.income = [['salary', salary]];
		this.liabilities = liabilities;
		this.expenses = expenses;
		this.savings = savings;
		this.total_expenses = this.cal_total_expenses(expenses);
		this.cash = savings + (this.income[0][1] - this.total_expenses);
		this.total_income = this.income[0][1];
		this.cashflow = 0;
		this.assets = [];
	}
	getElement(what)
	{
		let value;
		switch (what)
		{
		case "SAVINGS":
			value = this.savings;
			break;
		case "TOTAL_EXPENSES":
			value = this.total_expenses;
			break;
		case "TOTAL_INCOME":
			value = this.total_income;
		case "CASH":
			value = this.cash;
		default:
			break;
		}
		return value;
	}
	cal_total_expenses (exp)
	{
		let sum = 0;
		console.log(exp);
		for(let ir = 0;ir < exp.length;ir++) {
			sum += exp[ir][1];
		}
		return sum;
	}
	global_rm (aname, name, fract)
	{
		let value;
		switch(aname) {
		case 'L':
			for(const ir = 0;ir < this.liabilities.length;ir++) {
				if (this.liabilities[ir][0] === name) {
					if (fract == 0) {
						value = this.liabilities[ir];
						this.liabilities[ir] = 0;
					} else {
						value = this.liabilities[ir][1] - fract*this.liabilities[ir][1];
						this.liabilities[ir][1] = fract*this.liabilities[ir][1];
					}
				}
			}
		case 'E':
			for(const ir = 0;ir < this.expenses.length;ir++) {
				if (this.expenses[ir][0] === name) {
					value = this.expenses[ir];
					if (fract == 0) {
						value = this.liabilities[ir];
						this.expenses[ir] = 0;
					} else {
						value = this.expenses[ir][1] - fract*this.expenses[ir][1];
						this.expenses[ir][1] = fract*this.expenses[ir][1];
					}
				}
			}
		case 'I':
			for(const ir = 0;ir < this.icome.length;ir++) {
				if (this.income[ir][0] === name) {
					value = this.income[ir];
					this.income[ir] = 0;
				}
			}
		case 'A':
			for(const ir = 0;ir < this.assets.length;ir++) {
				if (this.assets[ir][0] === name) {
					value = this.assets[ir];
					this.assets[ir] = 0;
				}
			}
		default:
			break;
		}
		return value;
	}
	remove_cash (amount)
	{
		if (amount <= this.cash) {
			this.cash -= amount;
			return true;
		}
		return false;
	}
	add_cash (amount)
	{
		this.cash += amount;
	}
	add_expense (name, expense)
	{
		this.expenses[this.expenses.length] = [ name, expense ];
		this.total_expense += expense;
	}
	add_liability (name, amount, expense_name, new_expenses)
	{
		this.liabilities[this.liabilities.length] = [ name, amount ];
		if (newexpenses > 0)
			this.expenses(expense_name, new_expenses);
	}
	add_income (name, amount)
	{
		this.income[this.income.length] = [ name, amount ];
		this.total_income += amount;
	}
	add_cashflow (amount) {
		this.cashflow += amount;
		if (this.cashflow > this.total_expenses) {
			return true;
		} else {
			return false;
		}
	}
	remove_expenses (name, fract)
	{
		let returned = this.global_rm ('E', name, fract);
		this.total_expenses -= returned;
	}
	remove_liability (name, fract)
	{
		if (expense_name != 'NONE')
			this.remove_expense (this.liability[name][3], fract);
		this.global_rm ('L', name, fract);
	}
	remove_income (name)
	{
		let returned = this.global_rm ('I', name, 0)
		this.total_income -= returned;
	}
	remove_asset (name)
	{
		this.remove_liability (name, 'NONE');
		this.remove_income(name);
		this.global_rm ('A', name);
	}
	add_asset (number, name, cashflow, sell_price, buy_price, downpay)
	{
		//verify if the assets has already been added
		for(const asset of this.assets) {
			if (asset[1] === `${sellprice}:${buy_price}:${cashflow}`) {
				console.log("this assets has already been added!!");
				break;
			} else {
				this.assets[this.assets.length] = [ name, sellprice + ":" + buyprice + ":" + cashflow + ":" + number ];
				if (downpay != 0)
					this.add_liability(name, sell_price - downpay);
				if (cashflow != 0) {
					this.add_income(name, cashflow);
					if (this.add_cashflow(cashflow))
						return true;
				}
			}
		}
		return false;
	}
	alter_asset (name, number, which)
	{
		let bool = false, each;
		for(each = 0;each <= this.assets.length;each++) {
			if (this.assets[each][0] === name) {
				bool = true;
				break;
			}
		}
		if (bool == false) {
			console.log("No assets corresponds to the client's needs");
			return false;
		}
		let arr = this.assets[each][1].split(':');
		if (number === arr[3] || number === "ALL") {
			if (which === 'BANKRUPT') {
				this.urgent = arr[0]*arr[3];
			} else {
				this.cash += arr[0]*arr[3];
			}
			this.assets[each] = 0;
		} else if (number < arr[3]) {
			arr[3] = arr[3] - number;
			this.cash += arr[0]*number;
		}
		return true;
	}
	empty_assets ()
	{
		for(const test = 0; test < this.assets.length;test++) {
			if (this.assets[test] != 0)
				return true;
		}
		return false;
	}
	bankrupt ()
	{
		this.remove_liability('L','retail_debts',0.5);
		this.remove_liability('L','credit_cards',0.5);
		return ( this.bal_sh.getElement('TOTAL INCOME') + this.bal_sh.urgent ) -
				 this.bal_sh.getElement("TOTAL EXPENSES");
	}
	search_assets (asset_name)
	{
		for(const ir = 0;ir < this.assets.length;ir++) {
			if (this.assets[ir][1] === asset_name)
				return true;
		}
		return false;
	}
}
