const strToNumArr = (strArr) => strArr.map(str => Number(str))

//  or strArr.map(Number)

console.log(strToNumArr(["5", "10", "dog"]))