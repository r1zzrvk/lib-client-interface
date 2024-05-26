import { FC } from 'react'
import { CategoriesBanner, MainBanner, PromoBanner } from '@components/organism'
import { CATEGORIES_BANNER } from '@constants'
import { LayoutTemplate } from '@templates'
import { THeaderFooter } from '@types'
import { getStaticPageProps } from '@api'

export const getStaticProps = getStaticPageProps

const MainPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    <MainBanner />
    <PromoBanner />
    <CategoriesBanner
      header={CATEGORIES_BANNER.header}
      subheader={CATEGORIES_BANNER.subheader}
      text={CATEGORIES_BANNER.text}
    />
  </LayoutTemplate>
)

export default MainPage
