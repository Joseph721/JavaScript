// El metodo call nos va a permititr llamar a un método que está definido 
// en un objeto desde otro objeto. 


let persona1 = {
 nombre: "Laura",
 apellido: "Sanchez",
 nombreCompleto: function(titulo, tel){
     return titulo + ": "  + this.nombre + " " + this.apellido + ", " + tel;
 }
};

let persona2 = {
    nombre: "Juan",
    apellido: "Pérez"
}

// Con el uso call vamos a poder llamar al metodo "nombreCompleto"
// del objeto persona1 al objeto persona2

console.log(persona1.nombreCompleto("Lic", "5733578"));

console.log(persona1.nombreCompleto.call( persona2, "Ing" , "7723789"));