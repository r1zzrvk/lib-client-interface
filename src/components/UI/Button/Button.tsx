import React, { FC, MouseEvent, ReactNode, useState } from 'react'

import { Flexbox } from '@components/atoms'
import { Icon } from '@components/molecules'

import { theme } from '@constants'
import { TIcon } from '@types'

import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
  size?: 'sm' | 'md' | 'lg'
  isGhost?: boolean
  isFluid?: boolean
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  rightIcon?: TIcon
  iconColor?: string
  iconSize?: number
  height?: number
  borderRadius?: number
}

export const Button: FC<TButton> = ({
  children,
  onClick,
  size = 'md',
  isGhost = false,
  isFluid = false,
  type = 'submit',
  disabled = false,
  rightIcon,
  iconColor = theme.colors.grey,
  iconSize = theme.icon_sizes.xs,
  height,
  borderRadius,
}) => {
  const [animate, setAnimate] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onClick?.(e)
    setAnimate(true)
  }

  return (
    <Styled.Button
      animate={animate}
      type={type}
      onClick={handleClick}
      size={size}
      isGhost={isGhost}
      isFluid={isFluid}
      disabled={disabled}
      height={height}
      borderRadius={borderRadius}
    >
      <Flexbox justify="center" align="center" gap={theme.space.xs2}>
        {children}
        {rightIcon && <Icon size={iconSize} icon={rightIcon} color={iconColor} />}
      </Flexbox>
    </Styled.Button>
  )
}
