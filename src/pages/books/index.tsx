import { FC, useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { Modal, Spacer } from '@ui-kit'
import { searchFormValues, theme } from '@constants'
import { useBreakpoint, usePagination } from '@hooks'
import { TPageDataProps, TSearchBookResponse, TSearchBookProps } from '@types'
import { getStaticPageProps, searchBook } from '@api'
import { FiltersForm, SearchWithResults } from '@components/organism'
import { SearchFormContainer } from '@components/atoms'
import { LayoutTemplate } from '@templates'
import { useRouter } from 'next/router'

export const getStaticProps = getStaticPageProps

const BooksPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const router = useRouter()
  const { query, isReady } = router
  const [isOpened, setIsOpened] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isMob, isTablet } = useBreakpoint()
  const [searchData, setSearchData] = useState<TSearchBookResponse | null>(null)
  const { totalItems } = searchData || {}
  const { packSize, page, totalPages, nextPage, prevPage, setPage } = usePagination({
    contentPerPage: isMob ? 5 : 10,
    itemsCount: totalItems || 0,
  })

  const handleSubmit = ({ searchTerm, sortingBy, filterByCategory, searchBy, ...rest }: TSearchBookProps) => {
    router.push(
      `?searchTerm=${searchTerm}&page=${rest.page}&sortingBy=${sortingBy}&category=${filterByCategory}&searchBy=${searchBy}`,
    )
  }

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
    if (query.page) {
      const savePage = Number.isNaN(query.page) || Number(query.page) === 0 ? 1 : Number(query.page)

      setPage(savePage)
    }
  }, [query.page, setPage])

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

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      <Formik
        initialValues={searchFormValues}
        onSubmit={({ categoryField, searchField, sorting, selectedBadge }) => {
          handleSubmit({
            searchTerm: searchField,
            page,
            filterByCategory: categoryField,
            sortingBy: sorting,
            searchBy: selectedBadge?.value,
          })
        }}
      >
        <Form>
          <SearchFormContainer direction="row" justify="start" gap={40}>
            <SearchWithResults
              searchData={searchData}
              onModalOpen={() => setIsOpened(true)}
              nextPage={nextPage}
              packSize={packSize}
              page={page}
              prevPage={prevPage}
              setPage={setPage}
              totalPages={totalPages}
              isRequestError={isError}
              isLoading={isLoading}
              onSubmit={handleSubmit}
            />
            {isMob || isTablet || <FiltersForm onClick={() => setIsOpened(false)} setPage={setPage} onSubmit={handleSubmit} />}
            {(isMob || isTablet) && (
              <Modal isOpen={isOpened} onClose={() => setIsOpened(false)} sidePadding={theme.space.sm}>
                <FiltersForm onClick={() => setIsOpened(false)} setPage={setPage} onSubmit={handleSubmit} />
              </Modal>
            )}
          </SearchFormContainer>
        </Form>
      </Formik>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
    </LayoutTemplate>
  )
}

export default BooksPage
