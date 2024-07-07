import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

import { theme } from '@constants'

import { Styled } from './styled'

type TTextProps = {
  children: ReactNode
  fontSize?: number
  fontWeight?: number
  fontHeight?: number
  fontSizeMob?: number
  fontWeightMob?: number
  fontHeightMob?: number
  fontSizeTablet?: number
  fontWeightTablet?: number
  fontHeightTablet?: number
  marginBottom?: number
  marginBottomMob?: number
  color?: string
  paddingRight?: number
  asLink?: boolean
  href?: string
  align?: 'center' | 'left'
  onClick?: () => void
}

export const Text: FC<TTextProps> = ({
  children,
  fontSize = theme.fonts.size.regular.md,
  fontWeight = theme.fonts.weight.regular,
  fontHeight = theme.fonts.height.regular.md,
  fontSizeMob = theme.fonts.size.regular.sm,
  fontWeightMob = theme.fonts.weight.regular,
  fontHeightMob = theme.fonts.height.regular.sm,
  fontSizeTablet = fontSize,
  fontWeightTablet = fontWeight,
  fontHeightTablet = fontHeight,
  marginBottom = 0,
  marginBottomMob = 0,
  color = theme.colors.white,
  paddingRight = 0,
  asLink = false,
  href,
  align,
  onClick,
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (asLink && href) {
      router.push(href)
    }

    onClick?.()
  }

  // TODO: убрать asLink и создать компонент под ссылку

  return (
    <Styled.TextWrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontHeight={fontHeight}
      fontSizeMob={fontSizeMob}
      fontWeightMob={fontWeightMob}
      fontHeightMob={fontHeightMob}
      fontSizeTablet={fontSizeTablet}
      fontWeightTablet={fontWeightTablet}
      fontHeightTablet={fontHeightTablet}
      marginBottom={marginBottom}
      marginBottomMob={marginBottomMob}
      color={color}
      paddingRight={paddingRight}
      asLink={asLink}
      onClick={handleClick}
      align={align}
    >
      {children}
    </Styled.TextWrapper>
  )
}
