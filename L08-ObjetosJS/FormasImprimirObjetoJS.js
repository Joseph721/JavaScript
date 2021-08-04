// Una manera de imprimir las propiedades de los objetos con sus valores es 


let persona = {
    nombre: "Joseph",
    apellido: "Chávez",
    email: "jChavez@gmail.com",
    edad: 22,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    }
  };

  //Una forma es concatenar cada valor de cada propiedad.
console.log(persona.nombre + ", " + persona.apellido);

//Otra forma es usar 'for in' para iterar cada una de las propiedades.
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Otra forma de poder imprimir el objeto,
// values: Es un metodo que regresa nuestro objeto pero como un arreglo.
let personaArray = Object.values(persona);
console.log(personaArray);

//Otra forma de imprimir el estado del objeto. 
// Nos convierte el objeto a una cadena.
let personaString = JSON.stringify(persona);
console.log(personaString);