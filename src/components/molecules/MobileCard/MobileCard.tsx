import { FC } from 'react'

import { Text } from '@ui-kit'

import { theme } from '@constants'

import { Styled } from './styled'

type TMobileCardProps = {
  size: 'sm' | 'lg'
  title: string
  imgUrl: string
}

export const MobileCard: FC<TMobileCardProps> = ({ size, imgUrl, title }) => {
  const isSm = size === 'sm'

  return (
    <Styled.Wrapper size={size} imgUrl={imgUrl}>
      <Text
        fontSizeMob={isSm ? theme.fonts.size.regular.sm : theme.fonts.size.regular.md}
        fontHeightMob={isSm ? theme.fonts.height.regular.sm : theme.fonts.height.regular.md}
        fontWeightMob={isSm ? theme.fonts.weight.medium : theme.fonts.weight.semibold}
        color={isSm ? theme.colors.main : theme.colors.grey}
        align="center"
        marginBottomMob={isSm ? theme.space.xs2 : 0}
        paddingRight={isSm ? 0 : theme.space.lg}
      >
        {title}
      </Text>
    </Styled.Wrapper>
  )
}
