import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if(search.startsWith(' ')) {
      setError('You must enter a valid search term')
      return
    }

    if(search.length < 3) {
      setError('Search term must be at least 3 characters long')
      return
    }

    if(search.match(/^\d+$/)) {
      setError('Search term must contain at least one letter')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }	
}