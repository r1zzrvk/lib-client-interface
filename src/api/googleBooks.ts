import axios from 'axios'
import { BOOKS_PATH, GOOGLE_API } from '@constants'
import { EFilterOptions, ESortingOptions, TSearchBookResponse, TSearchBookProps, TBook } from '@types'
import { concatenateParams } from '@utils'

export const searchBook = async ({
  searchTerm,
  page = 1,
  maxResults = 10,
  sortingBy = ESortingOptions.RELEVANCE,
  filterByCategory,
  searchBy,
}: TSearchBookProps) => {
  if (page === 0 || Number.isNaN(page)) {
    page = 1
  }

  const startIndexOfPage = page === 1 ? 1 : 1 + page * maxResults

  const terms: Record<string, string | EFilterOptions | undefined> = {
    '': searchBy === 'q' ? searchTerm : `${searchBy}:${searchTerm}`,
    '+subject:': filterByCategory,
  }

  // startIndex — The position in the collection at which to start. The index of the first item is 1. But in docs it start from 0
  // maxResults — max is 40

  const { data } = await axios.get<TSearchBookResponse>(`${GOOGLE_API}${BOOKS_PATH}`, {
    params: {
      q: concatenateParams(terms),
      startIndex: startIndexOfPage,
      maxResults,
      orderBy: sortingBy || undefined,
    },
  })

  return data
}

export const getBookData = async (id: string): Promise<TBook> => {
  const { data } = await axios.get<TBook>(`${GOOGLE_API}${BOOKS_PATH}${id}`)

  return data
}
