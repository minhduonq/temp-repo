const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Wellcomme to our HOMEPAGE')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    else if (req.url === '/pp') {
        res.end('Welcome to policy page')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(`
        <h2>Page 404 not found</h2>
        <p>Sorry, the page you are looking for does not exist</p>
        <a href="/">back to home</a>
        `)
    }
})

server.listen(5000)