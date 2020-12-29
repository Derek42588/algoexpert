"use strict";
/*

run-length-encoding.ts
https://www.algoexpert.io/questions/Run-Length%21Encoding

Time Complexity: O(N)

Space Complexity: is it O(N), because the return string grows with the input? I believe so.
but then what does N represent?  Maybe call it o(M) where M is unique substrs of len 9 or less?
His explanation gives it as O(N). reason is: worst case of kind of string:
'ABCDEFG', and because there are no repeats, we would have to return '1A1B1C1D1E1F1G', which is really
O(2N), so we call it O(N).  I think my O(M) explanation comes pretty close - M = unique substrs of len 9 or less


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLengthEncoding = void 0;
function runLengthEncoding(str) {
    var encodedStr = '';
    var currChar = str[0];
    var runLength = 0;
    if (str.length === 1) {
        encodedStr = '1' + str[0];
        debugger;
        return encodedStr;
    }
    for (var i_1 = 0; i_1 < str.length; i_1++) {
        if (str[i_1] === currChar) {
            runLength++;
        }
        else {
            encodedStr += parseRuns(runLength, currChar);
            runLength = 1;
            currChar = str[i_1];
            debugger;
        }
    }
    encodedStr += parseRuns(runLength, currChar);
    debugger;
    return encodedStr;
}
exports.runLengthEncoding = runLengthEncoding;
function parseRuns(runLength, char) {
    debugger;
    var parsedStr = '';
    while (runLength >= 10) {
        parsedStr += '9' + char;
        runLength -= 9;
    }
    if (runLength > 0) {
        parsedStr += runLength + char;
    }
    debugger;
    return parsedStr;
}
// runLengthEncoding('AAAAAAAAAAAAABBCCCCDD');
// runLengthEncoding('AAAAAAAAAAAA');
// runLengthEncoding('aA');
// runLengthEncoding('f');
runLengthEncoding('AAAAAAAAAA');
// runLengthEncoding('AAAAAAAAAAAAAAAAAAAA');
//# sourceMappingURL=run-length-encoding.js.map