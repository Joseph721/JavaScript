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