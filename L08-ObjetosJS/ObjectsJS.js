let persona = {
  nombre: "Joseph",
  apellido: "Chávez",
  email: "jChavez@gmail.com",
  edad: 22,
  nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
  }
};

// Funcion para imprimir el nombre y apellido del objeto persona. 
console.log(persona.nombreCompleto());

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.email);
// console.log(persona.edad);

// console.log(persona);
