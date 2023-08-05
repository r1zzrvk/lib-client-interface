export type TMenuItem = {
  text: string
  href?: string
}

export type TSmallCard = {
  id: string
  title: string
  description: string
  image: string
}

export type TTab = {
  id: string
  title: string
}

export type TInfoCube = {
  id: string
  header: string
  content: string
  color: 'main' | 'secondary'
}

export type TIcon =
  | 'home_solid'
  | 'search_solid'
  | 'user_solid'
  | 'trash_solid'
  | 'settings_solid'
  | 'sliders_solid'
  | 'exit_solid'
  | 'bookmark_solid'
  | 'caretLeft_solid'
  | 'caretRight_solid'
  | 'caretDown_solid'
  | 'caretUp_solid'
  | 'catalog_solid'
  | 'cross_solid'
  | 'check_solid'
  | 'user_regular'
  | 'trash_regular'
  | 'bookmark_regular'

export type TOption = {
  value: string
  label: string
}

export enum ESearchTypes {
  CATEGORY = 'category',
  AUTHOR = 'author',
  PUBLISHER = 'publisher',
}

export type TBadge = {
  value: string
  label: string
  id: string
  type?: ESearchTypes
}
