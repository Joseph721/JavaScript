let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved("Resolvió correcto...");
    }else{
        rejected("Se produjo un error.");
    }
});

let promesa = new Promise((resolved) => {
    console.log("Iniciando promesa...")
    setTimeout(()=>{
        resolved("Saludos con promesa y timeOut")
    }, 3000);
    console.log("Fin promesa...");
});

promesa.then(
    valor => console.log(valor)
);
