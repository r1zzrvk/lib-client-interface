import { FC } from 'react'
import { useFormikContext } from 'formik'
import { Button, Select, Text } from '@ui-kit'
import { theme } from '@constants'
import { getHasFilters, getOptionsFromObject } from '@utils'
import { EFilterOptions, ESearchFormFields, ESortingOptions, TSearchBookProps, TSearchFormValues } from '@types'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

type TFilterFormProps = {
  onClick: () => void
  setPage: (page: number) => void
  onSubmit: (props: TSearchBookProps) => void
}

export const FiltersForm: FC<TFilterFormProps> = ({ onClick, setPage, onSubmit }) => {
  const { isMob, isTablet } = useBreakpoint()
  const { setFieldValue, values, setValues, initialValues, dirty } = useFormikContext<TSearchFormValues>()
  const { categoryField, sorting, searchField, selectedBadge } = values

  const handleResetValues = () => {
    setValues(prev => ({
      ...prev,
      categoryField: initialValues.categoryField,
      selectedBadge: initialValues.selectedBadge,
      sorting: initialValues.sorting,
    }))
  }

  const handleClick = () => {
    onClick()

    if (dirty) {
      onSubmit({
        searchTerm: searchField,
        filterByCategory: categoryField,
        searchBy: selectedBadge?.value,
        sortingBy: sorting,
        page: 1,
      })
      setPage(1)
    }
  }

  const handleSelectCategory = (value: string) => {
    setFieldValue(ESearchFormFields.categoryField, value)
  }

  return (
    <Styled.Filters>
      {isMob || isTablet || (
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.lg}
          fontWeight={theme.fonts.weight.medium}
          fontHeight={theme.fonts.height.regular.lg}
          marginBottom={theme.space.sm}
          fontSizeMob={theme.fonts.size.header.xs}
          fontHeightMob={theme.fonts.height.header.xs}
          fontWeightMob={theme.fonts.weight.medium}
          marginBottomMob={theme.space.sm}
        >
          Search settings
        </Text>
      )}
      <Select
        name={ESearchFormFields.sorting}
        selectedValue={sorting}
        placeholder="Sorting by"
        options={getOptionsFromObject<typeof ESortingOptions>(ESortingOptions)}
        onSelect={(value: string) => setFieldValue(ESearchFormFields.sorting, value)}
        onClear={() => setFieldValue(ESearchFormFields.sorting, '')}
        fluid
      />
      <Select
        name={ESearchFormFields.categoryField}
        selectedValue={categoryField}
        placeholder="Choose a category"
        options={getOptionsFromObject<typeof EFilterOptions>(EFilterOptions)}
        onSelect={handleSelectCategory}
        onClear={() => setFieldValue(ESearchFormFields.categoryField, '')}
        fluid
      />
      <Styled.ButtonBlock>
        <Button onClick={handleClick} isFluid type="button">
          View
        </Button>
        {getHasFilters(values) && (
          <Button onClick={handleResetValues} isFluid type="button" isGhost>
            Reset filters
          </Button>
        )}
      </Styled.ButtonBlock>
    </Styled.Filters>
  )
}
