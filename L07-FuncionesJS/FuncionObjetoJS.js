function miFuncion(a , b){
    console.log(arguments.length);
    console.log("Suma: " + (a + b));
}

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);