//Authors: Jorge Alan Ramírez Elías, Mariana Soto Ochoa
const filesystem = require('fs');
const http = require('http');

const ropa = ["Jeans", "Blusa", "Sudadera", "Gorra"];
ropa.forEach(element => {
    filesystem.appendFileSync('productos.txt', element+",");
});
// filesystem.writeFileSync('productos.txt', ropa);

const server = http.createServer((request, response) =>{
    if (request.url === "/inicio"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Bienvenido a la tienda RECON</h1></body>");
        response.write("<h3>Artículos disponibles:</h3><ul>"); 
        
        ropa.forEach(element => {
            response.write( "<li>" + element + "</li>");
        });

        response.write("</ul");
        response.write("</html>");
        response.end();
    }
    
    
    else if(request.url ==="/add-product" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Añade tu producto</h1></body>");
        response.write('<form action= "add-product" method= "POST"><input type="text" name= "nombre"><input type="submit" value= "Guardar producto"></form>');
        response.write("</html>");
    }

    else if(request.url ==="/add-product" && request.method === "POST"){
        let datos = [];
        request.on('data',function(dato){
            datos.push(dato);
        })
        request.on('end', function (){
        let strdatos = Buffer.concat(datos).toString();
        let producto = strdatos.split('=')[1];
        ropa.push(producto);
        filesystem.appendFileSync('productos.txt', producto+",")
        })
        response.writeHead(301,{Location:'/inicio'});
    }

    else if(request.url ==="/about-us"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Acerca de nosotros</title></head>');
        response.write("<h1>Acerca de nostros</h1>");
        response.write("<body><h3>RECON se fundó en 1960 y este año celebra su 81 aniversario desde que comenzamos siendo una pequeña empresa local queretana.</h3></body>");
    }

    else{
        response.statusCode = 404;
       response.setHeader('Content-Type', 'text/html');
       response.write("<html>");
       response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
       response.write("<body><h1>Error 404</h1></body>");
       response.write("</html>");
       response.end();
    }

    response.end();
});

server.listen(3000)