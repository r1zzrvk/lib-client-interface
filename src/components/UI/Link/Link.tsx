import { FC, ReactNode } from 'react'

import { theme } from '@constants'

import { Styled } from './styled'

type TLinkProps = {
  children: ReactNode
  href?: string
  asButton?: boolean
  onClick?: () => void
  color?: string
  fontWeight?: number
  hoverColor?: string
}

export const Link: FC<TLinkProps> = ({
  href = 'link',
  children,
  asButton,
  onClick,
  color = theme.colors.white,
  fontWeight = theme.fonts.weight.regular,
  hoverColor,
}) => {
  const handleClick = () => {
    if (asButton) {
      onClick?.()
    }
  }

  return asButton ? (
    <Styled.Button type="button" hoverColor={hoverColor} color={color} fontWeight={fontWeight} onClick={handleClick}>
      {children}
    </Styled.Button>
  ) : (
    <Styled.Link hoverColor={hoverColor} href={href} color={color} fontWeight={fontWeight}>
      {children}
    </Styled.Link>
  )
}
