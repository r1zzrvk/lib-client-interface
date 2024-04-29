import { FC, KeyboardEvent, useEffect, useMemo } from 'react'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'
import { useBreakpoint } from '@hooks'
import { theme } from '@constants'
import { Badge, Input, Paginator, Spacer } from '@ui-kit'
import { ESearchByOptionsLabels, ESearchFormFields, TBadge, TSearchBookResponse, TSearchFormValues } from '@types'
import { scrollToYAxis, getBadgesFromObject, getHasFilters } from '@utils'
import { CardsPreloader } from '@components/molecules'
import { Styled } from './styled'
import { Results } from './molecules'

type TSearchWithResultsProps = {
  onModalOpen: () => void
  page: number
  setPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  totalPages: number
  packSize: number
  isRequestError: boolean
  isLoading: boolean
  searchData: TSearchBookResponse | null
}

export const SearchWithResults: FC<TSearchWithResultsProps> = ({
  onModalOpen,
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
  const { searchField, selectedBadge } = values
  const { isMob, isTablet } = useBreakpoint()
  const { query, isReady } = useRouter()
  const { category, searchTerm, searchBy, sortingBy } = query
  const badges = useMemo(() => getBadgesFromObject<typeof ESearchByOptionsLabels>(ESearchByOptionsLabels), [])

  useEffect(() => {
    scrollToYAxis()
  }, [page])

  useEffect(() => {
    if (isReady && searchTerm) {
      setFieldValue(ESearchFormFields.searchField, String(searchTerm))
    }

    if (isReady && category) {
      setFieldValue(ESearchFormFields.categoryField, category)

      if (!searchTerm) {
        setFieldValue(ESearchFormFields.searchField, category)
      }
    }

    if (isReady && searchBy) {
      const badge = badges.find(({ value }) => searchBy === value)

      setFieldValue(ESearchFormFields.selectedBadge, badge)
    }

    if (isReady && sortingBy) {
      setFieldValue(ESearchFormFields.sorting, sortingBy)
    }
  }, [badges, category, isReady, searchBy, searchTerm, setFieldValue, sortingBy])

  const handleSearchChange = (term: string) => {
    setFieldValue(ESearchFormFields.searchField, term)
  }

  const handleClickBadge = (value: TBadge) => {
    if (value.id === selectedBadge?.id) {
      setFieldValue(ESearchFormFields.selectedBadge, null)

      return
    }

    setFieldValue(ESearchFormFields.selectedBadge, value)

    submitForm()
  }

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      submitForm()
    }
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
        onKeyDown={handleEnterKeyDown}
        value={searchField}
        hasButton={isMob || isTablet}
        hasIcon
        isClearable
        fluid
        hasDot={getHasFilters(values)}
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
