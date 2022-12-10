export type TMenuItem = {
  text: string
  href?: string
}

export type TDesktopCard = {
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
