window.addEventListener("load", function (e) {
  /* API's - Nosotros nos encargaremos de darle estas URL a ustedes*/
  let urlUser = "https://randomuser.me/api/";

  /* Seleccionar un elemento del DOM */
  let contenedor = document.querySelector(".container");
  let fotoPerfil = document.querySelector(".fotoPerfil");
  let sexo = document.querySelector(".tag-teal");
  let fotoPerfil2 = document.querySelector(".fotoPerfil2");
  let telefono = document.querySelector(".telefono");
  let email = document.querySelector(".email");
  let nombre = document.querySelector(".nombre");

  /* Crear fetch */

  fetch(urlUser)
    .then(function (response) {
      /* Convertir de JSON a Un tipo de dato de JS */
      return response.json();
    })
    .then(function (data) {
      /* Va toda la logica de a APP */
      console.log(data.results);
      let resultado = data.results[0];

      fotoPerfil.src = resultado.picture.large;
      sexo.innerText = resultado.gender;
      fotoPerfil2.src = resultado.picture.large;
      telefono.innerText = resultado.phone;
      email.innerText = resultado.email;
      nombre.innerText = `${resultado.name.title} ${resultado.name.first} ${resultado.name.last}`;

      console.log(resultado);

      return data;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });

  /* DARK MODE  */
  let darkMode = document.querySelector("#darkMode");
  let body = document.querySelector("body");
  let card = document.querySelector(".card");

  darkMode.addEventListener("click", function (e) {
    /* aqui van a escribir su tercera columna- LA ACCION */

    body.style.backgroundColor = "#1c2137";
    card.style.backgroundColor = "#1c2137";
    body.style.color = "white";
  });
});
