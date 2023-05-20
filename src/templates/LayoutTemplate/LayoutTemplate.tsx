import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu } from '@ui-kit'
import { PaddingContainer } from '@components/atoms'
import { theme } from '@constants'

type TLayoutTemplateProps = {
  children: ReactNode
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children }) => (
  <>
    <Header />
    <PaddingContainer padding={theme.space.sm} mobOnly>
      {children}
    </PaddingContainer>
    <MobileMenu />
    <Footer />
  </>
)
