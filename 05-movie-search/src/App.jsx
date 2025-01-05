import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { movies } = useMovies()
  const { search, handleChange, error } = useSearch()

  function handleSubmit (event) {
    event.preventDefault()
    console.log(search)
  }

  return (
    <>
      <header>
        <h1>Movie Search</h1>
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
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
