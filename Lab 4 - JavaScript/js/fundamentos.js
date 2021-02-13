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

// 4. Función: promedios. Parámetros: Un arreglo de arreglos de números. 
//Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function average(matrix){
    for(let i = 0; i<= matrix.length-1; i++){
        let average = 0;
        for(let j = 0; j<= matrix[i].length-1; j++){
            average = average + matrix[i][j];
        }

        document.write(average/matrix[i].length + "<br>");
    }
}

//5. Función: inverso. Parámetros: Un número. 
//Regresa: El número con sus dígitos en orden inverso.

function reverse(number){
    let temp;
    while (number > 10){
        temp = number%10;
        document.write(number%10);
        number = number - temp;
        number = number/10;
    }

    document.write(number);
}

/*6.Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que 
hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM,
 entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos
la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento
HTML.*/

class Courses{

    constructor(name, duration, days, grades){
        this.name = name;
        this.duration = duration;
        this.days = days;
        this.grades = grades;
    }

    calc_average(){
        let average = 0;
        for(let i = 0; i<this.grades.length; i++){
            average = average + this.grades[i];
        }
        document.write(average/this.grades.length);
    }

    weekly_hours(){
        document.write(this.days*this.duration);
    }

};


//CASOS DE PRUEBA
const num = prompt("Escribe un número entero");
cuadrado_cubo(num);

document.write("<br>");

random_sum();

const array = [0, 4, 2, -1, -5, -7];

counter(array);

const matrix = [[0,4,7,1], [2,5,3], [9]];
average(matrix);

let number = 4837;
reverse(number);

const math = new Courses("Mate", 2, 2, [86,67,100,100]);

math.calc_average();
math.weekly_hours();

const english = new Courses("Ingles", 4, 2, [99, 89, 100, 90]);

english.calc_average();
english.weekly_hours();