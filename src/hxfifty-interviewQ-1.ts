/*
hxfifty-interviewQ-1.ts

Write an algorithm for the insert_five() function that will insert the number "5" into each
position of the interger num and return the largest integer.
Do not support negative numbers.  you may use any language except for PHP

eg:
Input into insert_five(): 20
Possible options: 520, 250, 205 (not displayed to user)
return: 520

*/

const insertFive = (num: number): number => {
  let returnNum: number = 0
  let strNum: string = num.toString()

  for (let i = 0; i <= strNum.length; i++) {
    debugger;
    let temp: string = strNum.toString().slice(0, i) + '5' + strNum.toString().slice(i)
    if (parseInt(temp) > returnNum) {
      returnNum = parseInt(temp)
    } 

    debugger;
  }
  debugger;
  return returnNum
} 
insertFive(9999)