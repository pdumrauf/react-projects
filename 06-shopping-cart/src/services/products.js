// https://dummyjson.com/products

export async function searchProduct () {
  try {

    const response = await fetch('https://dummyjson.com/products')
    const json = await response.json()
  
    const products = json.products
  
    return products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.thumbnail,
      price: product.price
    }))
  } catch (error) {
    throw new Error(`${error} - Error fetching a product`)
  }

}
