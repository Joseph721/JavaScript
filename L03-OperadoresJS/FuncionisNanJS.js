let miNumero = "18x";

// NaN: Not a number

let edad = Number(miNumero);
console.log(edad);

// Si la variable edad "no es un un numero" entonces enviamos el mensaje
if (isNaN(edad)) {
  console.log("No es un numero");
} else {
  if (edad >= 18) {
    console.log("Puede votar");
  } else {
    console.log("Muy joven para votar");
  }
}
