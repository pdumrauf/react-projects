const CATS_FACTS_ENDPOINT = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const res = await fetch(CATS_FACTS_ENDPOINT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export async function getRandomImage (firstWord) {
  const CAT_IMAGE_ENPOINT = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=white`

  const response = await fetch(CAT_IMAGE_ENPOINT)
  const { url } = response
  return url
}
