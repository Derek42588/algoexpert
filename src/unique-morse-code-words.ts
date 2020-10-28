/*
unique-morse-code-words.ts

https://leetcode.com/problems/unique-morse-code-words/


International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

*/

function uniqueMorseRepresentations(words: string[]): number {

  const morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let returnWords: string[] = []

  for (let word of words) {
    let morseWord: string = ''
    for (let letter of word) {
      morseWord += morseAlphabet[letter.charCodeAt(0) - 97]

    }
    if (!(returnWords.includes(morseWord))) {
      returnWords.push(morseWord)
    }
  }
  debugger;

  return returnWords.length
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])