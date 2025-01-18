// https://dummyjson.com/products

export async function searchProduct () {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
  
    const products = json.products
  
    return products.map(({ id, title, description, thumbnail, price, category }) => ({
      id,
      title,
      description,
      image: thumbnail,
      price,
      category,
    }))
  } catch (error) {
    throw new Error(`${error} - Error fetching a product`)
  }

}
