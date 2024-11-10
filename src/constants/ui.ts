import { ESearchByOptionsLabels, ESearchListsLabels } from '@types'

export const SIZES: { [key: string]: number } = {
  sm: 131,
  md: 201,
  lg: 227,
} as const

export const AVATAR_SIZES: { [key: string]: number } = {
  sm: 52,
  lg: 72,
} as const

export const searchTypes: Record<string, string> = {
  [ESearchByOptionsLabels.ALL]: 'q',
  [ESearchByOptionsLabels.AUTHOR]: 'inauthor',
  [ESearchByOptionsLabels.TITLE]: 'intitle',
  [ESearchByOptionsLabels.PUBLISHER]: 'inpublisher',
}

export const listsSearchTypes: Record<string, string> = {
  [ESearchListsLabels.ALL]: 'ALL',
  [ESearchListsLabels.PINNED]: 'PINNED',
  [ESearchListsLabels.UNPINNED]: 'UNPINNED',
}
