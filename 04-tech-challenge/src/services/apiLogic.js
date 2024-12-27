const CATS_FACTS_ENDPOINT = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  try {
    const res = await fetch(CATS_FACTS_ENDPOINT)
    if (!res.ok) throw new Error('Failed to fetch cat fact')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    console.error(err)
  }
}

export async function getRandomImage (firstWord) {
  const CAT_IMAGE_ENPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`

  try {
    const response = await fetch(CAT_IMAGE_ENPOINT)
    if (!response.ok) throw new Error('Failed to fetch cat image')
    const { url } = response
    return url
  } catch (err) {
    console.error(err)
  }
}
