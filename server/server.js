require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('getUsuario');
});

app.post('/usuario', (req, res) => {
    let data = req.body;
    res.json({ usuario: data });
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto :', process.env.PORT);
});