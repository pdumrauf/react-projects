const API_KEY = '526439aa'

export async function searchMovies ({ search }) {
  try {
    if (search === '') return null

    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
  
    const movies = json.Search
  
    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (error) {
    throw new Error(`${error}- Error fetching movies`)
  }
}