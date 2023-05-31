import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { PaddingContainer } from '@components/atoms'
import { theme } from '@constants'
import { THeaderFooter } from '@types'

type TLayoutTemplateProps = {
  children: ReactNode
  headerFooterData: THeaderFooter
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children, headerFooterData }) => {
  const { header, footer } = headerFooterData

  return (
    <>
      <Header headerData={header} />
      <PaddingContainer padding={theme.space.sm} mobOnly>
        {children}
      </PaddingContainer>
      <Spacer sizeMob={theme.space.xl4} size={0} />
      <MobileMenu />
      <Footer footerData={footer} />
    </>
  )
}
