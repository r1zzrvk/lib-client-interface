import { FC } from 'react'
import { Text } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

type TMobileCardProps = {
  size: 'sm' | 'lg'
  imgUrl: string
}

export const MobileCard: FC<TMobileCardProps> = ({ size, imgUrl }) => (
  <Styled.Wrapper size={size} imgUrl={imgUrl}>
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
