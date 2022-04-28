import chalk from 'chalk';

function addSynonym(action, synonyms) {
    for(let i = 0; i < synonyms.length; i++) {
        actions[synonyms[i]] = action;
    }
}

let actions = {
    "look": {
        "func": function(args = null, entered = false) {
            if(entered) {console.log(chalk.bold(currentArea.name));}
            console.log(currentArea.description)
            for(let i = 0; i < currentArea.objects.length; i++) {console.log(currentArea.objects[i].context)}
            for(let i = 0; i < currentArea.items.length; i++) {console.log(currentArea.items[i].context)}
        }
    },
    "examine": {
        "func": function(args) {
            if(!args.length) {
                console.log(`Examine ${chalk.italic("what")}?`);
                return false;
            }
            
            let nameOfThing = args[0].toLowerCase();

            function findObject(name) {
                let foundObject;
                for(let i = 0; i < currentArea.objects.length; i++) {
                    if(currentArea.objects[i] && currentArea.objects[i].name == name) {
                        foundObject = currentArea.objects[i];
                        return foundObject; 
                    } else {
						for(let j = 0; i < currentArea.objects[j].synonyms.length; j++) {
							if(currentArea.objects[i] && currentArea.objects[i].synonyms[j] == name) {
								foundObject = currentArea.objects[i];
								return foundObject;
							}
						}
					}
                }
                for(let i = 0; i < currentArea.items.length; i++) {
                    if(currentArea.items[i] && currentArea.items[i].name == name) {
                        foundObject = currentArea.items[i];
                        return foundObject; 
                    } else {
						for(let j = 0; i < currentArea.items[i]?.synonyms.length; j++) {
							if(currentArea.items[i] && currentArea.items[i]?.synonyms[j] == name) {
								foundObject = currentArea.items[i];
								return foundObject;
							}
						}
					}
                }
				return null;
            }
            let item = findObject(nameOfThing);
            if(item) {
                console.log(`\n${item.examineText}\n`);
            } else {
                console.log("I do not see that anywhere near here.");
            }
        }
    },
	"inv": {
		"func": function() {
			if(player.inventory.length > 0) {
				console.log("\nInventory:");
			} else {
				console.log("You have nothing in your inventory.");
			}
			for(let i = 0; i < player.inventory.length; i++) {
				console.log(player.inventory[i].formattedName);
			}
			console.log("");
		}
	},
	"take": {
		"func": function(args) {
			let itemName = args[0];
			function findObject(name) {
                let foundObject;
                for(let i = 0; i < currentArea.items.length; i++) {
                    if(currentArea.items[i] && currentArea.items[i].name == name) {
                        foundObject = currentArea.items[i];
                        return foundObject; 
                    } else {
						for(let j = 0; i < currentArea.items[i]?.synonyms.length; j++) {
							if(currentArea.items[i] && currentArea.items[i]?.synonyms[j] == name) {
								foundObject = currentArea.items[i];
								return foundObject;
							}
						}
					}
                }
				return null;
			}
			let item = findObject(itemName);
			if(item) {
				console.log("Taken.\n");
				player.inventory.push(item);
				currentArea.items.splice(currentArea.items.indexOf(item), 1);
			} else {
				console.log(`I couldn't find a '${itemName}' in the room.\n`);
			}
		}
	},
}
export default actions
