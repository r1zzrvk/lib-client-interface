import { FC, ReactNode } from 'react'

import { Divider, Text } from '@ui-kit'
import { Icon } from '@components/molecules'

import { theme } from '@constants'
import { TIcon } from '@types'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'

type TAlertBannerProps = {
  children: ReactNode
  heading: string
  icon: TIcon
  isFluid?: boolean
}

export const AlertBanner: FC<TAlertBannerProps> = ({ children, heading, icon, isFluid }) => {
  const { isMob } = useBreakpoint()
  const dividerPadding = isMob ? theme.space.sm : theme.space.md
  const iconSize = isMob ? 16 : theme.icon_sizes.xs

  return (
    <Styled.Wrapper isFluid={isFluid}>
      <Styled.Header>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.header.xs}
          fontHeight={theme.fonts.height.header.xs}
          fontWeight={theme.fonts.weight.medium}
          fontSizeMob={theme.fonts.size.header.xs}
          fontHeightMob={theme.fonts.height.header.xs}
          fontWeightMob={theme.fonts.weight.medium}
        >
          {heading}
        </Text>
        <Icon icon={icon} color={theme.colors.grey} size={iconSize} />
      </Styled.Header>
      <Divider sideMargin={dividerPadding} />
      <Styled.Body>{children}</Styled.Body>
    </Styled.Wrapper>
  )
}
