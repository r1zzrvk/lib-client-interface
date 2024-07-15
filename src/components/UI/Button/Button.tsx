import React, { FC, ReactNode } from 'react'

import { Flexbox } from '@components/atoms'
import { Icon } from '@components/molecules'

import { theme } from '@constants'
import { TIcon } from '@types'

import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  isGhost?: boolean
  isFluid?: boolean
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  rightIcon?: TIcon
  iconColor?: string
  iconSize?: number
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
}) => (
  <Styled.Button type={type} onClick={onClick} size={size} isGhost={isGhost} isFluid={isFluid} disabled={disabled}>
    <Flexbox justify="center" align="center" gap={theme.space.xs2}>
      {children}
      {rightIcon && <Icon size={iconSize} icon={rightIcon} color={iconColor} />}
    </Flexbox>
  </Styled.Button>
)
