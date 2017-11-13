function map(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr
}

map([1, 2, 3], num => num * 2)