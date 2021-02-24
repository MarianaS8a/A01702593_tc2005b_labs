const http = require('http');
const server = http.createServer((request, response) =>{
    if (request.url === "/inicio"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
        response.write("<body><h1>Bienvenido a la tienda RECON</h1></body>");
        response.write('<html class=no-js lang=es> <head> <meta charset=utf-8 /> <meta http-equiv=x-ua-compatible content="ie=edge"> <meta name=viewport content="width=device-width, initial-scale=1.0"> <title>Foundation for Sites</title> <link rel=stylesheet href="assets/css/foundation.css"> <link rel=stylesheet href="assets/css/main.css"> </head> <body> <header> <span class=title-bar-title>Ropa y accesorios</span><br></header> <main> <div class=grid-container> <div class="grid-x grid-margin-x align-stretch" data-equalizer data-equalize-by-row=true> <div class="cell small-1 medium-2 large-3" data-equalizer-watch> <div class=card> <div class=card-divider> <h3 id=titulo_blusa>Blusa roja</h3> </div> <div class=card-image> <img src="//www.belagoom.com/wp-content/uploads/2019/05/Blusa-roja-manga-volante.jpg" alt="Foto de blusa"> </div> <div class=card-section><p>Compra esta maravillosa blusa talla mediana.</p><h4>$250</h4> <h4>Cantidad:</h4> <select id=blusa> <option value=0>0</option> <option value=1>1</option> <option value=2>2</option> <option value=3>3</option> <option value=4>4</option> <option value=5>5</option> </select> </div> </div> </div> <div class="cell small-1 medium-2 large-3" data-equalizer-watch> <div class=card> <div class=card-divider> <h3 id=titulo_collar>Collar dorado</h3> </div> <img src="//resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3036812.jpg" alt="Foto de collar"> <div class=card-section><br><br><br><p>Destaca con este collar baÃ±ado en 2k de oro.</p><h4>$400</h4> <h4>Cantidad:</h4> <select id=collar> <option value=0>0</option> <option value=1>1</option> <option value=2>2</option> <option value=3>3</option> <option value=4>4</option> <option value=5>5</option> </select> </div> </div> </div> <div class="cell small-1 medium-2 large-3" data-equalizer-watch> <div class=card> <div class=card-divider> <h3 id=titulo_pants>Pants Puma</h3> </div> <img src="//resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3013246.jpg" alt="Foto de pants"> <div class=card-section><br><br><p>Usa estos pants para sentirte cÃ³modo o cÃ³moda esta cuarentena.</p><h4>$400</h4> <h4>Cantidad:</h4> <select id=pants> <option value=0>0</option> <option value=1>1</option> <option value=2>2</option> <option value=3>3</option> <option value=4>4</option> <option value=5>5</option> </select> </div> </div> </div> <div class="cell small-1 medium-2 large-3"> <div class=card> <div class=card-divider> <h3>Mi carrito</h3> </div> <div class=card-section><p id=product1></p><p id=product2></p><p id=product3></p><h4 id=total>Carrito vacÃ­o</h4> </div> </div> </div> </div> </div> </main> <footer><br><br><p>Material design: es un estándar para el diseño web y apps. Además, es un sistema de diseño desarrollado por Google para desarrollar apps responsivas, usables y escalables.</p><br><h3>Referencias</h3><p>Davidov, S. (2021). What Is Material Design? Definition, Uses, and Examples | Elementor. Retrieved 16 February 2021, from https://elementor.com/blog/what-is-material-design/</p></footer> <script src="assets/js/productos.js"></script> <script src="assets/js/vendor.js"></script> <script src="assets/js/foundation.js"></script> </body> </html>')
        
    }
/*
    else if(request.url ==="/sudadera"){

    }

    else if(request.url ==="/blusa"){

    }

    else{

    }*/
    response.end();
});

server.listen(3000)