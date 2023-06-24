export type THeaderData = {
  title: string
  href: string
}

type TMenuItem = {
  text: string
  href: string
}

export type TFooterItem = {
  header: string
  menuItems: TMenuItem[]
}

export type TFooterData = {
  catalog: TFooterItem
  information: TFooterItem
  service: TFooterItem
}

export type THeaderFooter = {
  header: THeaderData[]
  footer: TFooterData
}
