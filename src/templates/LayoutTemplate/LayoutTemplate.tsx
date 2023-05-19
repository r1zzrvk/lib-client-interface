import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { PaddingContainer } from '@components/atoms'
import { theme } from '@constants'
import { Styled } from './styled'

type TLayoutTemplateProps = {
  children: ReactNode
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children }) => (
  <Styled.Wrapper>
    <Header />
    <PaddingContainer padding={theme.space.sm} mobOnly>
      {children}
    </PaddingContainer>
    <Spacer sizeMob={theme.space.xl4} size={0} />
    <MobileMenu />
    <Footer />
  </Styled.Wrapper>
)
