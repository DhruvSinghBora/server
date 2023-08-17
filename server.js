const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 300;

const server = http.createServer((req, res) => {
    // You can add more logic here to handle different routes if needed.
    
    // Serve the HTML file
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});