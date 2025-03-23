import http from 'http';
import fs from 'fs';

http
  .createServer(function(req, res){
    // const text = fs.readFileSync('./content/big.txt', 'utf-8')
    // res.end(text)
    const filestream = fs.createReadStream('./content/big,txt', 'utf-8');
    filestream.on('open', ()=>{

      // pipe humey response send krta hai 
      filestream.pipe(res)

    })
    filestream.on('err', ()=>{
      res.end(err)
    })
})
  .listen(5000)

