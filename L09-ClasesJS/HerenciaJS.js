class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, deparamento) {
    super(nombre, apellido); //Se llama al constructor de la clase padre
    this._departamento = deparamento;
  }

  get deparamento() {
    return this._departamento;
  }
  set deparamento(depto) {
    this._departamento = depto;
  }
}

let emp1 = new Empleado("Juan", "Lopez", "Sistemas");
console.log(emp1.datos);

console.log(emp1.nombreCompleto());
