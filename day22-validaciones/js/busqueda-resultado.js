let qs      = location.search; /* '?busqueda=rick' */
let qsObj   = new URLSearchParams(qs);  /* qsObj = {busqueda: 'rick' } */
let personaje = qsObj.get('busqueda'); /* 'rick'  */

let url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;

fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
    
    let arrayDePersonajes = data.results;

    let seccion = document.querySelector('.container');
    let allCharacters = [];

    for(let i=0; i< 3; i++){
        allCharacters += `<a href="./detalle.html?buscador=${arrayDePersonajes[i].id}"><article>
                            <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                            <p>Name: ${arrayDePersonajes[i].name} </p>
                            <p>Status: ${arrayDePersonajes[i].status} </p>
                        </article></a>`
    }
    seccion.innerHTML = allCharacters;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});


