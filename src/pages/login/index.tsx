import { FC } from 'react'
import { LoginForm } from '@components/organism'
import { Spacer } from '@ui-kit'
import { theme } from '@constants'
import { LayoutTemplate } from '@templates'
import { getStaticPageProps } from '@api'
import { THeaderFooter } from '@types'

export const getStaticProps = getStaticPageProps

const LoginPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => {
  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Spacer size={theme.space.xl4} sizeMob={theme.space.xl}/>
        <LoginForm />
      <Spacer size={theme.space.xl4} />
    </LayoutTemplate>
  )
}

export default LoginPage
