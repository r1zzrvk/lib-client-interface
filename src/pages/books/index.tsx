import { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { Modal, Spacer } from '@ui-kit'
import { searchFormValues, theme } from '@constants'
import { useBreakpoint, useDebouncedCallback, usePagination } from '@hooks'
import { THeaderFooter, TResponse, TSearchBookProps } from '@types'
import { getStaticPageProps, searchBook } from '@api'
import { FiltersForm, SearchWithResults } from '@components/organism'
import { SearchFormContainer } from '@components/atoms'
import { LayoutTemplate } from '@templates'

export const getStaticProps = getStaticPageProps

const BooksPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => {
  const [isOpened, setIsOpened] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { isMob, isTablet } = useBreakpoint()
  const [searchData, setSearchData] = useState<TResponse | null>(null)
  const { totalItems } = searchData || {}
  const { packSize, page, totalPages, nextPage, prevPage, setPage } = usePagination({
    contentPerPage: isMob ? 5 : 10,
    itemsCount: totalItems || 0,
  })

  const debouncedSearch = useDebouncedCallback(
    ({
      searchTerm,
      page,
      sortingBy,
      filterByCategory,
      filterByAuthor,
      searchByTitle,
      searchByPublisher,
    }: TSearchBookProps) => {
      setIsLoading(true)

      searchBook({
        searchTerm,
        page,
        filterByCategory,
        sortingBy,
        filterByAuthor,
        searchByPublisher,
        searchByTitle,
      })
        .then(data => setSearchData(data))
        .catch(e => {
          if (e) {
            setIsError(true)
          }
        })
        .finally(() => setIsLoading(false))
    },
    300,
  )

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      <Formik
        initialValues={searchFormValues}
        onSubmit={({ authorField, categoryField, publisherField, searchField, sorting, titleField }) =>
          debouncedSearch({
            searchTerm: searchField,
            page: page,
            filterByCategory: categoryField,
            sortingBy: sorting,
            filterByAuthor: authorField,
            searchByPublisher: publisherField,
            searchByTitle: titleField,
          })
        }
      >
        <Form>
          <SearchFormContainer direction="row" justify="start" gap={40}>
            <SearchWithResults
              searchData={searchData}
              debouncedSearch={debouncedSearch}
              onModalOpen={() => setIsOpened(true)}
              nextPage={nextPage}
              packSize={packSize}
              page={page}
              prevPage={prevPage}
              setPage={setPage}
              totalPages={totalPages}
              isRequestError={isError}
              isLoading={isLoading}
            />
            {isMob || isTablet || <FiltersForm onClick={() => setIsOpened(false)} />}
            {(isMob || isTablet) && (
              <Modal isOpen={isOpened} onClose={() => setIsOpened(false)} sidePadding={theme.space.sm}>
                <FiltersForm onClick={() => setIsOpened(false)} />
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
