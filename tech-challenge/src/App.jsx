import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact, getRandomImage } from './services/logic'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]

    getRandomImage(firstWord).then(url => setImageUrl(url))
  }, [fact])

  const handleClick = () => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }
  return (
    <main>
      <h1>Cats app</h1>
      <button onClick={handleClick}>Get random cat</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted from the first word of ${fact}`} />}
      </section>
    </main>
  )
}
