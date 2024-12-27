import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/apiLogic'

export function useCatFact () {
  const [fact, setFact] = useState()
  const [errorFact, setErrorFact] = useState()

  const refreshFact = async () => {
    try {
      const newFact = await getRandomFact()
      setFact(newFact)
    } catch (err) {
      setErrorFact(err.message)
    }
  }
  useEffect(() => { refreshFact() }, [])

  return { fact, errorFact, refreshFact }
}
