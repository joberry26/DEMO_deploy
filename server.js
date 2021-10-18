const express = require('express');
const path = require('path');

const app = express();

app.use('/style', express.static('./public/styles.css'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/products.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`run it on ${port}`))