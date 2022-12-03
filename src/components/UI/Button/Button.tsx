import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  isGhost?: boolean
}

export const Button: FC<TButton> = ({ children, onClick, size = 'md', isGhost = false }) => (
  <Styled.Button type="submit" onClick={onClick} size={size} isGhost={isGhost}>
    {children}
  </Styled.Button>
)
