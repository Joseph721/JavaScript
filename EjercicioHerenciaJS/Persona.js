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
    return "Datos: " +  " " + this.idPersona + " , " + this.nombre + " , " + this.apellido + " , " + this.edad;
  }
}
