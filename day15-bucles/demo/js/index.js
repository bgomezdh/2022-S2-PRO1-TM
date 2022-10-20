/*  Un for para imprimir*/

/* for (let i = 0; i < 15; i++) {
  console.log(`Vuelta numero ${i}`);
} */

let listaProfes = document.querySelector('#listaProfesores');

let profesores = [
  {
    id: 1,
    nombre: "Brian",
    materia: "Pro1",
  },
  {
    id: 2,
    nombre: "Eve",
    materia: "Pro3",
  },
  {
    id:3,
    nombre: "Luis",
    materia: "Pro2",
  },
];

for (let i = 0; i < profesores.length; i++) {
    listaProfes.innerHTML += `<li> Nombre Profes: <a href="/detalleMovie.html?id=${profesores[i].id}">${profesores[i].nombre}</a></li>`;
}