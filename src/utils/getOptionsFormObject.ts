import { TOption } from '@types'

export function getOptionsFromObject<T extends Record<string, string>>(obj: T): TOption[] {
  return Object.entries(obj).map(element => ({
    label: element[1],
    value: element[1],
  }))
}
