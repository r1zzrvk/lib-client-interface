import { FC, useEffect } from 'react'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'
import { useBreakpoint } from '@hooks'
import { fastSearchBadges, theme } from '@constants'
import { Badge, Input, Paginator, Spacer } from '@ui-kit'
import { ESearchTypes, TBadge, TResponse, TSearchBookProps, TSearchFormValues } from '@types'
import { scrollToTop } from '@utils'
import { Styled } from './styled'
import { Results, SkeletonPreloader } from './molecules'
import { getDotNeed } from './utils'

type TSearchWithResultsProps = {
  onModalOpen: () => void
  debounedSearch: (props: TSearchBookProps) => void
  page: number
  setPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  totalPages: number
  packSize: number
  isRequestError: boolean
  isLoading: boolean
  searchData: TResponse | null
}

export const SearchWithResults: FC<TSearchWithResultsProps> = ({
  onModalOpen,
  debounedSearch,
  nextPage,
  packSize,
  page,
  prevPage,
  setPage,
  totalPages,
  isRequestError,
  isLoading,
  searchData,
}) => {
  const { setFieldValue, values, submitForm } = useFormikContext<TSearchFormValues>()
  const { searchField, selectedBadge, authorField, categoryField, publisherField, titleField, sorting } = values
  const { isMob, isTablet } = useBreakpoint()
  const { query, isReady } = useRouter()
  const { category, searchTerm } = query

  useEffect(() => {
    scrollToTop()
  }, [page])

  useEffect(() => {
    if (searchField) {
      debounedSearch({
        searchTerm: searchField,
        page,
        filterByCategory: categoryField,
        sortingBy: sorting,
        filterByAuthor: authorField,
        searchByPublisher: publisherField,
        searchByTitle: titleField,
      })
    }
  }, [searchField, page, authorField, categoryField, publisherField, titleField, sorting])

  useEffect(() => {
    if (selectedBadge && searchField === '') {
      setFieldValue('searchField', selectedBadge.label)
    }
    if (selectedBadge?.type) {
      // eslint-disable-next-line default-case
      switch (selectedBadge.type) {
        case ESearchTypes.AUTHOR:
          setFieldValue('authorField', selectedBadge.label)
          break
        case ESearchTypes.CATEGORY:
          setFieldValue('categoryField', selectedBadge.label)
          break
        case ESearchTypes.PUBLISHER:
          setFieldValue('publisherField', selectedBadge.label)
          break
        // no default
      }
    }
  }, [selectedBadge])

  useEffect(() => {
    if (isReady && searchTerm) {
      setFieldValue('searchField', String(searchTerm))

      return
    }

    if (isReady && category) {
      setFieldValue('searchField', String(category))
      setFieldValue('categoryField', String(category))
    }
  }, [category, isReady, searchTerm])

  const handleSearchChange = (term: string) => {
    if (page !== 1) {
      setPage(1)
    }

    setFieldValue('searchField', term)
  }

  return (
    <Styled.SearchWithResults>
      <Input
        name="searchField"
        placeholder="Type something..."
        type="text"
        onChange={e => handleSearchChange(e.target.value)}
        onClick={onModalOpen}
        onClear={() => setFieldValue('searchField', '')}
        onKeyDown={submitForm}
        value={searchField}
        hasButton={isMob || isTablet}
        hasIcon
        isClearable
        fluid
        hasDot={getDotNeed(values)}
      />
      <Styled.BadgesContainer>
        {fastSearchBadges.map(({ id, ...rest }) => (
          <Badge
            name="selectedBadge"
            key={id}
            id={id}
            {...rest}
            checked={id === selectedBadge?.id}
            onChange={(value: TBadge) => setFieldValue('selectedBadge', value)}
          />
        ))}
      </Styled.BadgesContainer>
      {isLoading ? (
        <SkeletonPreloader />
      ) : (
        <Results searchData={searchData} isRequestError={isRequestError} packSize={packSize} />
      )}
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      {totalPages > 1 && !isRequestError && !isLoading && (
        <Paginator
          totalPages={totalPages}
          currentPage={page}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
        />
      )}
    </Styled.SearchWithResults>
  )
}
