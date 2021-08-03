// Funcion de tipo expresion
let sumar = function (a ,b){return a + b};

resultado = sumar(5,7);
console.log(resultado);

// const: Ya no se podrá cambiar la referencia o el valor que sele asignó a la 
// variable sumarFuncionTipoFlecha 

// Cuando se trabaja con funciones flecha, ya no es necesario utilizar la palabra
// reservada "function" 

// Despues se agregan los argumentos y tampoco se utilizan llaves { }
// Se agrega el operador de flecha ( => ). Y lo que indica es que a continuacion vamos a definir el cuerpo de la funcion.

// Tampoco es necesario agregar la palabra reservada de "return".
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3,4);
console.log(resultado);

// console.log(sumarFuncionTipoFlecha(4,5));