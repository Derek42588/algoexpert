/*

roman-to-integer.ts
https://leetcode.com/problems/roman-to-integer/

Analyses - 

Time: O(N)
Space: O(1)

*/

function romanToInt(s: string): number {

  if (s.length === 0) return -1

  const romanIdxDict: {[key: string]: number} = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let returnNum = 0;
  
  for (let i = 0; i < s.length; i ++) {
    if (s[i + 1] && s[i + 1] !== s[i]  && (romanIdxDict[s[i]] < romanIdxDict[s[i+1]])) {
      let thisChar = romanIdxDict[s[i]]
      let nextChar = romanIdxDict[s[i + 1]]
      debugger;
      returnNum += romanIdxDict[s[i + 1]] - romanIdxDict[s[i]]
      i+=1
    } else {
      debugger;
      returnNum += romanIdxDict[s[i]]
    }
  }
  debugger;
  return returnNum
};

// romanToInt('IX')
// romanToInt('III')
// romanToInt('IV')
// romanToInt('LVIII')
// romanToInt('IX')
romanToInt('MDCCCLXXXIV')
