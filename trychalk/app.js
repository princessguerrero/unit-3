const chalk = require('chalk');

// 1.
// const helloBlue = (str) => chalk.blue(str)
//     console.log(helloBlue('Hello World'))

// 2.
// const helloRed = (str) => chalk.red(str)
//     console.log(helloRed('Hello World'))

// 3.
// const stringToColor = (str, color) => {
//     return chalk.keyword(color.toLowerCase())(str)
// }
//     console.log(stringToColor('Hello World', 'green'))
//if there is a property name not in a variable, you can do chalk["green"]("hello")


// 4.
// const evensBlueOddsYellow = (str) => {
//     var strJoin = ''
//     var strArr = str.split(' ').map((elem, index) => { 
//         if (index % 2 === 0) {
//         strJoin += chalk.blue(elem) + ' '
//         } else {
//         strJoin += chalk.yellow(elem) + ' '
//         }
//     }) 
//     console.log(strJoin)
// }
// evensBlueOddsYellow('this is a test')


// 5.
// const angryText = (str) => chalk.red.underline.bold(str.toUpperCase())
// console.log(angryText('this is a test'))


// 6.
// const backgroundCyan = (str) => chalk.white.bgCyan(str)
// console.log(backgroundCyan('this is a test'))


// 7.
const boldFirstUnderlineLast = (str) => {
    var strArr = str.split(' ').map((elem, index) => {
    var chalkedStrArr = []   
    if (strArr(elem[0]) {
    
    }
    })

}
