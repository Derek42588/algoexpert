/*

Have the function FirstReverse(str) take the str parameter
 being passed and return the string in reversed order. For example: if the input string 
 is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

*/

function reverseStringNick(str: string): string {
  let returnStr = '';

  for (let j = str.length - 1; j >= 0; j--) {
    returnStr += str[j];
  }
  return returnStr;
}

reverseStringNick('Hello World and Coders');
