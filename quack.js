const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let lines = []
rl.on('line', (line) => lines.push(line));
rl.on('close', (line) => compute(lines));

function compute(lines){
   let answer = '';
    let index = 0
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   for (let i = 0; i < lines.length; i++){
    //    let index = mainIndex
        let lineArray = lines[i].split(' ')
        for (let j = 0; j < lineArray.length; j++){
            if (lineArray[j] == 'qwak'){
                index = index + 1
            }
            else if (lineArray[j] == 'quack'){
                index = index - 1
            }
            else if (lineArray[j] == "qwuack")
            {
                answer = answer + alphabet[index]
            }
            // console.log(lineArray, alphabet[index])
            
        }
        // answer = answer + alphabet[index]
        // mainIndex = index
        
    // answer = answer + alphabet[index]   
   }
   console.log(answer)
        // answer   
}