let promesa = new Promise((resolved) => {
    // console.log("Iniciando promesa...")
    setTimeout(()=>{
        // resolved("Saludos con promesa y timeOut")
    }, 3000);
    // console.log("Fin promesa...");
});

//async indica que que una funcion va a regresar una promesa
async function miFuncionConPromesa(){
    return "Saludos con promeso y async";
}

// miFuncionConPromesa().then(
//     valor => console.log(valor)
// );

// La palabra reservada await lo que va a hacer es esperar el resultado de una promesa

// async con await 
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise((resolved) => {
    resolved("Promesa con await");  
    });

    //Ya no es necesario utilizar .then() sino que con await va a recibir el valor
    // y se va a mostrar en consola 
    console.log( await miPromesa );
}


// funcionConPromesaYAwait();

// Promesas, await, async y setTimeout 

async function funcionConPromesaAwaitTimeOut(){
    console.log("Inicio de función");
    let miPromesa = new Promise((resolved) => {
        setTimeout(() => resolved("Promesa con await y timeout"), 3000);
    });
    console.log(await miPromesa);
    console.log("Fin de la función");
}

// NOTA: await solo se puede usar dentro de una funcion declarada con async !

funcionConPromesaAwaitTimeOut();

// Salida en consola: 

// ​​​​​Quokka 'AsyncJS.js' (node: v14.17.3)​​​​

// Inicio de función ​​​​​at ​​​​​​L15-Promesas/AsyncJS.js:37:4​
//  
// Promesa con await y timeout 
//   ​​​​​at ​​​​​​​​await miPromesa​​​ ​L15-Promesas/AsyncJS.js:41:4​

// Fin de la función ​​​​​at ​​​​​​L15-Promesas/AsyncJS.js:42:4​