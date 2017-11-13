const greaterThan10 = array =>
    array.filter(elem => elem > 10);

console.log(greaterThan10([11, 2, 3, 1, 22, 4, 33]))

// returns [11, 22, 33]