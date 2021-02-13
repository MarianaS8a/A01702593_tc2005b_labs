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

function random_sum(){
    const num1 = Math.floor(Math.random()*100);
    const num2 = Math.floor(Math.random()*100);

    const initial_time = new Date().getTime();
    const result = prompt("¿Cuánto es " + num1 + " + " + num2);
    const final_time = new Date().getTime();

    const answer = num1 + num2;
    time = final_time - initial_time;

    if (result == answer){
        document.write("La respuesta es correcta ");
    }
    else{
        document.write("La respuesta es incorrecta ");
    }

    document.write(time/1000 + "segundos");
}

//3. Función: contador. Parámetros: Un arreglo de números. 
//Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

function counter(array){
    let zeros = 0;
    let positives = 0;
    let negatives = 0;
    for(let i = 0; i <= array.length; i++){
        if (array[i] == 0){
            zeros++;
        }
        else if(array[i] > 0){
            positives++;
        }
        else if(array[i] < 0){
            negatives++;
        }
    }

    document.write("<p> Cantidad de 0's: " + zeros + "</p>");
    document.write("<p> Cantidad de valores mayores a cero: " + positives + "</p>");
    document.write("<p> Cantidad de valores menores a cero: " + negatives + "</p>");

}





//CASOS DE PRUEBA
const num = prompt("Escribe un número entero");
cuadrado_cubo(num);

document.write("<br>");

random_sum();

const array = [0, 4, 2, -1, -5, -7];

counter(array);