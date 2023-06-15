const popularBox = document.querySelector("#popular");



const getPopular = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=es&page=1',
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

const movies = [
  "SpiderMan",
  "Transformers",
  "Cars",
  "Harry Potter",
  "John Wick",
  "El Rey León",
];

getPopular().then((response)=> console.log(response.results))

movies.forEach((movie) => {
  const myDiv =
    `<div class="col-lg-3 border">
      <a href="#" class="">
        <img class="img-fluid" src="https://image.tmdb.org/t/p/w440_and_h660_face/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg"/>
        <h6>${movie}</h6>
      </a>
    </div>`;
  popularBox.innerHTML += myDiv;
});
