const countOddsAndEvens = (arr) => arr.reduce((acc, num) => {
    console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
    if (num % 2 === 0) {
      acc.evens += 1
      return acc
    } else {
      acc.odds += 1
      return acc
    }
  }, { odds: 0, evens: 0 })
  
  console.log(countOddsAndEvens([11, 2, 36, 4, 15]));