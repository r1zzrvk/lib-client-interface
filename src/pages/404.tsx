import { FC } from 'react'
import { Error404 } from '@components/organism'
import { getStaticPageProps } from '@api'
import { THeaderFooter } from '@types'
import { LayoutTemplate } from '@templates'

export const getStaticProps = getStaticPageProps

const Error404page: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    <Error404 />
  </LayoutTemplate>
)

export default Error404page
