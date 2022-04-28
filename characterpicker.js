import chalk from 'chalk';
import rl from 'readline-sync';
import classes from './classes.js'
import menu from './menus.js';

let chosenRace, chosenBuff, player;
let start = function() {
	console.clear();
	let name = rl.prompt({
		"prompt": "What is your name, spirit? "
	});
	console.clear();

	let player = new classes.Player(name);
	return player;
}

export default {
	"start": start
};
