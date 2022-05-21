'use strict';
import * as m from './module/Party.js';
import * as database from '../db/Db.js';


function balance(){ 
    if(document.getElementById("bal").innerHTML===''){
        document.getElementById("bal").innerHTML="<div class='tu'><div id='all'><div class='flex-container'><div class='third-flex'><div class='first-second-flex'><div class='firstflex'><div class='sheet' id='expenses'><u><b>Expenses<br></b></u><div class='general'id='ex1'><div class='push'><u>Name</u></div><div><u>Amount</u></div></div><div class='general'><div class='push'>Baby</div><div>500</div></div></div><div class='sheet' id='liability'><div class='unitlo'><u><b>Liabilities</b></u></div><div class='general'id='lia-as'><div class='push'><u>Stock/asset</u></div><div><u>Amount</u></div></div><div class='general' id='lia1'><div class='push'>diamond</div><div>500</div></div><div class='general' id='lia-re'><div class='push'><u>Real Estate</u></div><div><u>Amount</u></div></div><div class='general' id='liare1'><div class='push'>House</div><div>50000</div></div>   </div></div><div class='secondflex'><div class='sheet' id='assets'><div class='unitlogo'><u>Assets</u></div><div class='general' id='as-as'><div class='push'><u><b>Stock/Assets</b></u></div><div><b><u>Amount</u></b></div></div><div class='general' id='as-as1'><div class='push'>OTKNU STOCK </div><div>50</div></div><div class='general' id='as-re'><div class='push'><u><b>Real Estate</b></u></div><div><u><b>Amount</b></u></div></div><div class='general' id='as-re1'><div class='push'>BUILDING </div><div>896550</div></div></div><div class='sheet' id='balance'><div class='info'>Don't forget to ask for your paycheck</div><div id='tabincome'><span id='stincome'><b>CASH </b></span><span id='cash'>6500</span></div><div id='tabincome'><span id='stincome'><b>TOTAL INCOME</b></span><span id='income'>5000</span></div> <div id='tabexpense'><span id='exincome'><b>TOTAL EXPENSES</b></span><span class='expense'>5000</span></div><hr id='addition'><div id='tabpayday'><span id='stday'><b>PAYDAY</b></span><span id='payday'>0</span></div></div></div></div><div class='sheet' id='rough'><div class='expandincome'><div class='beside_cash'><div class='totalexp'>TOTAL EXPENSES</div><div id='theexpense'>5000</div></div><div><div class='beside_cash'><div class='st'>PASSIVE INCOME</div><div id='passive'>5000</div></div></div></div><div id='fin'><span class='capital'>P</span>assive income < <span class='capital'></span> <span class='capital'>T</span>otal expenses</div></div></div><div class='sheet' id='idk'><div id='speccard'><div id='cardimg'>Put the image here!!</div><br><div id='cardcontent'>Contains all the informations abouta given card, these informations may be obtain from a given database.you should take care of the given consequences of these cards.</div><br><div class='groupbuttons'><button type='button' class='allbuttons' id='lone'><div class='butsl' id='bor'>Borrow</div></button><button type='button'class='allbuttons' id='rone'><div class='butsl' id='re'>Repay</div></button></div><div id='deal'><input type='text' id='inputtext' id='inp'></input><br><button type='button' class='allbuttons' id='bu'><div class='butsl'>Buy</div></button><button type='button' class='allbuttons' id='se'><div class='butsl'>Sell</div></button></div><button type='button' class='allbuttons' id='pa'><div class='butsl'>Pass</div></button></div></div></div></div></div>"
    }
    else{
        document.getElementById("bal").innerHTML='';
    }
}



let  toreturn;
let mydb = new database.Db();
let party;

window.addEventListener('load', () => {
	const params = (new URL(document.location)).searchParams;
	const duration = params.get('time');
	const max_deal = params.get('smalldeal');
	const baby_num = params.get('baby');
	const color = params.get("color");
	const nameparty = params.get("party");
	const nameplayer = params.get('player');
	let liability, salary, db_player, expense, array = duration.split(':');
	let increment_party = 0;
	party = new m.Party(1, nameparty, array[0], array[1]);
	party.SetNumPlayer(1);
	// accessing the database to fill in ....
	liability = mydb.get_liability();
	expense = mydb.get_expenses();
	db_player = mydb.get_player();
	console.log(expense);
	console.log(liability);
	console.log(duration);
	console.log("values are " + nameparty + array[0] + array[1]);
	party.add_player(1, max_deal, nameplayer, color, baby_num, db_player[0], db_player[1], db_player[2], liability, expense);
	party.init_playground(color);
});

// document.getElementById("rollit").onclick = function ()
document.getElementById('roll').onclick=function()
{
	let something=0;
	// turn for the first player
	console.log("executing this!!");
	toreturn = party.where.role(something);
	document.querySelector(".img1").setAttribute("src",
	"dice" + toreturn + ".png");
	document.getElementById("rat-"+party.where.before).style.borderColor="black";
	document.getElementById("rat-"+party.where.before).style.borderWidth="1px";

	document.getElementById("rat-"+party.where.positions[0]).style.borderColor=party.players[0].color;
	document.getElementById("rat-"+party.where.positions[0]).style.borderWidth="5px";

	console.log("executing this function");
	let table = ['O', 'M', 'O', 'M', 'O', 'D', 'P', 'O', 'M', 'C', 'O', 'M', 'O', 'P', 'O', 'B', 'F', 'C'];
	let all;
	switch (table[party.where.positions[0]])
	{
		case 'O':

			all=mydb.get_opportunity();
			/*document.getElementById('cardcontent').innerHTML=all[0];
			document.getElementById('bor').style.display="none";
			document.getElementById('re').style.display="none";
			document.getElementById('tu').style.display="block";*/
			balance();
			document.getElementById('cardcontent').innerHTML=all[0]+'<br>Cashflow:' +all[1]+'<br>Sellprice:'+all[2]+'<br>BuyPrice' +all[3]+ '<br>DownPay:' +all[4];
			document.getElementById('lone').style.display="none";
			document.getElementById('rone').style.display="none";
			document.getElementById('bu').style.height="50px";
			document.getElementById('bu').style.marginRight="5px";
			document.getElementById('bu').style.marginLeft="5px";
			document.getElementById('se').style.height="50px";
			let x=document.getElementById('inputtext');
			x.type="number";
			let ch=document.getElementById('cash');
			bu.onclick=function(){
			console.log(parseInt(ch.textContent));
				
			}
		/*	party.players[0].opportinuties(all);*/
			break;
		case 'M':
			val = document.getElementById("");
			party.players[0].market(val, mydb.get_market());
			break;
		case 'F':
			party.players[0].doodads();
			break;
		case 'C':
			party.players[0].charity();
			break;
		case 'P':
			party.players[0].paycheck();
			break;
		case 'B':
			party.players[0].baby(6000, 0);
			break;
		case 'D':
			party.players[0].downside();
			break;
		default:
			console.log("I don't fucking know the problem here, so....");
			break;
	}
}
