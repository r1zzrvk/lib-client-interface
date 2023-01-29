import { FC } from 'react'
import { CategoriesBanner, CategoriesSlider, MainBanner, MobileBanner, Input, TipsBanner } from '@components'
import { MobileTemplate } from '@templates'
import { CATEGORIES_BANNER } from '@constants'

const MainPage: FC = () =>  (
    <>
      <MainBanner />
      <TipsBanner />
      <CategoriesBanner
        header={CATEGORIES_BANNER.header}
        subheader={CATEGORIES_BANNER.subheader}
        text={CATEGORIES_BANNER.text}
      />
      <MobileTemplate>
        <Input placeholder="Search" type="text" fluid onChange={() => ''} />
        <MobileBanner content="Discounts up to 15% to all" />
        <CategoriesSlider />
      </MobileTemplate>
    </>
  )

export default MainPage
