/*A string S consisting of uppercase English letters is given. 
In one move we can delete seven letters from S, forming the word 
"BALLOON" (one 'B', one 'A', two 'L's, two 'O's and one 'N'), and 
leave a shorter word in S. If the remaining letters in the shortened 
S are sucient to allow another instance of the word "BALLOON" to be removed, 
next move can be done. What is the maximum number of such moves that we can apply to S?
Write a function:
      int solution(char *S);
that, given a string S of length N, returns the maximum number of moves that can be applied.
Examples:
1. Given S = "BAONXXOLL", the function should return 1.
2. Given S = "BAOOLLNNOLOLGBAX", the function should return 2.
3. Given S = "QAWABAWONL", the function should return 0.
4. Given S = "ONLABLABLOON", the function should return 1.

B - 1
A - 1
L - 2
O - 2
N - 1
*/


const balloonFunc = (str: string): number => {
  let successes = 0

  let foundBalloons: {[key: string]: number} = {}

  const KEY: {[key: string]: number} = {
    'B': 1,
    'A': 1,
    'L': 2,
    'O': 2,
    'N': 1
  }

  for (let i = 0; i < Object.keys(KEY).length; i++){
    let char = Object.keys(KEY)[i]
  
    let matchingChars = str.split('').filter(c => c === char)
    foundBalloons[char] = matchingChars.length
  }

  if (Object.values(foundBalloons).includes(0)){
    //return 0 early
    return successes
  } else {
    let checker = true

    while (checker) {
      for (let char of Object.keys(KEY)){
        if (foundBalloons[char] && foundBalloons[char] >= KEY[char]) {
          foundBalloons[char] -= KEY[char]
          if (Object.keys(KEY).indexOf(char) === Object.keys(KEY).length - 1) {
            successes++
          }
        } else {
          return successes
        }
      }
    }
    return successes
  }
}

let x = balloonFunc('BAONXXOLL')
let xx = balloonFunc('BAOOLLNNOLOLGBAX')
let xxx = balloonFunc('QAWABAWONL')
let xxxx = balloonFunc('ONLABLABLOON')
debugger;