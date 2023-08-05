import { FC } from 'react'
import { CategoriesBanner, MainBanner, PromoBanner } from '@components/organism'
import { CATEGORIES_BANNER } from '@constants'
import { useBreakpoint } from '@hooks'
import { LayoutTemplate } from '@templates'
import { THeaderFooter } from '@types'
import { getStaticPageProps } from '@api'
import { SearchField } from '@components/molecules'

export const getStaticProps = getStaticPageProps

const MainPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => {
  const { isMob } = useBreakpoint()

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {isMob && (
        <SearchField />
      )}
      <MainBanner />
      <PromoBanner />
      <CategoriesBanner
        header={CATEGORIES_BANNER.header}
        subheader={CATEGORIES_BANNER.subheader}
        text={CATEGORIES_BANNER.text}
      />
    </LayoutTemplate>
  )
}

export default MainPage
