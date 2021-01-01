/*

Analyses:

O(N) Space & Time

*/

const firstDuplicateValue = (arr: number[]): number => {
    const hasAppearedDict: {[key: string]: boolean} = {}

    for (let num of arr) {
        if (hasAppearedDict[num.toString()]) return num
        else {
            hasAppearedDict[num.toString()] = true
        }
    }
    return -1
}

let x = firstDuplicateValue([2, 1, 5, 3, 3, 8, 4])
debugger;