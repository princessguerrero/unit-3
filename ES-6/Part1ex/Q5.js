const forEach = (arr, callback) => {
    arr.map((elem, index) => {
        callback(elem)
    })   
}

// copy from test
var arr = [1, 2, 3, 4, 5]
forEach(arr,(elem) => {
    console.log(elem)
});

