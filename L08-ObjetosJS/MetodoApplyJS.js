// El metodo apply nos va a permitir mandar a llamar un metodo en un objeto
// que no tiene definido cierto método 


let persona1 = {
    nombre: "Laura",
    apellido: "Sanchez",
    nombreCompleto: function(titulo, tel){
      return titulo + ": " + this.nombre + " " + this.apellido + " ," + tel;
    }
   };
   
   let persona2 = {
       nombre: "Juan",
       apellido: "Pérez"
   }

// Uso de apply 
   console.log(persona1.nombreCompleto("Lic", "49393868"));

   let arreglo = ["Ing", "023990432"];
   console.log(persona1.nombreCompleto.apply( persona2, arreglo));