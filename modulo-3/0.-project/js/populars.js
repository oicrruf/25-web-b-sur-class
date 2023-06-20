const popularBox = document.querySelector("#popular");
let allMovies = [];

// Renderizado de películas 
const renderizarPeliculas = (listado) => {
  listado.forEach((movie) => {
    const myDiv = `<div class="col-lg-3 mb-4">
        <a href="#" class="">
          <img class="img-fluid rounded-2" src="https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}"/>
          <div class="d-flex justify-content-between"> 
            <h6>${movie.title}</h6>
            <span>${movie.vote_average}</span> 
          </div>
        </a>
      </div>`;
    popularBox.innerHTML += myDiv;
  });
}

// Obtener películas populares
const getPopular = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=es&page=1",
    {
      // method: 'get',
      headers: new Headers({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNmMzMyMzkxMmEzN2QwYmY4MDBmYjhmODYyYWM2MiIsInN1YiI6IjYyMTVjMzc0YmQxMDFlMDAxYmM4NTc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KGWT_v3k4KetupTNHFXYXZjbSMn89goD0u8cdG0hrSw",
      }),
    }
  );

  return response.json();
};

// console.log(getPopular())


getPopular().then((response) => {
  allMovies = response.results;
  renderizarPeliculas(allMovies)
});

// Inicia código del buscador

const formulario = document.querySelector('#search')

const buscador = (search) => {
  popularBox.innerHTML = ''
  let a_minusculas = search.toLowerCase();
   let resultado = allMovies.filter((movie_name) => movie_name.title.toLowerCase().includes(a_minusculas));
   renderizarPeliculas(resultado)
};

formulario.addEventListener("submit", (event)=> {
  event.preventDefault()
  let valor_buscado = event.target["movie"].value
  buscador(valor_buscado)
})



// const movies = [1, 2, 3, 4, 5];

// const mayoresDeTres = movies.filter((movie) => movie > 3);

// console.log(mayoresDeTres);

// const names = ["Victor", "Jesus", "Ana", "Maria", "Elias", "Ramon", "Mario"];

// const buscador = (search) => {
//   let a_minusculas = search.toLowerCase();
//   return names.filter((name) => name.toLowerCase().includes(a_minusculas));
// };

// console.log(mayoresDeTres)