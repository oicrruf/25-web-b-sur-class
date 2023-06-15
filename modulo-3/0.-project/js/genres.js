const genreList = document.querySelector("#genres-list");

// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=es",
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

getGenres().then((response) =>
  response.genres.forEach((genre) => {
    // console.log(genre)
    const genreItem = document.createElement("li"); // Creamos elemento li
    const genreLink = document.createElement("a"); // Creamos elemento a
    genreLink.innerText = genre.name; // Damos un nombre al elemento <a>
    genreLink.classList.add("dropdown-item"); // Añadimos la class al elemento <a> 
    genreLink.setAttribute("href", "#"); // Agregamos el atributo href al elemento <a>
    genreItem.appendChild(genreLink); // Agregamos como hijo el elemento <a> al elemento <li> (<li><a></a></li>)
    genreList.appendChild(genreItem); // Agregamos cada elemento li como hijo del elemento <ul>
  })
);
// console.log(2)