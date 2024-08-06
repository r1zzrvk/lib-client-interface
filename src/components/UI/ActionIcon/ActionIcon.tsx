import { FC, MouseEvent, useState } from 'react'

import { Icon, TIconProps } from '@components/molecules'

import { theme } from '@constants'

import { Styled } from './styled'

type TActionIconProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  backgroundColor?: string
  padding?: number
  disabled?: boolean
} & TIconProps

export const ActionIcon: FC<TActionIconProps> = ({
  icon,
  color,
  size = 24,
  backgroundColor = theme.colors.white,
  padding = theme.space.xs2,
  disabled,
  onClick,
}) => {
  const [hover, setHover] = useState(false)
  const [animate, setAnimate] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onClick?.(e)
    setAnimate(true)
  }

  return (
    <Styled.IconWrapper
      animate={animate}
      onClick={handleClick}
      disabled={disabled}
      type="button"
      backgroundColor={backgroundColor}
      padding={padding}
      size={size + padding}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onAnimationEnd={() => setAnimate(false)}
    >
      <Icon icon={icon} color={hover ? theme.colors.grey_light : color} size={size} />
    </Styled.IconWrapper>
  )
}
