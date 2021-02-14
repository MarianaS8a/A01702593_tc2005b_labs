//FUNCIONES

//1. Entrada: un número pedido con un prompt. 
//Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos.
//Utiliza document.write para producir la salida
const num = prompt("Escribe un número entero");

document.write("<h2>Cuadrados y cubos</h2>");

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


//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
//Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);

const initial_time = new Date().getTime();
const result = prompt("¿Cuánto es " + num1 + " + " + num2);
const final_time = new Date().getTime();

const answer = num1 + num2;
time = final_time - initial_time;

document.write("<br>");
document.write("<h2>Suma</h2>");

if (result == answer){
    document.write("<h4>La respuesta es correcta</h4> ");
}
else{
    document.write("<h4>" + num1 + " + " + num2 + " no es " + result + "</h4>");
    document.write("<h4> La respuesta correcta es: " + answer + "</h4>");
}

document.write("<h4> Tardaste: " + time/1000 + " segundos </h4>");


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
    return([zeros, positives, negatives]);
}

// 4. Función: promedios. Parámetros: Un arreglo de arreglos de números. 
//Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

function average(matrix){
    const result = [];
    for(let i = 0; i<= matrix.length-1; i++){
        let average = 0;
        for(let j = 0; j<= matrix[i].length-1; j++){
            average = average + matrix[i][j];
        }

        result.push(average/matrix[i].length);
    }

    return(result);
}

//5. Función: inverso. Parámetros: Un número. 
//Regresa: El número con sus dígitos en orden inverso.

function reverse(number){
    let result = 0;;
    let temp = 0;
    while (number >= 10){
        temp = number%10;
        result *= 10;
        result += temp;
        number = number - temp;
        number = number/10;
    }

    result *= 10;
    result+=number;

    return(result);
}

/*6.Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna problemática que 
hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM,
 entre otros). El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript, utilizando al menos
la creación de un objeto, el objeto además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el documento
HTML.*/

//La clase representa cada uno de los cursos que toma un alumno
//Las funciones de la clase pueden calcular la calificación del alumno en cada clase y el total de horas semanales que la toma

class Courses{

    constructor(name, duration, days, grades){
        this.name = name; //Nombre del curso
        this.duration = duration; //Tiempo que dura cada sesión
        this.days = days; //Número de días que se toma a la semana
        this.grades = grades; //Calificaciones de las actividades
    }

    //Promedio del alumno en cada clase
    calc_average(){
        let average = 0;
        for(let i = 0; i<this.grades.length; i++){
            average = average + this.grades[i];
        }
        return(average/this.grades.length);
    }

    //Horas de clase a la semana
    weekly_hours(){
        return(this.days*this.duration);
    }

};