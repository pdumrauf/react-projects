import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, errorFact, refreshFact } = useCatFact()
  const { imageUrl, errorImg } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cats app</h1>
      <button onClick={handleClick}>Get random cat</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted from the first word of ${fact}`} />}
      </section>
      {errorFact && <p>{errorFact}</p>}
      {errorImg && <p>{errorImg}</p>}
    </main>
  )
}
