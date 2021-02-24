const http = require('http');

const ropa = ["Jeans", "Blusa", "Sudadera", "Gorra"];
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
        //response.write('<form action= "add-product" method= "GET"><input type="submit" name="Add product"></form>');
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
/*
    else{

    }*/
    response.end();
});

server.listen(3000)