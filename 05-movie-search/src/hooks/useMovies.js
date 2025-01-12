import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  async function getMovies () {
  try {
    setLoading(true)
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  } catch (error) {
    throw new Error(`${error}- Error fetching movies`)  
  } finally {
    setLoading(false)
  }
}




  return { movies, getMovies, loading }
}