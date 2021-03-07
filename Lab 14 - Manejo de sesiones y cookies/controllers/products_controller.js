const Product = require("../models/product");

exports.getInicio = (request, response) =>{ 
    let products =  Product.fetchAll();
    response.render('inicio', { 
        ropa : products,
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.getNewProduct = (request, response,next) =>{
    response.render('add-product',{
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNewProduct = (request, response,next) =>{
    let producto = new Product(request.body.nombre_producto);
    producto.save();
    response.setHeader('Set-Cookie', ['ultimo_producto='+ producto.name +'; HttpOnly']);
    response.redirect('/tienda/inicio');
};