import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export function useFilters() {
  const {filters, setFilters} = useContext(FilterContext)

  const filterProducts = (products) => products.filter(product =>
    product.price >= filters.minPrice &&
    (
      filters.category === 'all' ||
      product.category === filters.category
    )
  )

  return { filterProducts, filters, setFilters }

}