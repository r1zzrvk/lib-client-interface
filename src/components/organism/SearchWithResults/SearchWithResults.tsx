import { FC, KeyboardEvent, useEffect, useMemo } from 'react'
import { useFormikContext } from 'formik'
import { useRouter } from 'next/router'

import { Badge, Input, Paginator, Spacer } from '@ui-kit'
import { CardsPreloader } from '@components/molecules'

import { useBreakpoint } from '@hooks'
import { theme } from '@constants'
import {
  ESearchByOptionsLabels,
  ESearchFormFields,
  TBadge,
  TSearchBookProps,
  TSearchBookResponse,
  TSearchFormValues,
} from '@types'
import { scrollToYAxis, getBadgesFromObject, getHasFilters } from '@utils'

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
  onSubmit: (props: TSearchBookProps) => void
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
  onSubmit,
}) => {
  const { setFieldValue, values } = useFormikContext<TSearchFormValues>()
  const { searchField, selectedBadge, categoryField, sorting } = values
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

    onSubmit({
      searchTerm: searchField,
      filterByCategory: categoryField,
      searchBy: value.value,
      sortingBy: sorting,
      page: 1,
    })
    setPage(1)
  }

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onSubmit({
        searchTerm: searchField,
        filterByCategory: categoryField,
        searchBy: selectedBadge?.value,
        sortingBy: sorting,
        page: 1,
      })
      e.currentTarget.blur()
      setPage(1)
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
      <Spacer size={theme.space.xl} sizeMob={theme.space.md} />
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
