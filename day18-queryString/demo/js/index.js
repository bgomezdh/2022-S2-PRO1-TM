let section = document.querySelector("#section");

let idPelicula = 40;
let img = "https://es.web.img3.acsta.net/c_310_420/pictures/22/10/07/16/48/1142280.jpg";
let nombrePelicula = "Black Adams";

section.innerHTML = `<article>
                        <img src="${img}" alt="">
                        <h2><a href="./detallePelicula.html?idPelicula=${idPelicula}">${nombrePelicula}</a></h2>
                    </article>`;
