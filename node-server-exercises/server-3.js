const http = require('http');
const fs = require('fs')
const port = 3000;

// const myTemplate = require('./template.js')

    // const server = http.createServer(function(request, response) {  
    //     response.writeHeader(200, {"Content-Type": "text/html"});  
    //     response.write(myTemplate());  
    //     response.end();  
    // }).listen(port, () => {
    //     console.log(`Server running at http://localhost:${port}`)
    // })  





    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        })
        .listen(port, () => {
                console.log(`Server running at http://localhost:${port}`)
        })
    });