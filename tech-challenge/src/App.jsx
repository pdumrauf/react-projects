import { useState, useEffect } from 'react'

const CATS_FACTS_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CATS_FACTS_ENDPOINT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>Cats app</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
