import { FC } from 'react'
import { useFormikContext } from 'formik'
import { Button, Input, Select, Text } from '@ui-kit'
import { theme } from '@constants'
import { getOptionsFromObject } from '@utils'
import { EFilterOptions, ESearchFormFields, ESortingOptions, TSearchFormValues } from '@types'
import { Styled } from './styled'

type TFilterFormProps = {
  onClick: () => void
}

export const FiltersForm: FC<TFilterFormProps> = ({ onClick }) => {
  const { setFieldValue, values, setValues } = useFormikContext<TSearchFormValues>()
  const { authorField, categoryField, titleField, sorting } = values

  const handleResetValues = () => {
    setValues(prev => ({
      ...prev,
      authorField: '',
      categoryField: '',
      selectedBadge: null,
      sorting: '',
      titleField: '',
    }))
  }

  return (
    <Styled.Filters>
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
        onSelect={(value: string) => setFieldValue(ESearchFormFields.categoryField, value)}
        onClear={() => setFieldValue(ESearchFormFields.categoryField, '')}
        fluid
      />
      <Input
        name={ESearchFormFields.titleField}
        placeholder="Search in title"
        type="text"
        fluid
        onChange={e => setFieldValue(ESearchFormFields.titleField, e.target.value)}
        isClearable
        onClear={() => setFieldValue(ESearchFormFields.titleField, '')}
        value={titleField}
      />
      <Input
        name={ESearchFormFields.authorField}
        placeholder="Search in author"
        type="text"
        fluid
        onChange={e => setFieldValue(ESearchFormFields.authorField, e.target.value)}
        isClearable
        onClear={() => setFieldValue(ESearchFormFields.authorField, '')}
        value={authorField}
      />
      <Styled.ButtonBlock>
        <Button onClick={onClick} isFluid type="button">
          View
        </Button>
        <Button onClick={handleResetValues} isFluid type="button" isGhost>
          Reset filters
        </Button>
      </Styled.ButtonBlock>
    </Styled.Filters>
  )
}
