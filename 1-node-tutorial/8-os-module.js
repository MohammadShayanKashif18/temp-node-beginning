import os from 'os';
const uptime = os.uptime();

// // info about user 
const user = os.userInfo()
console.log(user)


// // method return the system uptime in second 
console.log(`The System uptime is ${os.uptime()} second`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)