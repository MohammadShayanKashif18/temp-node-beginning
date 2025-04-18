import express from 'express';

const app = express();

// app.get
app.get('/', (req, res ) =>{
    console.log('user hit the server')
    res.status(200).send('Home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send("Resource Not Found!")
})


// app.post
// app.put
// app.delete
// app.all
// app.use


// app.listen
app.listen(5000, () =>  {
    console.log("server is running on port 5000")
})