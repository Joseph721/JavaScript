// Otra forma de crear objetos en js 
let auto = new Object();
auto.marca = "BMW";
auto.color = "Rojo";
auto.numeroPuertas = 4;
encenderAuto: function(){
    console.log("El auto está encendido.")
}
apagarAuto: function(){
    console.log("El auto está apagado.")
}

console.log(auto.marca);
