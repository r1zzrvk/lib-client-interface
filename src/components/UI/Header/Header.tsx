import { FC } from 'react'
import { NAVIGATION_TITLES, theme } from '@constants'
import { Text } from '@components'
import { Styled } from './styled'
import { UserBlock } from './UserBlock'

export const Header: FC = () => (
  <Styled.Wrapper>
    <Styled.TextBlock>
      {NAVIGATION_TITLES.map(({ title, href }) => (
        <Text key={title} fontWeight={theme.fonts.weight.medium} asLink href={href}>
          {title}
        </Text>
      ))}
    </Styled.TextBlock>
    <UserBlock />
  </Styled.Wrapper>
)
