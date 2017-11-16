const http = require('http');
const fs = require('fs')
const port = 3000;
const myTemplate = require('./template.js')


//to read a file, convert to a string and serve the string
  
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        //Content-Type: text/html or if needed text/plain
        response.write(myTemplate());  
        response.end();  
    }).listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })  










// fs.readFile('index.html', 'utf8', function(err, data) {
//     if (err) throw err;
//     return (data.toString());
//   });

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write();
    
//     res.end();
// })

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)
// })