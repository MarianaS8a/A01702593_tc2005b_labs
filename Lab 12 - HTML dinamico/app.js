
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const Mariana = require('./routes/about-me');
app.use('/Mariana', Mariana);

const Jorge = require('./routes/about-you');
app.use('/Jorge', Jorge);

const tienda = require('./routes/tienda');
app.use('/tienda', tienda);

app.use("/",(request, response, next) => {   
    response.status(404).send('<html><head><meta charset="UTF-8"><title>Page not found</title></head><body><h1>Error 404</h1></body></html>')
});

app.listen(8080);