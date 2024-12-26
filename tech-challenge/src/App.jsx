import { useState, useEffect } from 'react'
import './App.css'

const CATS_FACTS_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CATS_FACTS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    const CAT_IMAGE_ENPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`

    fetch(CAT_IMAGE_ENPOINT)
      .then(response => {
        setImageUrl(response.url)
      })
  }, [fact])

  return (
    <main>
      <h1>Cats app</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image comming from the first word of ${fact}`} />}
      </section>
    </main>
  )
}
