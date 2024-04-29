import { TBadge } from './ui'

export enum ESearchFormFields {
  searchField = 'searchField',
  selectedBadge = 'selectedBadge',
  categoryField = 'categoryField',
  sorting = 'sorting',
  searchBy = 'searchBy',
}

export type TSearchFormValues = {
  [ESearchFormFields.searchField]: string
  [ESearchFormFields.selectedBadge]: TBadge | null
  [ESearchFormFields.categoryField]: string
  [ESearchFormFields.sorting]: string
}
