
const reduceMin = (arr) => arr.reduce((min, num) => num < min ? num : min)
//ternary reads as if min is less than num return num otherwise return min
//may use 'if else' instead of ternary
console.log(reduceMin([12, 3, 4, 5, 11])); //returns 1