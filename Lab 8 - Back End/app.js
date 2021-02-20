//Una función que reciba un arreglo de números y devuelva su promedio.
function average(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }

    return (sum/array.length);
}

//const { setupMaster } = require('cluster');
//Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
function print_string(text){
    const filesystem = require('fs');
    filesystem.writeFileSync('new string.txt', text);
}


//Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
//Selection Sort

function swap(arr, v, m)  
{  
    let temp = arr[v];  
    arr[v] = arr[m];  
    arr[m] = temp; 
}  

function selectionSort(arr)  
{  
    n = arr.length; 
  
    for (let i = 0; i < n-1; i++)  
    {  
        let min = i;  
        for (let j = i+1; j < n; j++)  
        if (arr[j] < arr[min])  
            min = j;
  
        swap(arr, min, i);  
    }
    
    return(arr);
}  
  


console.log(average([2,4]));
print_string("Esto se escribirá en un archivo de texto.");
console.log(selectionSort([3,4,8,1]));

//Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.
const http = require('http');

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>");
    response.write("<meta charset='UTF-8'>");
    response.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>")
    response.write("<head><title>Servidor node</title></head>");
    response.write("<body><h2>Acerca de mi</h2>");
    response.write("<h3> Hola, mi nombre es Mariana Soto Ochoa. Actualmente vivo en la ciudad de Queretaro y estudio Ingeniería en Tecnologías Computacionales.</h3>");
    response.write("<h3> Mis hobbies favoritos son tocar el piano, cocinar y hacer ejercicio. Además, disfruto mucho de aprender cosas nuevas y pasar tiempo con mis seres queridos.</h3>");
    response.write("<img src='https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg' alt='Piano'></body>");
    response.write("<br></br>");
    response.write("<footer> <h2>Información de contacto</h2>");
    response.write("<h4> Matrícula: A01702593</h4>");
    response.write("<h4>Correo electrónico: a01702593@itesm.mx</h4>");
    response.write("<h4>Editor: Visual Studio Code</h4> </footer>");
    response.write("</html>");
    response.end();
});


server.listen(3000);