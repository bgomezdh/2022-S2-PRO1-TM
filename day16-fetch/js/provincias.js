/* API's */
let urlProv ="https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";



/* Crear fetch */

fetch(urlProv)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    /* Seleccionar un elemento del DOM */
let listaDOM = document.querySelector(".listaProvincias");
    let prov = data.provincias;

    let contenido = "";

    for (let i = 0; i < prov.length; i++) {
        contenido += `<li><a href="./index.html">${prov[i].nombre}</a></li>`
    }
   
    listaDOM.innerHTML = contenido;

    return data;
  })
  .catch(function (error) {
    return error;
  });
