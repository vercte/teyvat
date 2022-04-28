import rl from 'readline-sync';
import chalk from 'chalk';

function createMenu(text, items) {
	let selectedItem = 0;
	let lastKey = "";
	function displayItems(text, final = false) {
		console.clear();
		console.log(text);
		console.log("\nQ and E to select, W to confirm\n")
		for(let i = 0; i < items.length; i++) {
			if(selectedItem == i) {
				if(final) {
					console.log(chalk.grey.bold(`> ${items[i].display}`));
				} else {
					console.log(chalk.bold(`> ${items[i].display}`));
				}
			} else {
				console.log(`  ${items[i].display}`);
			}
		}
		if(items[selectedItem].desc) {console.log(`\n${items[selectedItem].desc}`);};
	}
	while(!(lastKey == "w")) {
		if(lastKey == "e") {
			selectedItem++;
			if(selectedItem == items.length) {
				selectedItem = 0;
			}
		} else if(lastKey == "q") {
			selectedItem--;
			if(selectedItem < 0) {
				selectedItem = items.length - 1;
			}
		}
		displayItems(text);
		lastKey = rl.keyIn('', {hideEchoBack: true, mask: '', limit: "qwe"});
	}
	displayItems(text, true);
	return {"item": items[selectedItem], "index": selectedItem};
}

export default createMenu;
