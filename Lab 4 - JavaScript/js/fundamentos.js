//FUNCIONES

//1. Entrada: un número pedido con un prompt. 
//Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos.
//Utiliza document.write para producir la salida

function cuadrado_cubo(num){

//Tabla
document.write("<table>");

//Encabezados
document.write("<tr>");
document.write("<th>Número</th>","<th>Al cuadrado</th>", "<th>Al cubo</th>");
document.write("</tr>");

//Contenido
for(let i = 0; i<= num; i++){
    document.write("<tr>");
    document.write("<td>", i, "</td>");
    document.write("<td>", i**2, "</td>");
    document.write("<td>", i**3, "</td>");
    document.write("</tr>")
}
document.write("</table>");

}

//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
//Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

function suma(num){
    getRandomInt
}






//CASOS DE PRUEBA

const num = prompt("Escribe un número entero");
cuadrado_cubo(num);