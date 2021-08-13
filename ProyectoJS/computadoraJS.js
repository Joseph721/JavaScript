class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set tipoEntrada(tipoEntrada) {
    return (this._tipoEntrada = tipoEntrada);
  }

  set marca(marca) {
    return (this._marca = marca);
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `idTeclado: ${this._idTeclado} \n [TipoEntrada: ${this._tipoEntrada}  Marca: ${this._marca}]`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `idRaton: ${this._idRaton} \n [TipoEntrada: ${this._tipoEntrada}  Marca: ${this._marca}]`;
  }
}

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tam) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tam = tam;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  get tam() {
    return this._tam;
  }

  set marca(marca) {
    return (this._marca = marca);
  }

  set tam(tam) {
    return (this._tam = tam);
  }

  toString() {
    return `idMonitor: ${this._idMonitor} \n [Marca: ${this._marca} Tamaño: ${this._tam}]`;
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get nombre() {
    return this._nombre;
  }

  get monitor() {
    return this._monitor;
  }

  get teclado() {
    return this._teclado;
  }

  get raton() {
    return this._raton;
  }

  set nombre(nombre) {
    return (this._nombre = nombre);
  }

  set monitor(monitor) {
    return (this._monitor = monitor);
  }

  set teclado(teclado) {
    return (this._teclado = teclado);
  }

  set raton(raton) {
    return (this._raton = raton);
  }

  toString() {
    return `idComputadora: ${this._idComputadora} \n [Nombre: ${this._nombre} Monitor: ${this._monitor} Teclado: ${this._teclado} Ratón: ${this._raton}]`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_ORDEN() {
    return 3;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  agregarComputadora(computadora) {
    if (this._computadoras.length <= Orden.MAX_ORDEN) {
      this._computadoras.push(computadora);
    } else {
      console.log("Solo 3 computadoras como máximo por orden.");
    }
  }

  mostrarOrden() {
    let pcOrden = "";

    for (let producto of this._computadoras) {
      pcOrden += ` \n ${producto}`;
    }

    console.log(`idOrden: ${this._idOrden} \n [Computadoras: ${pcOrden}]`);
  }

  // toString(){
  //     return `idOrden: ${this._idOrden} \n [Computadoras: ${this._computadoras}]`
  // }
}

let raton1 = new Raton("USB", "Ryzen");

let teclado1 = new Teclado("Bluetooth", "Logitec");

let monitor1 = new Monitor("Acer", 24);

let pc1 = new Computadora("Dell", monitor1, teclado1, raton1);
// console.log(pc1.toString());

let orden1 = new Orden();

orden1.agregarComputadora(pc1);

orden1.mostrarOrden();
