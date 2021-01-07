/*

https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/

function reverseWords(s: string): string {
  let returnStr: string = '';

  let word = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ' && i !== s.length - 1) {
      word += s[i];
    } else {
      if (i === s.length - 1) {
        returnStr += s[i];
      }
      for (let j = word.length - 1; j >= 0; j--) {
        returnStr += word[j];
      }

      if (i !== s.length - 1) {
        returnStr += ' ';
      }
      word = '';
    }
  }

  return returnStr;
}

function reveseWordsWithMethods(s: string): string {
  let arrStrs: string[] = [];

  s.split(' ').forEach((s) => {
    arrStrs.push(s.split('').reverse().join(''));
  });

  return arrStrs.join(' ');
}

reveseWordsWithMethods("Let's take LeetCode contest");
