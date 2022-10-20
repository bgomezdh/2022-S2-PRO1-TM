/* Capturar los elementos */
let titulo      = document.querySelector(".titulo");
let bienvenidos = document.querySelector(".saludos");
let itemsLista = document.querySelectorAll(".lista-items");

titulo.innerHTML = "Hola, <i>Chao</i>";
bienvenidos.style.backgroundColor = "red";
bienvenidos.style.color = "white";
bienvenidos.style.fontSize = "30px";

itemsLista[0].style.backgroundColor = "blue";
itemsLista[1].style.backgroundColor = "blue";

