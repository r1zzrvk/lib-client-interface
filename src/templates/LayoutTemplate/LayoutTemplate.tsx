import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { Flexbox, PaddingContainer } from '@components/atoms'
import { theme } from '@constants'
import { THeaderFooter } from '@types'
import { AuthProvider } from '@components/molecules'

type TLayoutTemplateProps = {
  children: ReactNode
  headerFooterData: THeaderFooter
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children, headerFooterData }) => {
  const { header, footer } = headerFooterData || {}

  return (
    <AuthProvider>
      <Flexbox direction="column" height="100%">
        <Header headerData={header} />
        <PaddingContainer padding={theme.space.sm} mobOnly withMaxHeight>
          {children}
        </PaddingContainer>
        <Spacer sizeMob={theme.space.xl4} size={0} />
        <MobileMenu />
        <Footer footerData={footer} />
      </Flexbox>
    </AuthProvider>
  )
}
