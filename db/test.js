import * as db from './db.js';
let newdb = new db.db();
let cal = document.getElementById("real");
cal.onclick = function () {
	console.log(newdb.get_opportunity());
}
