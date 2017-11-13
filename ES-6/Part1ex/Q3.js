const filterEvens = array =>
 array.filter(elem => elem % 2 === 0);

 console.log(filterEvens([22, 2, 31, 110, 6, 13]))
//  returns [22, 2 , 110, 6]