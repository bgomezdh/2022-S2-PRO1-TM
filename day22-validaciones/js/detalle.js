let qs = location.search;
let objetoqs = new URLSearchParams(qs);
let idpersonaje = objetoqs.get("buscador")

let titulo = document.querySelector(".titulo")
let especie = document.querySelector(".especie")
let estatus = document.querySelector(".status")
let imagen = document.querySelector(".img")
let fav = document.querySelector(".clicFav")

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

let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(idpersonaje)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(idpersonaje)) {
       let indice = favoritos.indexOf(idpersonaje)
       favoritos.splice(indice, 1);
       fav.innerText = "Agregar a Fav";
    }else{
        favoritos.push(idpersonaje)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})





