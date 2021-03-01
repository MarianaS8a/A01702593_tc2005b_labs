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
    let productoshtml = "";
    ropa.forEach(element => {
        productoshtml += ( "<li>" + element + "</li>");
    });
    response.send('<html><head><meta charset="UTF-8"><title>Servidor node</title></head><body><h1>Bienvenido a la tienda RECON</h1></body><h3>Artículos disponibles:</h3><ul>'+productoshtml+'</ul</html>');
});

router.get("/add-product",(request, response) =>{
    response.send('<html><head><meta charset="UTF-8"><title>Servidor node</title></head><body><h1>Añade tu producto</h1></body><form action= "add-product" method= "POST"><input type="text" name= "nombre"><input type="submit" value= "Guardar producto"></form></html>');
});

router.post("/add-product",(request, response) =>{
    let datos =request.body.nombre;
    ropa.push(datos);
    filesystem.appendFileSync('productos.txt', datos+",");
    response.redirect('/productos/inicio');
});


module.exports = router;