// La funcion setinterval, ejecuta la funcion callback cada cierto tiempo como se puede observar en este ejemplo


// Este codigo ejecuta cada segundo la funcion de reloj la cual se muestra crea un objeto date y se extrae las horas, minutos y segundos. 
// En este caso la funcion setInterval ejecuta la funcion reloj cada segundo. Lo que realmente se mira en consola es como van cambiando los segundos
let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}}`);
}

setInterval(reloj, 1000);

//Salida en consola: 

// ​​​​​Quokka 'FuncionessetIntervalJS.js' (node: v14.17.3)​​​​

// 12: 51: 5} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 6} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 7} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 8} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 9} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 10} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 11} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 12} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​

// 12: 51: 13} ​​​​​at ​​​​​​​​`${ fecha.getHours() }: ${ fecha.getMinu...​​​ ​L14-Callback/FuncionessetIntervalJS.js:8​
