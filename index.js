import areas from "./areas.js";
import characterpicker from "./characterpicker.js";
import chalk from "chalk";
import parser from "./parser.js"

global.player = characterpicker.start();
global.currentArea = areas.SpawnBedroom;

function main() {
	console.clear();
	console.log("You wake up in what seems to be a bedroom. There is a newspaper labeled \"CHANGELOG\" to the left of you.");
	while(true){parser()}
}

main();
