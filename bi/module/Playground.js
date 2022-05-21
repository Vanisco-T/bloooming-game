'use strict';
export class Playground
{
	constructor(number_players, ...colors)
	{
		this.before;
		this.positions = [0];
		this.colors = colors;
		this.toEnd;
	}
	role (id)
	{
		let random = Math.floor(Math.random() * 6) + 1;
		const rando =random;
		this.before=this.positions[id];
		if(this.positions[id]+random>17)
			this.positions[id]=(this.positions[id]+random)%18;
		else
			this.positions[id]=this.positions[id]+random;
		console.log(this.positions[id]);
		return rando;
	}
}
