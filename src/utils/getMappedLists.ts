import { TList } from '@types'

export function getMappedLists(lists: never[]): TList[] {
  if (!lists) {
    return []
  }

  return Object.entries(lists).map(list => list[1][0])
}
