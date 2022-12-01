import { FC } from 'react'
import { MainBanner, MobileBanner, MobileInput, TipsBanner } from '@components'
import { MobileTemplate } from '@templates'

const MainPage: FC = () => (
  <>
    <MainBanner />
    <TipsBanner />
    <MobileTemplate>
      <MobileInput placeholder="Search" type="text" />
      <MobileBanner content='Discounts up to 15% to all'/>
    </MobileTemplate>
  </>
)

export default MainPage
