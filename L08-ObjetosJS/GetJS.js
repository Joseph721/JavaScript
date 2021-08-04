let persona = {
    nombre: "Joseph",
    apellido: "Chávez",
    email: "jChavez@gmail.com",
    edad: 22,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    }
  };