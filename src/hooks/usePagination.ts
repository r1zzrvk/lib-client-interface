import { useCallback, useState } from 'react'

type TUsePaginationProps = {
  contentPerPage: number
  itemsCount: number
}

type TUsePaginationReturn = {
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  setPage: (num: number) => void
  firstIndex: number
  lastIndex: number
  page: number
  packSize: number
  showMore: () => void
}

export const usePagination = ({ contentPerPage, itemsCount }: TUsePaginationProps): TUsePaginationReturn => {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(itemsCount / contentPerPage)
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage
  const [packSize, setPackSize] = useState(contentPerPage)

  const changePage = (direction: boolean) => {
    setPage(state => {
      if (direction) {
        if (state === pageCount) {
          return state
        }
        return state + 1
      }
      if (state === 1) {
        return state
      }
      return state - 1
    })
  }

  const setPageSafe = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount)
    } else if (num < 1) {
      setPage(1)
    } else {
      setPage(num)
    }
  }

  const getMoreItems = useCallback(() => {
    setPackSize(prevValue => prevValue + contentPerPage)
  }, [contentPerPage])

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    firstIndex,
    lastIndex,
    page,
    packSize,
    showMore: () => getMoreItems(),
  }
}
