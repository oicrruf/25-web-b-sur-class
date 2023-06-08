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
  return await response.json();
};

getGenres().then((response) =>
  response.genres.forEach((genre) => {
    const genreItem = document.createElement("li");
    const genreLink = document.createElement("a");
    genreLink.innerText = genre.name;
    genreLink.classList.add("dropdown-item");
    genreLink.setAttribute("href", "#");
    genreItem.appendChild(genreLink);
    genreList.appendChild(genreItem);
  })
);
