let persona = {
  nombre: "Eve",
  apellido: "Guevara",
  edad: 29,
  saludar: function (otroNombre) {
    return (
      "Hola " +
      otroNombre +
      ", mi nombre es " +
      this.nombre +
      " " +
      this.apellido +
      " y tengo " +
      this.edad +
      " años"
    );
  },
};

let respuesta = persona.saludar("Andres");

/* 2do ejemplo */

let profesores = [
  {
    nombre: "Brian",
    apellido: "Gomez",
    edad: 40,
  },
  {
    nombre: "Eve",
    apellido: "Guevara",
    edad: 21,
  },
  {
    nombre: "Luis",
    apellido: "Navas",
    edad: 69,
  },
];


let profesor = profesores[0];

console.log(profesor);

/* ------------------------------------- */

let edadProfesor = profesores[0].edad;

console.log(edadProfesor);