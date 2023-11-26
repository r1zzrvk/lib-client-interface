import { NO_LIST_TITLE } from '@constants'
import { TList } from '@types'

export function getMappedLists(lists: never[]): TList[] {
  if (!lists) {
    return []
  }

  return Object.entries(lists).map(
    list =>
      ({
        listTitle: list[0] ? list[0][0].toUpperCase() + list[0].slice(1) : NO_LIST_TITLE,
        listItems: list[1],
      } as TList),
  )
}
