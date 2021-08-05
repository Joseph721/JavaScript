// Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    };
  }

//   Si se requiere agregar una nueva propiedad pero para todos los objetos y no solo uno en especifico se 
//   añada Prototype Object.prototype.Propiedad = valor;
  
  Persona.prototype.tel = "42288543";

  let padre = new Persona("Luis", "Gonzalez", "LGonzalez@mail.com");
//   Si se requiere cambiar el telefono solo para uno de los objetos
  padre.tel = "47772246";
  console.log(padre.tel);

  
  let madre = new Persona("Sofia", "Hernandez", "SHernandez");
  // console.log(madre);
  madre.tel = "66441211";
  console.log(madre.tel);
