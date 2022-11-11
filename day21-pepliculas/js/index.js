let apiKey = '81faef6942a31915ed87b416fbba64ba';
let url =       `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
let urlSeries = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`

let container = document.querySelector('.container');

fetch(url)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {

    let movies = "";
    for (let i = 0; i < 5; i++) {
        console.log(data.results[i]);
        movies += `<article>
                        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                        <h1>${data.results[i].title}</h1>
                        <p>Fecha: ${data.results[i].title}</p>
                        <a href="./detalle.html?idPelicula=${data.results[i].id}">
                            <button>
                                Ver mas
                            </button>
                        </a>
                    </article>`
    }

    container.innerHTML = movies;


    return data;
})
.catch(function (error) {
    console.log(error);
    return error;
});







