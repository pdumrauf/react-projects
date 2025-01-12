import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  async function getMovies () {
  if(search === previousSearch.current) return

  try {
    setLoading(true)
    previousSearch.current = search
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