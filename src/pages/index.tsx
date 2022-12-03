import { FC } from 'react'
import { CategoriesBanner, MainBanner, MobileBanner, MobileInput, TipsBanner } from '@components'
import { MobileTemplate } from '@templates'
import { CATEGORIES_BANNER } from '@constants'

const MainPage: FC = () => (
  <>
    <MainBanner />
    <CategoriesBanner header={CATEGORIES_BANNER.header} subheader={CATEGORIES_BANNER.subheader} text={CATEGORIES_BANNER.text}/>
    <TipsBanner />
    <MobileTemplate>
      <MobileInput placeholder="Search" type="text" />
      <MobileBanner content='Discounts up to 15% to all'/>
    </MobileTemplate>
  </>
)

export default MainPage
