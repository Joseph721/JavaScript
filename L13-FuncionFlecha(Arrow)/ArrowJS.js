// Funcion anonima
let miFuncion = function () {
  console.log("Saludos desde mi funcion...");
};

// Funcion Flecha (Arrow)

// const miFuncionFlecha = () => {
//     console.log("Saludos desde funcion flecha");
// }

//Funcion flecha en una linea.
// const miFuncionFlecha = () => console.log("Saludos desde funcion flecha en una linea");

// miFuncionFlecha();

// const saludar = () => {
//   return "Saludos desde funcion felcha";
// }

const saludar = () => "Saludos desde funcion felcha";

console.log(saludar());

const regresarObjeto = () => ({ nombre: "Juan", apellido: "Hernández" });
console.log(regresarObjeto());

// const funcionConParametros = function(mensaje){
//     console.log(mensaje);
// }

const funcionConParametros = (mensaje) => console.log(mensaje);
// const funcionConParametros = mensaje => console.log(mensaje);


funcionConParametros("Saludos con parametros");

// const funcionConVariosParametros = (n1, n2) => n1 + n2;
const funcionConVariosParametros = (n1, n2) => {
    let resultado = n1+n2;
    return `Resultado: ${resultado}`;
}

console.log(funcionConVariosParametros(5,9));
