// shuffle-string.ts

// https://leetcode.com/problems/shuffle-string/

const shuffleString = (s: string, indices: number[]): string => {
  return indices.reduce((acc: string[], curr: number, idx:number) => {
    acc[curr] = s.charAt(idx)
    debugger;
    return acc
  }, []).join('')
}

(shuffleString('codeleet', [4,5,6,7,0,2,1,3]))