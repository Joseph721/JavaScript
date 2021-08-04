let persona = {
  nombre: "Joseph",
  apellido: "Chávez",
  email: "jChavez@gmail.com",
  edad: 22,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);

//   Se puede acceder a las propiedades de un objeto por medio de arreglos
console.log(persona["apellido"]);

// for in: Para recorrer todas las propiedades del objeto.
for( nombrePropiedad in persona){
    console.log( nombrePropiedad);
    // console.log(persona[nombrePropiedad]);
}
