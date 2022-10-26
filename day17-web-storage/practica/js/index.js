/* Practica #1 */

/* let miNombre = "Brian";

localStorage.setItem('userName', miNombre);

console.log(localStorage);

let recuperoStorage = localStorage.getItem('userName');

console.log(recuperoStorage);

localStorage.clear(); */

/* Practica #2 */

/* let peliculasFavoritas = ["Iron Man", "Los Vengadores", "Star War"];

localStorage.setItem('peliculaFavorita', peliculasFavoritas[1]);

console.log(localStorage);

let recuperStorage = localStorage.getItem('peliculaFavorita');

console.log(recuperStorage);

localStorage.clear() */



/* Practica #3 */

let peliculasFavoritas = ["Iron Man", "Los Vengadores", "Star War"];

let peliculasJson = JSON.stringify(peliculasFavoritas);

localStorage.setItem('favoritos', peliculasJson);

let recuperoStorage = localStorage.getItem('favoritos');

console.log(JSON.parse(recuperoStorage));



