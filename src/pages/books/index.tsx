/* eslint-disable import/no-default-export */
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { SearchFormContainer } from '@components/atoms'
import { FiltersForm, SearchWithResults } from '@components/organism'
import { Modal, Spacer } from '@ui-kit'

import { getStaticPageProps } from '@api'
import { searchFormValues, theme } from '@constants'
import { useBreakpoint, usePagination, useSearchBooks } from '@hooks'
import { LayoutTemplate } from '@templates'
import { TPageDataProps, TSearchBookProps } from '@types'
import { concatenateParams } from '@utils'

export const getStaticProps = getStaticPageProps

const BooksPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const router = useRouter()
  const { query } = router
  const [isOpened, setIsOpened] = useState(false)
  const { isMob, isTablet } = useBreakpoint()
  const { data, isLoading, isError } = useSearchBooks()
  const { totalItems } = data || {}
  const { page, totalPages, nextPage, prevPage, setPage } = usePagination({
    contentPerPage: isMob ? 5 : 10,
    itemsCount: totalItems || 0,
  })

  const handleSubmit = ({ searchTerm, sortingBy, filterByCategory, searchBy, ...rest }: TSearchBookProps) => {
    const terms: Record<string, string | undefined> = {
      '?searchTerm=': searchTerm,
      '&page=': rest.page.toString(),
      '&sortingBy=': sortingBy,
      '&category=': filterByCategory,
      '&searchBy=': searchBy,
    }

    if (searchTerm) {
      router.push(concatenateParams(terms))
    }
  }

  useEffect(() => {
    if (query.page) {
      const savePage = Number.isNaN(query.page) || Number(query.page) === 0 ? 1 : Number(query.page)

      setPage(savePage)
    }
  }, [query.page, setPage])

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
              searchData={data}
              onModalOpen={() => setIsOpened(true)}
              nextPage={nextPage}
              page={page}
              prevPage={prevPage}
              setPage={setPage}
              totalPages={totalPages}
              isRequestError={isError}
              isLoading={isLoading}
              onSubmit={handleSubmit}
            />
            {isMob || isTablet || (
              <FiltersForm onClick={() => setIsOpened(false)} setPage={setPage} onSubmit={handleSubmit} />
            )}
            {(isMob || isTablet) && (
              <Modal isOpen={isOpened} onClose={() => setIsOpened(false)} title="Search settings">
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
