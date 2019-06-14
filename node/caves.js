const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cMap = []

/*
    Create 2d array representation of
    the cave, from a text file containing lines of
    # charcters representing rock/walls and spaces
    representing caves.
*/
rl.on('line', function (line)
{
    let row = []
    // add each character in each line to an array
    // not adding the newlines (\n) character
    for (let i = 0; i < line.length; ++i)
    {
        if (line.charAt(i) == '#' || line.charAt(i) == ' ')
            row.push(line.charAt(i));
    }

    // add each row to the cave array
    cMap.push(row)
})

rl.on('close', function ()
{
    print2dArray(cMap);
    console.log(findCavesBFS(cMap));
})

/*
    Stores coordinates in the 2D array
*/
class Coord
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

/*
    Checks if an array contains a coordinate value.

    NOTE: Necessary because Set in javascript checks by reference.
    Maybe there's a way to pass a new comparitor/hash function
    but this seemed quicker to code.

    Arrow function declaration,
    same as writing: function findCavesBFS(board) {...}
    SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
let hasCoord = (arr, c) =>
{
    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i].x == c.x && arr[i].y == c.y)
            return true;
    }
    return false;
}

let print2dArray = (vec) =>
{
    if (vec.length == 0)
        return;
    for (let i = 0; i < vec.length; ++i)
    {
        console.log(vec[i].toString());
    }
}

/*
    Performs a breadth first search on the 2d array and
    returns the number of caves (isolated and contiguous block
    of spaces) in a 2d array (board).
*/
let findCavesBFS = (board) =>
{
    // we'll use this array as a queue, see
    // SEE: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
    let q = [];
    // set of coordinates

    // let visited = new Set();
    let visited = [];

    // count tracks the number of distinct caves we find
    let count = 0;

    let cols = board.length;
    // check here, because if cols = 0, setting row length will fail
    if (cols == 0)
        return count;
    let rows = board[0].length;

    for (let i = 0; i < cols; ++i)
    {
        for (let j = 0; j < rows; ++j)
        {
            c = new Coord(i,j);
            // is the value at this coordinate " "?
            // have we already visited (processed) this coordinate?
            // if not, we've found a new cave to explore!
            if (board[i][j] == " " && !hasCoord(visited, c))
            {
                // increment count, found a new cave!
                ++count;
                // add the first coordiate to q and visited
                q.push(c);
                visited.push(c);

                while(q.length != 0)
                {
                    // get the first element in the queue
                    // this is an o(n) operation, with an optimized
                    // queue should be o(1)
                    c = q.shift();
                    const x = c.x;
                    const y = c.y;

                    // check right/left/down/up for any connected 'cave' coordinates
                    // if an unvisited " " is found, add it to the queue for processing
                    // and add it to visited so we don't add it again and loop infinitely!
                    let temp = new Coord(x+1,y);
                    if (x < cols - 1 && board[x+1][y] == ' ' && !hasCoord(visited, temp))
                    {
                        q.push(temp);
                        visited.push(temp);
                    }
                    temp = new Coord(x-1,y);
                    if (x > 0 && board[x-1][y] == ' ' && !hasCoord(visited, temp))
                    {
                        q.push(temp);
                        visited.push(temp);
                    }
                    temp = new Coord(x,y+1);
                    if (y < rows - 1 && board[x][y+1] == ' ' && !hasCoord(visited, temp))
                    {
                        q.push(temp);
                        visited.push(temp);
                    }
                    temp = new Coord(x,y-1);
                    if (y > 0 && board[x][y-1] == ' ' && !hasCoord(visited, temp))
                    {
                        q.push(temp);
                        visited.push(temp);
                    }
                }
            }
        }
    }
    return count;
}