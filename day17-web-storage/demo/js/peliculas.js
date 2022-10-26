/* Creacion de info para guardar */
let nombre = prompt("Ingrese su nombre");

/* Transformar en JSON */
let nombreJSON = JSON.stringify(nombre);

/* Subir la info a localStorage */
localStorage.setItem('name', nombreJSON);

/* Subir la info a sessionStorage */
sessionStorage.setItem('name', nombreJSON);