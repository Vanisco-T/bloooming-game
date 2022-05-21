'use strict';
import * as b from './Balance_sheet.js';
export class Rat
{
	constructor(id, max_deal, name, color, baby_num, job, salary, savings, liability, expenses)
	{
		this.id = id;
		this.name = name;
		this.color = color;
		this.baby_num = baby_num;
		this.job = job;
		this.bal_sh = new b.Balance_sheet(salary, savings, liability, expenses);
		this.urgent = 0;
		this.turn_loss = 0;
		this.dice_number = 1;
		this.curbaby = 0;
		this.max_deal = max_deal;
	}
	borrow ()
	{
		document.getElement
		let amount = document.getElementById("one1");
		this.bal_sh.add_liability("Loans", amount.value, "Loan expense", ((1/10)*amount));
	}
	paycheck ()
	{
		let get_list, new_monthly;
		new_monthly = this.bal_sh.getElement("TOTAL_INCOME") - this.bal_sh.getElement("TOTAL_EXPENSES");
		if (new_monthly < 0) {
			while (this.bal_sh.empty_assets()) {
				get_list = ['diamond', 'bags stocks'];
				for(const each of get_list) {
					this.bal_sh.alter_asset(each, 'ALL', 'INCOME');
				}
				new_monthly = (this.bal_sh.getElement('TOTAL INCOME') + this.bal_sh.urgent) -
							   this.bal_sh.getElement("TOTAL EXPENSES");
				if (new_monthly > 0)
					break;
				alert("Still not efficient, please select all the assets to pay you debts");
			}
			if (new_monthly < 0) {
				new_monthly = this.bal_sh.bankrupt();
				if (new_monthy < 0)
					this.die();
				else
					this.bal_sh.add_cash(new_monthly);
			}
		} else {
			this.bal_sh.add_cash(new_monthly);
		}
	}
	die ()
	{
		alert("You");
	}
	opportinuties (answer,name)
	{
		if (this.bal_sh.add_asset(answer, ...name)) {
			let something = document.getElementById("dream");
			something.value =  "My congratulations you're out of the rat race!!";
			// transition informations
		}
	}
	market (quantity, query)
	{
		let new_cash;
		let something = document.getElementById("cardcontent");
		something.value =  "Landed on the market card buddy!!";
		if (!this.bal_sh.search_assets(query))
			return false;
		this.bal_sh.alter_assets(query, quantity, "DIFFINCOME");
		return true;
	}
	doodads ()
	{
		let something = document.getElementById("cardcontent");
		something.value =  "Doodads! pay your doodads."
		if (query[1] > this.bal_sh.getElement('CASH')) {
			this.borrow();
		}
		while (this.bal_sh.getElement('CASH') < query[1]) {
			alert("not enough money, sorry you gotta borrow some to the bank");
			this.borrow();
		}
		this.bal_sh.remove_cash(query[1]);
	}
	charity ()
	{
		
		let something = document.getElementById("cardcontent");
		something.value = "Charity, pay 10% of your total income to roll atmost 2 dice in the the next three turns";
		const togive = this.bal_sh.total_income * (10/100);
		if (togive > this.bal_sh.getElement('CASH')) {
			alert("Donot have enough money for charity");
		} else
			this.bal_sh.remove_cash(togive);
		this.dice_number = 2;
	}
	baby (liability, percentage)
	{
		let something = document.getElementById("cardcontent");
		something.value =  "Hello, you have a new baby!!";
		if(this.curbaby == this.baby_num) {
			alert("number of baby excited");
			return false;
		}
		this.curbaby += 1;
		this.bal_sh.add_liability(this.curbaby + " child", liability, this.curbaby + " child", percentage);
		return true;
	}
	downside ()
	{
		let something = document.getElementById("cardcontent");
		something.value =  "pay the total amount of your expenses";
		if (this.bal_sh.getElement('CASH') < this.bal_sh.getElement('TOTAL_EXPENSES')) {
			alert("Not enough money to pay your total expenses");
			this.borrow();
			while (this.bal_sh.getElement('CASH') < this.bal_sh.getElement('TOTAL_EXPENSES')) {
				alert("Not enough money to pay your total expenses");
				this.borrow();
			}
		} else {
			this.bal_sh.remove_cash(this.bal_sh.getElement("TOTAL_EXPENSES"));
		}
		this.turn_loss = 2;
	}
}
