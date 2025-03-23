import EventEmitter from 'events';

const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {     // we also pass argument in the emit function 
    console.log(`data received user ${name} with id: ${id}`)
})
// we want console as many emit function we want 
customEmitter.on('response', () => {
    console.log('some other logic data')
})
customEmitter.emit('response', 'john', 34)  

// this is the output we recieved 
// data received user john with id: 34
// some other data