const API_KEY = "cbb76637e7420a0915c2367cc1e8863f";


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// const dummy = https://api.themoviedb.org/3/trending/all/week?api_key=cbb76637e7420a0915c2367cc1e8863f&language=en-Us