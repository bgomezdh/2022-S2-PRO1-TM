/* Recupero el storage */
let recuperoStorage = localStorage.getItem("favoritos");

/* transformar el json (string) en obj o un array */
let favoritos = JSON.parse(recuperoStorage);
    /* un array * => [3,5,7] */ 

let section = document.querySelector('#lista');

let personajesFavoritos = '';

if (favoritos == null || favoritos.length == 0) {
    /* No hay favoritos */
    section.innerHTML = '<p>No hay datos en favoritos<p/>'
} else {
    for (let i = 0; i < favoritos.length; i++) {
   
        let url = `https://rickandmortyapi.com/api/character/${favoritos[i]}`;
    
        fetch(url)
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {

            personajesFavoritos += `<a href="./detalle.html?buscador=${data.id}"><article>
                                        <img src=${data.image} alt='${data.name}' />
                                        <p>Name: ${data.name} </p>
                                        <p>Status: ${data.status} </p>
                                    </article></a>`
            section.innerHTML = personajesFavoritos;
            return data;
        })
        .catch(function(error) {
            console.log(error);
            return error;
        });
    
    };

    
}
