let persona = {
    nombre: "Joseph",
    apellido: "Chávez",
    email: "jChavez@gmail.com",
    edad: 22,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    }
  };

// Para agregar propiedades al objeto se hace de la siguiente forma 
persona.tel = "664-888-99-66";

// Para modificar la propiedad agregada anteriormente solo se vuelve a escribir un nuevo valor en la misma 
persona.tel = "663-555-22-11";

// Para poder eliminar una propiedad ya existente.
// Se borra tanto la propiedad como su valor asociado.
delete persona.tel;


console.log(persona);