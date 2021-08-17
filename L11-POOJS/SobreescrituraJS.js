class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    //GET

    //SET
    obtenerDetalles(){
        return `Empleado [Nombre: ${this._nombre} Sueldo: ${this._sueldo}]`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} [Depto: ${this._departamento}]`;
}
}

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1);