"use strict";
/*

caesar-cipher-encryptor.ts
https://www.algoexpert.io/questions/Caesar%20Cipher%20Encryptor

Complexity Analyses:

Time: O(N)
Space: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesarCipherEncryptor = void 0;
function caesarCipherEncryptor(string, key) {
    var returnStr = '';
    var reducedKey = key % 26;
    for (var i_1 = 0; i_1 < string.length; i_1++) {
        if (string.charCodeAt(i_1) - 97 + reducedKey > 25) {
            debugger;
            returnStr += String.fromCharCode(string.charCodeAt(i_1) + reducedKey - 26);
        }
        else {
            returnStr += String.fromCharCode(string.charCodeAt(i_1) + reducedKey);
        }
    }
    // Write your code here.
    debugger;
    return returnStr;
}
exports.caesarCipherEncryptor = caesarCipherEncryptor;
caesarCipherEncryptor('abc', 52);
//# sourceMappingURL=caesar-cipher-encryptor.js.map