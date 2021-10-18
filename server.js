const express = require('express');
const path = require('path');
const { bark, flower, mountain, puddle, sunset } = require("./controller");

const app = express();

app.use('/style', express.static('./public/styles.css', {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
}));

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

app.get('/img/bark2.jpg', bark);

app.get('/img/flower2.jpg', flower);

app.get('/img/mountain2.jpg', mountain);

app.get('/img/puddle2.jpg', puddle);

app.get('/img/sunset2.PNG', sunset);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`run it on ${port}`));