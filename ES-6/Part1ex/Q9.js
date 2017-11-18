const map = (arr, callback) => {
    let newArr = [];
    arr.map((elem, index) => {
        newArr.push(callback(elem))
    })
    return newArr
}


// function map(arr, callback) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback(arr[i]))
//     }
//     return newArr
// }

console.log(map([2, 5, 4], num => num * 2))