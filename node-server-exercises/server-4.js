const http = require('http')
const url = require('url')
const port = 3000;
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        fs.readFile('./index.html', function(err, html) {
            if (err){
                throw err  
            } ;
            res.writeHeader(200, {'Content-Type' : 'text/html'})  
            res.write(html)
            res.end()
        });
    } else if (req.url === '/page2') {
        fs.readFile('page2.html', function(err, html) {
            if (err){
                throw err  
            } ;
              res.writeHeader(200, {'Content-Type' : 'text/html'})  
              res.write(html)
              res.end()
        });
    
    } else {
        res.write('page not found')
        res.end()
    }
})


server.listen(port, () => {
    console.log(`listening on port ${port}`)
})


// const server = http.createServer((req, res) => {
//   console.log(req.url)
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   if (req.url === '/dogs'){
//     res.write('My Favorite dogs: ')
//     res.end()    
//   } else if (req.url === '/') {
//     res.write('welcome to my page')
//     res.end()
//   } else {
//     res.write('page not found')
//     res.end()
//   }
// })


// server.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })