// Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
      return this.nombre + " " + this.apellido;
  };
}

let padre = new Persona("Luis", "Gonzalez", "LGonzalez@mail.com");
// console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona("Sofia", "Hernandez", "SHernandez");
// console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);

