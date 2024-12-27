import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/apiLogic'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const [errorImg, setErrorImg] = useState()

  const refreshImage = async () => {
    try {
      if (!fact) return
      const firstWord = fact.split(' ')[0]

      const newImageUrl = await getRandomImage(firstWord)
      setImageUrl(newImageUrl)
    } catch (err) {
      setErrorImg(err.message)
    }
  }

  useEffect(() => { refreshImage() }, [fact])

  return { imageUrl, errorImg }
}
