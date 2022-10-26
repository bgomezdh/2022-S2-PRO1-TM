/* Bajar la info a localStorage */
let recuperoNombreLocal = localStorage.getItem('name');

/* Bajar la info a sessionStorage */
let recuperoNombreSession= sessionStorage.getItem('name');

let resultadoLocal = JSON.parse(recuperoNombreLocal);
let resultadoSession = JSON.parse(recuperoNombreSession);


console.log(resultadoSession);

let subtitulo = document.querySelector("#subtitulo");

subtitulo.innerText = `Hola, ${resultadoLocal}`;

