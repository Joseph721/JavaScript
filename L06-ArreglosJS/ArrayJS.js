// NO SE RECOMIENDA CREAR UN ARRAY DE ESTA MANERA 
let auto = new Array("BMW", "Mercedes Benz", "Volvo");

// DE ESTA MANERA SE RECOMIENDA DECLARAR ARREGLOS EN JAVASCRIPT 
const carros = ["BMW", "Mercedes Benz", "Volvo"];
console.log(carros);

// MANERA DE ACCEDER A LOS ELEMENTOS DEL ARREGLO POR MEDIO DE SU INDICE 
console.log(carros[1]);

// RECORRER EL ARREGLO 
for (let index = 0; index < carros.length; index++) {
    console.log(carros[index]);
}