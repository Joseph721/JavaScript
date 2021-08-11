class Persona {
    static contadorPersonas = 0;
  
    constructor(nombre, apellido, edad) {
      this._idPersona = ++Persona.contadorPersonas;
      this._nombre = nombre;
      this._apellido = apellido;
      this._edad = edad;
    }
  
    //GET
    get idPersona() {
      return this._idPersona;
    }
    get nombre() {
      return this._nombre;
    }
    get apellido() {
      return this._apellido;
    }
    get edad() {
      return this._edad;
    }
  
    //SET
    set nombre(nom) {
      return (this._nombre = nom);
    }
    set apellido(ap) {
      return (this._apellido = ap);
    }
    set edad(ed) {
      return (this._edad = ed);
    }
  
  //   datosPersona() {
  //     return (
  //       "Datos: " +
  //       " " +
  //       this.idPersona +
  //       " , " +
  //       this.nombre +
  //       " , " +
  //       this.apellido +
  //       " , " +
  //       this.edad
  //     );
  //   }
  
    toString() {
      return "Datos: " +  "idPersona: [" + this.idPersona + "  " + this.nombre + "  " + this.apellido + "  " + this.edad;
    }
  }
  
  class Empleado extends Persona {

    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
      super(nombre, apellido, edad);
      this._idEmpleado = ++Empleado.contadorEmpleados;
      this._sueldo = sueldo;
    }
  
    //GET
    get idEmpleado() {
      return this._idEmpleado;
    }
  
    get sueldo() {
      return this._sueldo;
    }
  
    //SET
    set sueldo(sueldo) {
      return (this._sueldo = sueldo);
    }
  
    toString() {
      return super.toString() + " , idEmpleado: " + this.idEmpleado + " , " + this.sueldo + "]";
    }
  }

  class Cliente extends Persona {
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro) {
      super(nombre, apellido, edad);
      this._idCliente = ++Cliente.contadorClientes;
      this._fechaRegistro = fechaRegistro;
    }
  
    //GET
    get idCliente() {
      return this._idCliente;
    }
    get fechaRegistro() {
      return this._fechaRegistro;
    }
  
    //SET
    set fechaRegistro(fecha) {
      return this._fechaRegistro = fecha;
    }
  
    toString() {
      return super.toString() + " , idCliente: " + this.idCliente + " , " + this.fechaRegistro + "]";
    }
  }
  

let persona1 = new Persona("Joseph", "Chávez" , 22);
console.log(persona1.toString());

let persona2 = new Persona("Juan", "Lopez" , 19);
console.log(persona2.toString());

let empleado1 = new Empleado("Laura","Flores", 25, 35000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Jesus","Pablo" , 37 , 48000);
console.log(empleado2.toString());

let cliente1 = new Cliente("Francisco" , "Juarez", 24, new Date());
console.log(cliente1.toString());

