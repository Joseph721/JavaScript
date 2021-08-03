const persona = {
  nombre: "Joseph",
  apellido: "Chavez"
};

// Parametros p1 = persona 
function cambiarValorObjeto(p1){
    p1.nombre = "Juan";
    p1.apellido = "López"
}

// Paso por referencia 
cambiarValorObjeto(persona);
console.log(persona);