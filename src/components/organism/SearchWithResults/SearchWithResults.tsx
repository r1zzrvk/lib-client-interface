import { FC, useEffect, useMemo } from 'react'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'
import { useBreakpoint } from '@hooks'
import { theme } from '@constants'
import { Badge, Input, Paginator, Spacer } from '@ui-kit'
import { EFilterOptions, ESearchFormFields, TBadge, TResponse, TSearchBookProps, TSearchFormValues } from '@types'
import { scrollToTop, getBadgesFromObject } from '@utils'
import { CardsPreloader } from '@components/molecules'
import { Styled } from './styled'
import { Results } from './molecules'
import { getDotNeed } from './utils'

type TSearchWithResultsProps = {
  onModalOpen: () => void
  debouncedSearch: (props: TSearchBookProps) => void
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
  debouncedSearch,
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
  const { searchField, selectedBadge, authorField, categoryField, titleField, sorting } = values
  const { isMob, isTablet } = useBreakpoint()
  const { query, isReady } = useRouter()
  const { category, searchTerm } = query
  const badges = useMemo(() => getBadgesFromObject<typeof EFilterOptions>(EFilterOptions), [])

  useEffect(() => {
    scrollToTop()
  }, [page])

  useEffect(() => {
    if (searchField) {
      debouncedSearch({
        searchTerm: searchField,
        page,
        filterByCategory: categoryField,
        sortingBy: sorting,
        filterByAuthor: authorField,
        searchByTitle: titleField,
      })
    }
  }, [searchField, page, authorField, categoryField, titleField, sorting])

  useEffect(() => {
    if (isReady && searchTerm) {
      setFieldValue(ESearchFormFields.searchField, String(searchTerm))

      return
    }

    if (isReady && category) {
      const badge = badges.find(({ label }) => category === label)

      setFieldValue(ESearchFormFields.searchField, String(category))
      setFieldValue(ESearchFormFields.categoryField, String(category))
      setFieldValue(ESearchFormFields.selectedBadge, badge)
    }
  }, [category, isReady, searchTerm, setFieldValue, badges])

  const handleSearchChange = (term: string) => {
    if (page !== 1) {
      setPage(1)
    }

    setFieldValue(ESearchFormFields.searchField, term)
  }

  const handleClickBadge = (value: TBadge) => {
    const badge = badges.find(({ label }) => searchField === label)

    if (searchField === '' || (searchField !== value?.label && badge)) {
      setFieldValue(ESearchFormFields.searchField, value?.label)
    }

    if (searchField === value.label) {
      setFieldValue(ESearchFormFields.searchField, '')
    }

    if (value.id === selectedBadge?.id) {
      setFieldValue(ESearchFormFields.selectedBadge, null)
      setFieldValue(ESearchFormFields.categoryField, '')

      return
    }

    setFieldValue(ESearchFormFields.selectedBadge, value)
    setFieldValue(ESearchFormFields.categoryField, value.label)
  }

  return (
    <Styled.SearchWithResults>
      <Input
        name={ESearchFormFields.searchField}
        placeholder="Type something..."
        type="text"
        onChange={e => handleSearchChange(e.target.value)}
        onClick={onModalOpen}
        onClear={() => setFieldValue(ESearchFormFields.searchField, '')}
        onKeyDown={submitForm}
        value={searchField}
        hasButton={(isMob || isTablet) && !!searchField}
        hasIcon
        isClearable
        fluid
        hasDot={getDotNeed(values)}
      />
      <Styled.BadgesContainer>
        {badges.map(({ id, ...rest }) => (
          <Badge
            name={ESearchFormFields.selectedBadge}
            key={id}
            id={id}
            {...rest}
            checked={id === selectedBadge?.id}
            onChange={handleClickBadge}
          />
        ))}
      </Styled.BadgesContainer>
      {isLoading ? (
        <CardsPreloader />
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
