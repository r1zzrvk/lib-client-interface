import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TMobileTemplateProps = {
  children: ReactNode
}

export const MobileTemplate: FC<TMobileTemplateProps> = ({ children }) => <Styled.Wrapper>{children}</Styled.Wrapper>
