/* eslint react/prop-types: 0 */

import { useFilters } from '../hooks/useFilters';
import './Filters.css';
import { useId } from 'react';

export function Filters() {
  const { filters, setFilters } = useFilters()
  const priceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <div className="filters">
      <div>
        <label htmlFor={priceId}>Price from:</label>
        <input type="range" id={priceId} name="price" min="0" max="1000" onChange={handleChangeMinPrice} />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} name="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Perfumes</option>
        </select>
      </div>
    </div>
  )
}