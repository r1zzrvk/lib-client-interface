import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TMobileTemplateProps = {
  children: ReactNode
  withoutPadding?: boolean
}

export const MobileTemplate: FC<TMobileTemplateProps> = ({ children, withoutPadding = false }) => (
  <Styled.Wrapper withoutPadding={withoutPadding}>{children}</Styled.Wrapper>
)
