let resultado = sumarTodo(5, 4, 13, 10, 9, 10);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    // arguments.length: Se reccoren todos los elementos que contenga nuestro arreglo de argumentos.  
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}