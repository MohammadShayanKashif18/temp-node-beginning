import http from 'http';

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('hello world')
})
server.listen(5000, () => {
    console.log('Server is listening on port : 5000....')
})