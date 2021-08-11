class Producto {
  static contadorProductos = 0;
  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  get precio() {
    return this._precio;
  }

  set nombre(nombre) {
    return (this._nombre = nombre);
  }

  set precio(precio) {
    return (this._precio = precio);
  }

  toString() {
    return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    // this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this.idOrden;
  }

  agregarProducto(producto) {
    //Si el largo del arreglo es menor a la cantidad Maxima de productos que
    //se pueden agregar, entonces podemos agregar un producto al arreglo.
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      //  Con el metodo "push" se agrega un nuevo elemento al arreglo de productos
      this._productos.push(producto);
    //   this._productos[this._contadorProductosAgregados++] = producto; Otra opcion 
    } else {
      console.log("Has superado el máximo de productos agregados.");
    }
  }

  calcularTotal(){
      let totalVenta = 0;
    //   La variable producto almacena cada una de los elementos de tipo producto
    //   que tenga el arreglo.
      for(let producto of this._productos){
          totalVenta += producto.precio;
      }
      return totalVenta;
  }

  mostrarOrden(){
     let productosOrden = "";
     for(let producto of this._productos){
         productosOrden += producto.toString() + " \n ";
     }

     

     console.log(`-Orden: ${this._idOrden} \n Total: $${this.calcularTotal()} \n Productos: \n ${productosOrden}`);
     

  }

}



let producto1 = new Producto("Camisa", 150);
let producto2 = new Producto("Zapatos", 750);
let producto3 = new Producto("Chamarra", 1270);
let producto4 = new Producto("Sueter", 800);
let producto5 = new Producto("Guantes", 270);
let producto6 = new Producto("Calcetines", 470);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);

let orden2 = new Orden();
orden2.agregarProducto(producto6);

orden1.mostrarOrden();

orden2.mostrarOrden();
