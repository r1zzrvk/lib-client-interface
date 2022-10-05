import { FC } from 'react'
import { Text } from '@components'
import { NAVIGATION_TITLES, theme } from '@constants'

export const Header: FC = () => (
  <header>
    {NAVIGATION_TITLES.map( title => <Text key={title} color={theme.colors.grey}>{title}</Text>)}
  </header>
)