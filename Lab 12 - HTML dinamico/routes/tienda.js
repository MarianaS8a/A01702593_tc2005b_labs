const express = require('express');
const bodyParser = require('body-parser');
const filesystem = require('fs');

const router = express.Router();
const ropa = ["Jeans", "Blusa", "Sudadera", "Gorra"];



ropa.forEach(element => {
    filesystem.appendFileSync('productos.txt', element+",");
});

router.use(bodyParser.urlencoded({extended: false}));

router.use('/inicio',(request, response) =>{ 
    response.render('inicio', {ropa: ropa});
});

router.get("/add-product",(request, response) =>{
    response.render('add-product');
});

router.post("/add-product",(request, response) =>{
    let datos =request.body.nombre;
    ropa.push(datos);
    filesystem.appendFileSync('productos.txt', datos+",");
    response.redirect('/tienda/inicio');
});


module.exports = router;