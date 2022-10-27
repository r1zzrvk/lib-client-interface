import { ReactNode, FC } from 'react'
import { Footer, Header, MobileMenu } from '@components'

type TLayoutTemplateProps = {
  children: ReactNode
}

export const LayoutTemplate:FC<TLayoutTemplateProps> = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <MobileMenu />
    <Footer />
    </>
  )
}
