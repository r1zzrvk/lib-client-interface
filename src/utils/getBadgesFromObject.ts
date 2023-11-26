import { ESearchTypes, TBadge } from '@types'

export function getBadgesFromObject<T extends Record<string, string>>(obj: T): TBadge[] {
  return Object.entries(obj).map((element, i) => ({
    id: `${i}_${element[1]}`,
    label: element[1],
    value: element[1],
    type: ESearchTypes.CATEGORY,
  }))
}
