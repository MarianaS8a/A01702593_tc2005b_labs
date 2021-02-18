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