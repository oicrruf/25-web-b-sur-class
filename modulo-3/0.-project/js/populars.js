const popularBox = document.querySelector("#popular");
let allMovies = [];

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
  // console.log(1)

  return await response.json();
};

getPopular().then((response) => {
  allMovies = response.results;
  response.results.forEach((movie) => {
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
});

const movies = [1, 2, 3, 4, 5];

const mayoresDeTres = movies.filter((movie) => movie > 3);

console.log(mayoresDeTres);

const names = ["Victor", "Jesus", "Ana", "Maria", "Elias", "Ramon", "Mario"];

const buscador = (search) =>
  names.filter((name) => name.toLowerCase().includes(search.toLowerCase()));

// console.log(mayoresDeTres)
