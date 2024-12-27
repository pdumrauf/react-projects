import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_URL = 'https://cataas.com/cat/says/'

async function getRandomFactAndImage (page) {
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  return { textContent, imageSrc }
}

test('app shows random fact and image on load', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const { textContent, imageSrc } = await getRandomFactAndImage(page)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy()
})

test('app shows new fact and image after clicking button', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const { textContent, imageSrc } = await getRandomFactAndImage(page)

  await page.getByRole('button', { name: 'Get random cat' }).click()
  await page.waitForTimeout(1000)

  const { textContent: newTextContent, imageSrc: newImageSrc } = await getRandomFactAndImage(page)

  await expect(newTextContent).not.toBe(textContent)
  await expect(newImageSrc).not.toBe(imageSrc)
})
