const http = require('http');
const url = require('url')
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/name?=')
    res.write('Hello' + req.url.slice(-7));
    res.end();
}) 

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})