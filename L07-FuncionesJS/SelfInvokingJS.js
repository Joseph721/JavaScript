// Self=Invoking: Funciones que se llaman así mismo

// Nota: Esta funcion no se puede volver a mandar a llamar ya que no se asigna a ninguna variable ni tampoco le estamos asignando un nombre. 
(function(a, b){
    console.log("Ejecutando la funcion..." + (a + b));
})(3,4);

