let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idpersonaje = objetoqs.get("buscador")

let titulo = document.querySelector(".titulo")
let especie = document.querySelector(".especie")
let estatus = document.querySelector(".status")
let imagen = document.querySelector(".img")

const url = `https://rickandmortyapi.com/api/character/${idpersonaje}`


fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    titulo.innerText=data.name;
    especie.innerText=data.species;
    estatus.innerText=data.status;
    imagen.src=data.image
    return data;
})
.catch(function (error) {
    return error;
});


