import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  function handleSubmit (event) {
    event.preventDefault()
    getMovies({ search })
  }
  
  function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <>
      <header>
        <h1>Movie  </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            style={{ 
              border: '1px solid transparent', 
              borderColor: error ? 'red' : 'transparent'
            }} 
            onChange={handleChange} 
            value={search} 
            name="search" 
            placeholder='Star Wars, Harry Potter...'>
          </input>
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </>
  )
}

export default App
