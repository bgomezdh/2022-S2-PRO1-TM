let urlRick = "https://rickandmortyapi.com/api/character";

/* seleccionar elemento del DOM */

let section = document.querySelector(".characterList");

/* Crear el fetch */

fetch(urlRick)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let result = data.results;

    let characters = "";

    for (let i = 0; i < result.length; i++) {
        characters += `<article>
                            <img src='${result[i].image}' alt='${result[i].name}' />
                            <p>Name:<a href="./detallePersona.html?idDelPersonaje=${result[i].id}">${result[i].name}</a> </p>
                            <p>Status: ${result[i].status} </p>
                        </article>`
    }

    console.log(result);

    section.innerHTML = characters;


  
    return data;
})
.catch(function(error) {
    return error;
});

