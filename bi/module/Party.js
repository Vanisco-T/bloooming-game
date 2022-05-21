import * as p from './Rat.js'
import * as g from './Playground.js'

export class Party
{
	constructor (id, name, hours, minutes)
	{
		this.id = id;
		this.name = name;
		this.time = (3600*hours) + (minutes*60);
		this.players = [];
		this.curtime = 0;
		this.where;
		this.numberplayer;
	}
	SetNumPlayer(val)
	{
		this.numberplayer = val;
	}
	init_playground (color)
	{
		this.where = new g.Playground(this.players.length, color);
	}
	//save_party (id, name)
	//{}		
	//resume_party (id, name)
	//{}
	add_player (id, max_deal, name, color, baby_num, job, salary, savings, liability, expenses)
	{
		this.players.push(new p.Rat(id, max_deal, name, color, baby_num, job, salary, savings, liability, expenses));
	}
	remove_player (id)
	{
		for (let i = 0;i < this.players.length;i++)
			if (this.players[i].id === id)
				return this.players.splice(i, i + 1);
	}
	increment ()
	{
		this.curtime += 1;
		return this.curtime;
	}
	check ()
	{
		if (this.curtime === this.time)
			this.end_party('TIME');
	}
	start_party ()
	{
		setInterval(increment, 1000);
		setInterval(check, 1000);
	}
	end_party (type)
	{
		if (type === 'TIME')
			console.log("Time out, try again to improve your financial literary");
		else if (type == "ALL_WON") {
			console.log("End of party, bravo");
		}
	}
}
