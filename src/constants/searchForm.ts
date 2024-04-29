import { TBadge, TSearchFormValues } from '@types'

const defaultBadge: TBadge = {
  id: '0_All',
  label: 'All',
  value: 'q',
}

export const searchFormValues: TSearchFormValues = {
  searchField: '',
  selectedBadge: defaultBadge,
  categoryField: '',
  sorting: '',
}
