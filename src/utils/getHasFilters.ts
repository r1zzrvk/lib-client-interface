import { searchTypes } from '@constants'
import { ESearchByOptionsLabels, ESearchFormFields, TBadge, TSearchFormValues } from '@types'

export const getHasFilters = (values: TSearchFormValues): boolean =>
  Object.entries(values)
    .filter(item => {
      if (item[0] === ESearchFormFields.selectedBadge) {
        return (item[1] as TBadge)?.value !== searchTypes[ESearchByOptionsLabels.ALL]
      }

      return item[0] !== ESearchFormFields.searchField
    })
    .some(item => !!item[1])
