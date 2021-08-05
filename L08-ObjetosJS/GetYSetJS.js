let persona = {
  nombre: "Joseph",
  apellido: "Chávez",
  email: "jChavez@gmail.com",
  edad: 22,
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);