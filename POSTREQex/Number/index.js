const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()


app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const numbersFile = "numbers.json"

app.get('/number', (req, res) => {
    fs.readFile('numbers.json', 'utf8', (err, data) => {
        if (err) {
            return res.send("There is no number")
        } else {
            const arr = [req.body]
            const jsonArr = JSON.stringify(arr)
            const parsedArr = JSON.parse(data)
            console.log(parsedArr)
            const allNum = (parsedArr) => parsedArr.map((elem) => {
                return elem.number
            })
            res.send(`the number is ${allNum(parsedArr)}`)
        }
    })

    //   console.log(JSON.parse(data))  
})

const fs = require('fs')


const writeFile = (filename, data, res) => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return res.send(err)
        }
        res.send('number updated')
    })
}

app.post('/number', function (req, res) {
    if (!req.body.number || !req.body.number) {
        return res.send('There is no number');
    }


    fs.readFile(numbersFile, 'utf8', (err, data) => {
        if (err) {
            // if the json file does not exist
            if (err.code === 'ENOENT') {
                // creating a new array
                const arr = [req.body]
                // converting array to json
                const jsonArr = JSON.stringify(arr)
                // writing to file
                return writeFile(numbersFile, jsonArr, res)
            } else {
                return res.send(err)
            }
        }

        // parsing json file to javascript array
        const arr = JSON.parse(data)
        // adding request body to the array
        arr.push(req.body)
        // converting back to JSON
        const jsonArr = JSON.stringify(arr)
        // saving to file
        return writeFile(numbersFile, jsonArr, res)
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})

//lev's code
// const express = require('express')
// const bodyParser = require('body-parser')
// const logger = require('morgan')
// const app = express()

// app.use(logger('dev'))

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// const fs = require('fs')
// const numberFile = "number.json"

// app.get('/number', (req, res) => {
//   fs.readFile('number.json', 'utf8', (err, data) => {
//     if (err){
//       if (err.code === 'ENOENT'){
//         return res.send('there is no number')        
//       }
//       return res.send(err)
//     }
    
//     // data is a json string
//     const numberObj = JSON.parse(data);
//     res.send(`the number is ${numberObj.number}`)
//   })
// })

// app.post('/number', (req, res) => {
//   const jsonVal = JSON.stringify(req.body)
//   fs.writeFile(numberFile, jsonVal, (err) => {
//     if (err) {
//       return res.send(err)
//     }
//     res.send('number updated')
//   })
// })


// const port = 3000;
// app.listen(port, () => {
//   console.log(`listening to port ${port}`)
// })