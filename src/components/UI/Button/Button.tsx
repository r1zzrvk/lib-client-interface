import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  isGhost?: boolean
  isFluid?: boolean
  type?: 'submit' | 'button' | 'reset'
}

export const Button: FC<TButton> = ({
  children,
  onClick,
  size = 'md',
  isGhost = false,
  isFluid = false,
  type = 'submit',
}) => (
  <Styled.Button type={type} onClick={onClick} size={size} isGhost={isGhost} isFluid={isFluid}>
    {children}
  </Styled.Button>
)
