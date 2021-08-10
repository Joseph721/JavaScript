class Persona {
    static contadorPersonas = 0; //Atributo de clase
   
    // email = "Valor default email"; //Atributo de objeto

    static get MAX_OBJ(){
        return 5;
    }
  
    constructor(nombre, apellido) {
      this._nombre = nombre;
      this._apellido = apellido;

      if (Persona.contadorPersonas < Persona.MAX_OBJ) {
        this._idPersona = ++Persona.contadorPersonas;
      }
      else{
          console.log("Se han superado el maximo de objetos permitidos.");
      }


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
      return this._idPersona + "  " +this._nombre + " " + this._apellido;
    }
  
    // Sobreescribriendo el metodo de la clase Padre (Object)
    toString() {
      // Aqui se aplica polimorfismo (multiples formas en tiempo de ejecucion)
      // el metodo que se ejecuta dpeende si es una referencia de tipo padre o de tipo hijo
      return this.nombreCompleto();
    }
  
    static saludar() {
      console.log("Saludos desde método static");
    }
    static saludar2(persona) {
      console.log(
        persona.nombre + ",  " + persona.apellido + "Desde el metodo static 2."
      );
    }
  }
  
  class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre, apellido, deparamento) {
      super(nombre, apellido); //Se llama al constructor de la clase padre
      this._departamento = deparamento;
      Empleado.contadorEmpleado++;
    }
  
    get deparamento() {
      return this._departamento;
    }
    set deparamento(depto) {
      this._departamento = depto;
    }
    // Sobreescritura, básicamente modificar el comportamiento de un método
    nombreCompleto() {
      return super.nombreCompleto() + " " + this._departamento;
    }
  }
  
  let p1 = new Persona("Pablo", "Juarez");
  console.log(p1.toString());
  
  let emp1 = new Empleado("Juan", "Lopez", "Sistemas");
  console.log(emp1.toString());

  console.log(Persona.contadorPersonas);

  let p2 = new Persona("Jesus", "Perez");
  console.log(p2.toString());

  console.log(Persona.contadorPersonas);

  let p3 = new Persona("Mario", "Ruiz");
  let p4 = new Persona("Francisco", "Olivas");
  let p5 = new Persona("Luis", "Quintero");
  console.log(p5.toString()); //Error. ya no se asignan mas id para este objeto