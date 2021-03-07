//Authors: Jorge Alan Ramírez Elías, Mariana Soto Ochoa

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'lkjsdofnasiodufnosidfospd',
    resave: false,
    saveUninitialized: false
}));

const Mariana = require('./routes/about-me');
app.use('/Mariana', Mariana);

const Jorge = require('./routes/about-you');
app.use('/Jorge', Jorge);

const tienda = require('./routes/tienda');
app.use('/tienda', tienda);

app.use("/pregunta",(request, response, next) => {
    response.render('pregunta');
});

const users = require('./routes/users');
app.use('/users', users);

app.use("/",(request, response, next) => {   
    response.status(404).send('<html><head><meta charset="UTF-8"><title>Page not found</title></head><body><h1>Error 404</h1></body></html>')
});

app.listen(8080);