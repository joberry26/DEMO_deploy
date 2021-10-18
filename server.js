const express = require('express');
const path = require('path');

const app = express();

app.use('/style', express.static('./public/styles.css'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/main.js'))
});


app.get('/products.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/products.html'))
})

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/img/bark2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/img/bark2'))
})

app.get('/img/flower2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/img/flower2'))
})

app.get('/img/mountain2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/img/mountain2'))
})

app.get('/img/puddle2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/img/puddle2'))
})

app.get('/img/sunset2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/img/sunset2'))
})


const port = process.env.PORT || 4000

app.listen(port, () => console.log(`run it on ${port}`))