let miNumero = "21";

// console.log(typeof miNumero);

// LA FUNCION "Number" NOS PERMITE CONVERTIR UN STRING A TIPO NUMBER
let edad = Number(miNumero);
// console.log(typeof edad); Number
if (edad >= 18) {
  console.log("Puede votar");
} else {
  console.log("Muy joven para votar");
}

// OPERADOR TERNARIO
let resultado = (edad>=18) ? "Puede votar " : "Muy joven para votar";
console.log(resultado);