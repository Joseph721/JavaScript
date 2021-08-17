// Una promesa en javascript es codigo que tiene varios estados 

// let miPromesa = new Promise((resolver, rechazar)
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved("Resolvió correcto...");
    }else{
        rejected("Se produjo un error.");
    }
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

miPromesa.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
);