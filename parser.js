import actions from './actions.js';
import rl from 'readline-sync';

let garbageWords = [
    "the"
]

function askInput(prompt = "> ") {
    let input = rl.prompt({
        "prompt": prompt
    })
    let splitPrompt = input.split(" ");
    let actionWord = splitPrompt.shift();

    let parsedPrompt = splitPrompt;
    parsedPrompt = parsedPrompt.filter(e => {
        for(let i = 0; i < garbageWords.length; i++) {
            if(e.toLowerCase() == garbageWords[i]){return false}
        }
        return true;
    })

    if(actions[actionWord]) {
        actions[actionWord].func(parsedPrompt);
    } else {
        console.log(`What the hell does '${actionWord}' mean?`)
    }
}

export default askInput;
