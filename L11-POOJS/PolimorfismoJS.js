class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  //GET

  //SET
  obtenerDetalles() {
    return `Empleado [Nombre: ${this._nombre} Sueldo: ${this._sueldo}]`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this._departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()} [Depto: ${this._departamento}]`;
  }
}

function imprimir(tipo) {
  console.log(tipo.obtenerDetalles());
  if (tipo instanceof Gerente) {
      console.log("Es un objeto de tipo gerente.");
  }  else {
    console.log("Es un objeto de tipo Empelado");
  }
  
}

let empleado1 = new Empleado("Juan", 3000);

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

imprimir(empleado1);
imprimir(gerente1);
