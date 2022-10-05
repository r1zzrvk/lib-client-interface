import { FC } from 'react'
import { Styled } from './styled'
import { NAVIGATION_TITLES, theme } from '@constants'
import { Text } from '@components'
import { UserBlock } from './UserBlock'

export const Header: FC = () => (
  <Styled.Wrapper>
    {NAVIGATION_TITLES.map(title => <Text key={title} paddingRight={theme.space.xl} marginBottom={theme.space.xs}>{title}</Text>)}
    <UserBlock />
  </Styled.Wrapper>
)