import { GOOGLE_API } from '@constants'
import axios from 'axios'
import { TResponse } from 'types/books'

export const booksApi = {
  search: (param: string) => axios.get<TResponse>(`${GOOGLE_API}books/v1/volumes?q=${param}`),
}
