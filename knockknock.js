const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let lines = []
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => compute(lines));

function compute(lines)
{
    // console.log(lines)
    console.log("Knock Knock.")
    console.log("Who's there?") 
    console.log(lines[0]) 
    console.log(lines[0], "who?") 
    console.log(lines[1]) 
}