/*

caesar-cipher-encryptor.ts
https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

Complexity Analyses:

Time: O(N)
Space: O(1)

*/

export function caesarCipherEncryptor(string: string, key: number): string {
  let returnStr = '';
  const reducedKey = key % 26;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) - 97 + reducedKey > 25) {
      debugger;
      returnStr += String.fromCharCode(string.charCodeAt(i) + reducedKey - 26);
    } else {
      returnStr += String.fromCharCode(string.charCodeAt(i) + reducedKey);
    }
  }
  // Write your code here.
  debugger;
  return returnStr;
}

caesarCipherEncryptor('abc', 52);
