import { FC } from 'react'
import { useFormikContext } from 'formik'
import { Button, Input, Select, Text } from '@ui-kit'
import { theme } from '@constants'
import { getOptionsFromObject } from '@utils'
import { EFilterOptions, ESortingOptions, TSearchFormValues } from '@types'
import { Styled } from './styled'

export const FiltersForm: FC = () => {
  const { setFieldValue, values, setValues } = useFormikContext<TSearchFormValues>()
  const { authorField, categoryField, publisherField, titleField, sorting } = values

  const handleResetValues = () => {
    setValues(prev => ({
      ...prev,
      authorField: '',
      categoryField: '',
      publisherField: '',
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
        name="sorting"
        selectedValue={sorting}
        placeholder="Sorting by"
        options={getOptionsFromObject<typeof ESortingOptions>(ESortingOptions)}
        onSelect={(value: string) => setFieldValue('sorting', value)}
        onClear={() => setFieldValue('sorting', '')}
        fluid
      />
      <Select
        name="categoryField"
        selectedValue={categoryField}
        placeholder="Choose a category"
        options={getOptionsFromObject<typeof EFilterOptions>(EFilterOptions)}
        onSelect={(value: string) => setFieldValue('categoryField', value)}
        onClear={() => setFieldValue('categoryField', '')}
        fluid
      />
      <Input
        name="titleField"
        placeholder="Search in title"
        type="text"
        fluid
        onChange={e => setFieldValue('titleField', e.target.value)}
        isClearable
        onClear={() => setFieldValue('titleField', '')}
        value={titleField}
      />
      <Input
        name="authorField"
        placeholder="Search in author"
        type="text"
        fluid
        onChange={e => setFieldValue('authorField', e.target.value)}
        isClearable
        onClear={() => setFieldValue('authorField', '')}
        value={authorField}
      />
      <Input
        name="publisherField"
        placeholder="Search in publisher"
        type="text"
        fluid
        onChange={e => setFieldValue('publisherField', e.target.value)}
        isClearable
        onClear={() => setFieldValue('publisherField', '')}
        value={publisherField}
      />
      <Button onClick={handleResetValues} isFluid type="button">
        Reset
      </Button>
    </Styled.Filters>
  )
}
