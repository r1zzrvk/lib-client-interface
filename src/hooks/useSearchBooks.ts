import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { searchBook } from '@api'
import { TSearchBookProps, TSearchBookResponse } from '@types'

type TUseSearchBooksReturn = {
  data: TSearchBookResponse | null
  isLoading: boolean
  isError: boolean
}

export const useSearchBooks = (): TUseSearchBooksReturn => {
  const router = useRouter()
  const { query, isReady } = router

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchData, setSearchData] = useState<TSearchBookResponse | null>(null)

  const searchBooks = ({ searchTerm, sortingBy, filterByCategory, searchBy, ...rest }: TSearchBookProps) => {
    if (searchTerm) {
      setIsError(false)
      setIsLoading(true)

      searchBook({
        searchTerm,
        page: rest.page,
        filterByCategory,
        sortingBy,
        searchBy,
      })
        .then(data => setSearchData(data))
        .catch(e => {
          if (e) {
            setIsError(true)
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    if (isReady) {
      const savePage = Number.isNaN(query.page) || Number(query.page) === 0 ? 1 : Number(query.page)

      if (query.searchTerm) {
        searchBooks({
          searchTerm: String(query.searchTerm),
          page: savePage,
          filterByCategory: query.category ? String(query.category) : '',
          searchBy: query.searchBy ? String(query.searchBy) : '',
          sortingBy: query.sortingBy ? String(query.sortingBy) : '',
        })
      }

      if (!query.searchTerm && query.category) {
        searchBooks({
          searchTerm: String(query.category),
          page: savePage,
          filterByCategory: query.category ? String(query.category) : '',
          searchBy: query.searchBy ? String(query.searchBy) : '',
          sortingBy: query.sortingBy ? String(query.sortingBy) : '',
        })
      }
    }
  }, [isReady, query.category, query.page, query.searchBy, query.searchTerm, query.sortingBy])

  return {
    data: searchData,
    isLoading,
    isError,
  }
}
