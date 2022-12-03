import { FC } from 'react'
import { Text } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

export const MobileCard: FC = () => (
  <Styled.Wrapper>
    <Text
      fontSizeMob={theme.fonts.size.regular.sm}
      fontHeightMob={theme.fonts.height.regular.sm}
      fontWeightMob={theme.fonts.weight.medium}
      color={theme.colors.main}
      align="center"
      marginBottomMob={theme.space.xs2}
    >
      Dressers
    </Text>
  </Styled.Wrapper>
)
