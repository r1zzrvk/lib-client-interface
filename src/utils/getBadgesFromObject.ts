import { searchTypes } from '@constants'
import { TBadge } from '@types'

export function getBadgesFromObject<T extends Record<string, string>>(
  obj: T,
  values?: Record<string, string>,
): TBadge[] {
  return Object.entries(obj).map((element, i) => ({
    id: `${i}_${element[1]}`,
    label: element[1],
    value: !values ? searchTypes[element[1]] : values[element[1]],
  }))
}
