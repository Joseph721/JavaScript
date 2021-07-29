// NO SE RECOMIENDA CREAR UN ARRAY DE ESTA MANERA
// let auto = new Array("BMW", "Mercedes Benz", "Volvo");

// DE ESTA MANERA SE RECOMIENDA DECLARAR ARREGLOS EN JAVASCRIPT
const carros = ["BMW", "Mercedes Benz", "Volvo"];
console.log(carros);

// MANERA DE ACCEDER A LOS ELEMENTOS DEL ARREGLO POR MEDIO DE SU INDICE
console.log(carros[1]);

// RECORRER EL ARREGLO
for (let index = 0; index < carros.length; index++) {
  console.log(carros[index]);
}

// DE ESTA MANERA SE MODIFICA EL VALOR DEL ARREGLO
carros[1] = "Mercedez Benz";
console.log(carros[1]);

// push: CON ESTE METODO SE AGREGAN MAS ELEMENTOS AL FINAL DEL ARREGLO EN UN NUEVO INDICE.
carros.push("Audi");
// console.log(carros); [ 'BMW', 'Mercedez Benz', 'Volvo', 'Audi' ]

// MANERAS DE SABER SI SE TRABAJA CON UN ARREGLO: 

console.log(carros instanceof Array); 

// console.log(Array.isArray(carros));

// if (Array.isArray(carros)) {
//   console.log("Es un arreglo");
// } else {
//   console.log("No es un arreglo");
// }
