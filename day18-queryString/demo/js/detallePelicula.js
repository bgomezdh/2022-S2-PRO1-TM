/* Capturamos el location.search */
let qs = location.search;

/* Transformar el qs */

let qsObj = new URLSearchParams(qs);

let idPelicula = qsObj.get('pepiasdasasdto');


alert(idPelicula)