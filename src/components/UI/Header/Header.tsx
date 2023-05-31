import { FC } from 'react'
import { theme } from '@constants'
import { THeaderData } from '@types'
import { Text } from '@ui-kit'
import { Styled } from './styled'
import { UserBlock } from './UserBlock'

type THeaderProps = {
  headerData: THeaderData[]
}

export const Header: FC<THeaderProps> = ({ headerData }) => (
  <Styled.Wrapper>
    <Styled.TextBlock>
      {headerData.map(({ title, href }) => (
        <Text key={title} fontWeight={theme.fonts.weight.medium} asLink href={href}>
          {title}
        </Text>
      ))}
    </Styled.TextBlock>
    <UserBlock />
  </Styled.Wrapper>
)
