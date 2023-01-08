import { theme } from '@constants'
import { FC } from 'react'
import { Text } from '../Text'
import { Styled } from './styled'

export const Card: FC = () => (
  <Styled.Wrapper>
    <Styled.Image>
      <Text
        fontSize={theme.fonts.size.header.sm}
        fontHeight={theme.fonts.height.header.sm}
        fontWeight={theme.fonts.weight.medium}
        marginBottom={theme.space.xs2}
      >
        Header
      </Text>
    </Styled.Image>
    <Text color={theme.colors.grey}>categories</Text>
    <Text color={theme.colors.grey}>authors</Text>
  </Styled.Wrapper>
)
