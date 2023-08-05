import axios from 'axios'
import { GOOGLE_API } from '@constants'
import { EFilterOptions, ESortingOptions, TResponse, TSearchBookProps } from '@types'
import { concatenateParams } from '@utils'

export const searchBook = async ({
  searchTerm,
  page = 1,
  maxResults = 10,
  sortingBy = ESortingOptions.RELEVANCE,
  filterByCategory,
  filterByAuthor,
  searchByTitle,
  searchByPublisher,
}: TSearchBookProps) => {
  const startIndexOfPage = page === 1 ? 1 : 1 + page * maxResults

  const terms: Record<string, string | EFilterOptions | undefined> = {
    '': searchTerm,
    '+subject:': filterByCategory,
    '+intitle:': searchByTitle,
    '+inauthor:': filterByAuthor,
    '+inpublisher:': searchByPublisher,
  }

  // startIndex — The position in the collection at which to start. The index of the first item is 1. But in docs it start from 0
  // maxResults — max is 40
  const { data } = await axios.get<TResponse>(`${GOOGLE_API}books/v1/volumes`, {
    params: {
      q: concatenateParams(terms),
      startIndex: startIndexOfPage,
      maxResults,
      orderBy: sortingBy || undefined,
    },
  })

  return data
}
