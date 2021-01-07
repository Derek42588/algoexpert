"use strict";
/*

nick-interview-question-12-9-20.ts


You are running a classroom and suspect that some of your students are cheating by sharing answers as single words hidden in 2D grids of letters.

A particular grid contains at most one word. The word may start anywhere in the grid, and consecutive letters can be either below or to the right of the previous letter.

The input will consist of a word and a grid. Print the location of the word in the grid as a list of “row column” coordinates, each on its own line. If the word does not appear in the grid, just print “None”.
Example input:

  catnip

  c r c a r s
  a b i t n b
  t f n n t i
  x s i i p t

Example output

  0 2
  0 3
  1 3
  2 3
  3 3
  3 4

Clarifications:

    The word will always appear in the grid exactly 0 or 1 times.

Analyses -

Time:
Space

*/
function checkForCheating(word, grid) {
    // let current: string[]
    var wordAsArray = word.split('');
    // let wordPointer: number = 0;
    // let indices: number[][] = []
    var hash = {};
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (word.includes(grid[i][j])) {
                if (hash[grid[i][j]]) {
                    hash[grid[i][j]].push([i, j]);
                }
                else {
                    hash[grid[i][j]] = [[i, j]];
                }
            }
        }
    }
    if (Object.keys(hash).length !== word.length) {
        console.log('None');
    }
    else {
        for (var i = 0; i < word.length; i++) {
        }
    }
}
// if (indices.length === wordAsArray.length) {
//   for (let index of indices) {
//     console.log(index);
//   }
// } else {
//   console.log('None');
// }
// debugger;
// return 'None'
// }
// function checkAdjacents(left: number[][], right: number[][]): boolean {
//   for (let index of left) {
//     for (let index of right) {
//     }
//   }
//   return false
// }
function checkRightAndDown(index, grid, wordAsArray) {
    var wordPointerRow = index[0];
    var wordPointerColumn = index[1];
    var wordPointer = 0;
    var indices = [];
    while (grid[wordPointerRow][wordPointerColumn] === wordAsArray[wordPointer] && wordPointer < wordAsArray.length - 1) {
        // debugger;
        // add the current index to indices because they match
        indices.push([wordPointerRow, wordPointerColumn]);
        //check the next letter and adjust indices 
        wordPointer++;
        // debugger;
        if (grid[wordPointerRow][wordPointerColumn + 1] === wordAsArray[wordPointer]) {
            wordPointerColumn++;
        }
        else if (grid[wordPointerRow + 1][wordPointerColumn] === wordAsArray[wordPointer]) {
            wordPointerRow++;
        }
        debugger;
    }
    debugger;
    return indices;
}
function breadthFirstSearch(array, queue) {
    if (array === void 0) { array = []; }
    if (queue === void 0) { queue = []; }
    // queue.push(this);
    // let current: Node = this;
    debugger;
    if (queue.length === 0) {
        queue.push(this);
    }
    while (queue.length > 0) {
        var current = queue[0];
        array.push(current.name);
        for (var _i = 0, _a = current.children; _i < _a.length; _i++) {
            var childNode = _a[_i];
            queue.push(childNode);
        }
        queue.shift();
        debugger;
    }
    debugger;
    return array;
}
checkForCheating('catnip', [['c', 'r', 'c', 'a', 'r', 's'],
    ['a', 'b', 'i', 't', 'n', 'b'],
    ['t', 'f', 'n', 'n', 't', 'i'],
    ['x', 's', 'i', 'i', 'p', 't']]);
//# sourceMappingURL=nick-interview-question-12-9-20.js.map