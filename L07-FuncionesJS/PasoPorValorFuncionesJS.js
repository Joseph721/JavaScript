// El paso por valor es cuando utilizamos tipos que no son objetos.
// Ejemplo: Tipos numéricos, booleano, etc.

// Tipos primitivos: Se les dice de esa manera porque no tienen atributos ni metodos.
// Asociados al valor de 10.
let x = 10;

function cambiarValor(a) {
  a = 20;
}

// Paso por valor 
cambiarValor(x); // 10
console.log(x);

// console.log(a);