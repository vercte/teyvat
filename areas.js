import classes from './classes.js';
class Area {
    constructor(name) {
        this.name = name;
        this.description = "You are in a room.";
        this.items = [];
        this.objects = [];
    }
}

const areas = {};
areas.SpawnBedroom = new Area("Bedroom")
areas.SpawnBedroom.description = "You are in a bedroom. There is a window looking outside, but it is all smudged up.";
{
    let changelog = new classes.Item("newspaper");
	changelog.synonyms = ["news", "changelog"]
    changelog.examineText = 
`You read the newspaper.
    
TEYVAT NEWS: v0.1 Alpha
Playing the game has been added!!!`

    changelog.context = "There is a newspaper labeled Teyvat News on a nightstand."
	changelog.formattedName = "The Teyvat News newspaper"
    areas.SpawnBedroom.items.push(changelog)
}

export default areas;
