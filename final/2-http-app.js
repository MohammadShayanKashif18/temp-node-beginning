import http from 'http';
import { readFileSync } from 'fs';

// get all files 
const homePage = readFileSync('./navbar-app/index.html')
const HomeStyle = readFileSync('./navbar-bar/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
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
     // styles
     else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>About page</h1>')
        res.end('')
    }
     // image/logo 
     else if(url === '/img.svg'){
        res.writeHead(200, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>About page</h1>')
        res.end('')
    }
     // browser-appp.js 
     else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>About page</h1>')
        res.end('')
    }
    // 404
    else{
        res.writeHead(404, {'content-type': 'text/html'}) // writehead main status code dena hoga or content ki type 
        res.write('<h1>Page not found</h1>')
        res.end('')
    }
    
    })

server.listen(5000)
