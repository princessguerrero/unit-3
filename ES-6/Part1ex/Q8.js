const firstLetterUpper = (str) =>
//to change it to an array
 str.split(' ')
//.map to go through the array and take the element at [0], uppercase it, and add the rest of the word
//by concatenating and using slice(1) then joining with a space.
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')

console.log(firstLetterUpper('the quick brown fox'))