import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu } from '@components'
import { Styled } from './styled'

type TLayoutTemplateProps = {
  children: ReactNode
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children }) => (
  <Styled.Wrapper>
    <Header />
    {children}
    <MobileMenu />
    <Footer />
  </Styled.Wrapper>
)
