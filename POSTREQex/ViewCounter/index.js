const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const fs = require('fs')


app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var counter = 0
app.get('/', (req, res) => {
  fs.readFile('counter.json', 'utf8', (err, data) => {
      if (err){
        return res.send(`${counter+=1}`)
      }
    //   console.log(JSON.parse(data))

      res.send(`Welcome to my site ${counter+=1}`)
  })
}) 

const writeFile = (filename, data, res) => {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      return res.send(err)
    }
    res.send(counter+=1)
  })
}

const counterFile = "counter.json"

app.post('/reset', function (req, res) {
  if (!req.body.counter || !req.body.counter) {
    return res.send(`${counter=0}`);
  }


  fs.readFile(counterFile, 'utf8', (err, data) => {
    if (err) {
      // if the json file does not exist
      if (err.code === 'ENOENT') {
        // creating a new array
        const arr = [req.body]
        // converting array to json
        const jsonArr = JSON.stringify(arr)
        // writing to file
        return writeFile(counterFile, jsonArr, res)
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
    return writeFile(counterFile, jsonArr, res)
  })
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})