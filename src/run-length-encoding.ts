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

export function runLengthEncoding(str: string): string {
  let encodedStr = '';

  let currChar = str[0];
  let runLength = 0;

  if (str.length === 1) {
    encodedStr = '1' + str[0];
    debugger;
    return encodedStr;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === currChar) {
      runLength++;
    } else {
      encodedStr += parseRuns(runLength, currChar);
      runLength = 1;
      currChar = str[i];
      debugger;
    }
  }
  encodedStr += parseRuns(runLength, currChar);

  debugger;
  return encodedStr;
}

function parseRuns(runLength: number, char: string): string {
  debugger;
  let parsedStr = '';
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
