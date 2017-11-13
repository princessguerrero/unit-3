const firstLetterUpper = (str) =>
 str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')

console.log(firstLetterUpper('the quick brown fox'))