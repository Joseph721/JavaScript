function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}

miFuncion2();
miFuncion1();

// Funciones de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(n1, n2, funcionCallback){
    let res = n1 + n2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,7, imprimir);



// Llamadas asincronas con uso de setTimeout

function miFuncionCallback(){
    console.log("Saludo asíncrono despues de 3 segundos...");
}

// Se pasan como argumentos la funcion callback y despues el tiempo de espera en formato de milisegundos 

// Cambiando el orden de los milisegundos, éstos se dejan de ejcutar de 
// manera secuencial. 
setTimeout(miFuncionCallback, 3000); //Se ejecuta despues de 3 seg.

setTimeout(function(){console.log("Saludo asincrono 2")}, 4000);

setTimeout(()=> console.log("Saludos asíncrono 3"), 5000);

setTimeout(()=> {
    console.log("Saludo asíncrono 4")
}, 1000);

// Salida en consola:

// ​​​​​Quokka 'FuncionsetTmeoutJS.js' (node: v14.17.3)​​​​

// Funcion 2 ​​​​​at ​​​​​​L14-Callback/FuncionsetTmeoutJS.js:6:4​

// Funcion 1 ​​​​​at ​​​​​​L14-Callback/FuncionsetTmeoutJS.js:2:4​

// Resultado: 12 ​​​​​at ​​​​​​​​mensaje​​​ ​L14-Callback/FuncionsetTmeoutJS.js:14:4​

// Saludo asíncrono 4 ​​​​​at ​​​​​​L14-Callback/FuncionsetTmeoutJS.js:43:4​
//  
// Saludo asíncrono despues de 3 segundos... 
//   ​​​​​at ​​​​​​L14-Callback/FuncionsetTmeoutJS.js:29:4​

// Saludo asincrono 2 ​​​​​at ​​​​​​L14-Callback/FuncionsetTmeoutJS.js:38:0​

// Saludos asíncrono 3 