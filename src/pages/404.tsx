import { FC } from 'react'
import { Error404 } from '@components/organism'
import { getStaticPageProps } from '@api'
import { THeaderFooter } from '@types'
import { LayoutTemplate } from '@templates'
import { Background } from '@components/atoms'
import { theme } from '@constants'

export const getStaticProps = getStaticPageProps

const Error404page: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    <Background color={theme.colors.white}>
      <Error404 />
    </Background>
  </LayoutTemplate>
)

export default Error404page
