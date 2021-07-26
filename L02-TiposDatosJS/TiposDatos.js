// TIPO DE DATO STRING
var nombre = "Joseph";
console.log(nombre);

nombre = 10.5;

// typeof: SE UTILIZA PARA SABER EL TIPO DE DATO QUE ALMACENA LA VARIABLE 
console.log(typeof nombre);

// TIPO DE DATO NUMERICO
var numero = 1000;
console.log(numero);

// TIPO DE DATO OBJECT 
var objeto = { 
    nombre : "Luis",
    apellido: "González",
    telefono: "664999111"
}

console.log(objeto);

// TIPO DE DATO BOOLEAN (true, false)
var bandera = true;
console.log(bandera);

// TIPO DE DATO function
function miFuncion(){}

console.log(miFuncion);

// TIPO DE DATO Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

// TIPO CLASE ES UNA function 
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log( Persona);

// TIPO DE DATO undefined: ESTE TIPO DE DATO LO TENEMOS EN AUTOMATICO CUANDO DEFINIMOS cualquier tupo de variable.

var x;
console.log(typeof x);

x = undefined;
console.log(x);

// null:  SIGNIFICA AUSENCIA DE VALOR
var y = null;
console.log(typeof y);

// TIPO DE DATO Array
var autos = ["BMW","Audi","Volvo"];
console.log(autos);
console.log(typeof autos);

var z = " ";
console.log(z);
console.log(typeof z);

// let: PARA DECLARAR UNA VARIABLE 
// const: PARA DECLARAR UNA CONSTANTE

let nombre2;
nombre2  = "juan";
console.log(nombre2);


const apellido = "Perez";