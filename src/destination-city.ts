/*
https://leetcode.com/problems/destination-city/
*/

//paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
function destCity(paths: string[][]): string {

  let dictionary : { [key: string]: boolean} = {};

  // populating
  for (let path of paths) {
    if (!dictionary[path[0]]) {
      dictionary[path[0]] = true
    }
  }

  for (let path of paths) {
    for (let innerPath of path) {
      if (!dictionary[innerPath]){
        debugger;
        return innerPath
      }
    }
  }

  // debugger;
  return ''

};

destCity([["A","Z"]])