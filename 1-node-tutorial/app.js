import http from 'http';
import fs from 'fs';


http
  .createServer(function(req, res){
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)

    // CreateReadStream  Node.js ka ek asynchronous method hai jo file ko 
    // chunk-by-chunk (thoda-thoda) read karta hai bina poori file ko memory mein load kiye
    const filestream = fs.createReadStream('./content/big.txt', 'utf-8');
    filestream.on('open', ()=>{

      // pipe humey response send krta hai file 
      filestream.pipe(res)
    })
    filestream.on('error', (err)=>{
      res.end(err)
    })
})
  .listen(5000)
