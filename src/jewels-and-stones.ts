// jewels-and-stones.ts

// https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(J: string, S: string): number {
  let numJewels: number = 0
  for (let char of J){
    for (let c of S) {
      if (c === char) {
      numJewels++
      }
    }
    debugger;
  }
  return numJewels
}; 

numJewelsInStones('aA', 'aAAbbbbb')