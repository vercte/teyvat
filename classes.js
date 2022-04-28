function random(amount) {
    return Math.random() * amount
}

let classes = {};

classes.Player = class {
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.health = {
            "max": 5,
            "current": 5
        }
    }
}

classes.Item = class {
    constructor(name) {
        this.name = name;
		this.synonyms = [];
        this.examineText = `You see nothing special about the ${name}.`
        this.useFunc = function(){
            console.log(`You do not see a way to use the ${name}.`)
            return false;
        }
        this.context = `There is a ${name} in the room.`;
    }
}

export default classes

