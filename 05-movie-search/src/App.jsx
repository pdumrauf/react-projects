import './App.css'
import withResults from './mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = withResults.Search

  return (
    <>
      <header>
        <h1>Movie Search</h1>
        <form className='form'>
          <input placeholder='Star Wars, Harry Potter...'></input>
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
