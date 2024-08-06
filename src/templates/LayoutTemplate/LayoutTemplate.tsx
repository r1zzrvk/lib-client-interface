import { ReactNode, FC } from 'react'

import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { Flexbox, PaddingContainer } from '@components/atoms'
import { AuthProvider } from '@components/molecules'

import { theme } from '@constants'
import { THeaderFooter } from '@types'

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
        <Spacer sizeMob={0} sizeTablet={105} size={135} />
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
