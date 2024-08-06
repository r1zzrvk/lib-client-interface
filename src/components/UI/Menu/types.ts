import { TIcon } from '@types'

export type TMenuItem = {
  id: string
  title: string
  action: () => void
  icon?: TIcon
  color?: string
}
