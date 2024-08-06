import { EPagePaths } from './common'

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

type TSolidIcon =
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
  | 'info_solid'
  | 'pin_solid'
  | 'edit_solid'
  | 'link_solid'
  | 'plus_solid'
  | 'at_solid'
  | 'lock_solid'
  | 'eye_solid'
  | 'slashEye_solid'
  | 'hashtag_solid'
  | 'image_solid'
  | 'calendar_solid'
  | 'ellipsis_vertical_solid'
  | 'arrow_turn_up_solid'

type TRegularIcon = 'user_regular' | 'trash_regular' | 'bookmark_regular'

export type TIcon = TSolidIcon | TRegularIcon

export type TOption = {
  value: string
  label: string
}

export enum ESearchByOptionsLabels {
  ALL = 'All',
  AUTHOR = 'By author',
  TITLE = 'By title',
  PUBLISHER = 'By publisher',
}

export type TBadge = {
  value: string
  label: string
  id: string
}

export type TMobileMenuItem = {
  id: number
  icon: TIcon
  path: EPagePaths
  title: string
}

export enum EProfileTabs {
  PERSONAL = 'Personal information',
  ACCOUNT = 'Account information',
  LISTS = 'My lists',
}
