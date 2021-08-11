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
    return super.toString() + " , " + this.Cliente + " , " + this.fechaRegistro;
  }
}
