'use strict';
import * as m from './module/Party.js';
import * as database from '../db/Db.js';

export let party;
let liability, salary, db_player, duration, array, max_deal, baby_num, color, expense;
let increment_party = 0, increment_player = 1;
let mydb = new database.Db();

//.addEventListener("click", input_party, false);
document.getElementById("shitty").onclick = function ()
{
	if (document.getElementById("shitty").value === "")
		return false;
	let name = document.getElementById("party");
	duration = document.getElementById("time");
	console.log(duration.value);
	array = duration.value.split(":");
	console.log("values are " + name.value + array[0] + array[1]);
	party = new m.Party(increment_player, name.value, array[0], array[1]);
	document.getElementById("close").style.display = "none";
}

document.getElementById("add").onclick = function ()
{
	if (document.getElementById('add').value === "")
		return false;
	increment_player += 1;
	let name = document.getElementById("sur");
	max_deal = document.getElementById("smalldeal");
	color = document.getElementById("color");
	baby_num = document.getElementById("baby");
	party.SetNumPlayer(increment_player);
	// accessing the database to fill in ....
	liability = mydb.get_liability();
	let expense = mydb.get_expenses();
	db_player = mydb.get_player();
	party.add_player(increment_player, max_deal.value, name.value, color.value, baby_num.value, db_player[0], db_player[1], db_player[2], liability, expense);
	name.value = "";
	if (increment_player === 4)
		document.getElementById("add").style.display = "none";
}
