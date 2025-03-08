import http from 'http';

// const server = http.createServer((req, res) => {
//     res.end('Welcome ')
// })

// Using Event Emitter API 
const server = http.createServer()

// emit request event 
// subcribe to it / listen to it / response to it 
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)