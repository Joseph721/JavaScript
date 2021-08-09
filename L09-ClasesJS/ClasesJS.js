// Se acostumbra a anteponer un "_" despues de la propiedad en el constructor
// para crear los metodos get y set 
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}


let p1 = new Persona("Joseph", "Chávez");
p1.nombre = "Fernando"; // Se manda a llamar el metodo set y se le asigna un nuevo valor a nombre.
console.log(p1.nombre);

