  
    // CreateReadStream  Node.js ka ek asynchronous method hai jo file ko 
    // chunk-by-chunk (thoda-thoda) read karta hai bina poori file ko memory mein load kiye

import { createReadStream } from "fs";

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding:'utf-8'})


// default 64kb
// last buffer - remainder
// highWaterMark - control size

// highWaterMark ek buffer size hota hai jo createReadStream ya kisi bhi stream ke andar 
// set kiya jata hai. Yeh batata hai ke ek dafa mein kitna data (chunk) read kiya jaye

// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})

// Encoding ka kaam hota hai batana ke data kis format mein read hoga.
// Agar hum encoding set nahi karte, toh data Buffer format mein aata hai
// (binary data jaisa). Agar humein readable text chahiye, toh utf8 use karte hain.

// const stream = createReadStream('./content/big.txt', {encoding: 'utf-8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))