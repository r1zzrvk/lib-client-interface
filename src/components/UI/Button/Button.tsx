import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TButton = {
  children: ReactNode
  onClick: () => void
  size?: string
}

export const Button: FC<TButton> = ({ children, onClick, size = 'md' }) => (
  <Styled.Button type="submit" onClick={onClick} size={size}>
    {children}
  </Styled.Button>
)
