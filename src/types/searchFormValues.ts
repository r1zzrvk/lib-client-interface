import { TBadge } from './ui'

export type TSearchFormValues = {
  searchField: string
  selectedBadge: TBadge | null
  categoryField: string
  sorting: string
  titleField: string
  authorField: string
}

export enum ESearchFormFields {
  searchField = 'searchField',
  selectedBadge = 'selectedBadge',
  categoryField = 'categoryField',
  sorting = 'sorting',
  titleField = 'titleField',
  authorField = 'authorField',
}
