import http from 'http';

const server = http.createServer((req,res) => {
    // console.log(req.method) // req.method humey terminal main btayega konsa method hai GET ka hai
    // console.log(req.url) // req.url humey page ka btayega kis page pr access kr rhy hain for ex: /contact, about

    const url = req.url;
    // Home page 
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
    // res.write main bhi respnse bhej skty hain or res.end main bhi bhej skty 
        res.write('<h1>Home page</h1>')
        res.end('')
    }
    // About page 
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>About page</h1>')
        res.end('')
    }   
    else{
        res.writeHead(404, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>Page not found</h1>')
        res.end('')
    }
    
    })

server.listen(5000)