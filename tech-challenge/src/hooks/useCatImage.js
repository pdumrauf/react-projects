import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/apiLogic'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]

    getRandomImage(firstWord).then(url => setImageUrl(url))
  }, [fact])

  return { imageUrl }
}
