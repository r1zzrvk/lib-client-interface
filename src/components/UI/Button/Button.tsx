import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  isGhost?: boolean
  isFluid?: boolean
}

export const Button: FC<TButton> = ({ children, onClick, size = 'md', isGhost = false, isFluid = false }) => (
  <Styled.Button type="submit" onClick={onClick} size={size} isGhost={isGhost} isFluid={isFluid}>
    {children}
  </Styled.Button>
)
