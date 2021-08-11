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
      return super.toString() + " , " + this.idEmpleado + " , " + this.sueldo;
    }
  }