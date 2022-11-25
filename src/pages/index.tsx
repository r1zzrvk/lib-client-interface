import { FC } from 'react'
import { MainBanner, MobileInput, TipsBanner } from '@components'
import { MobileTemplate } from '@templates'

const MainPage: FC = () => (
  <>
    <MainBanner />
    <TipsBanner />
    <MobileTemplate>
      <MobileInput placeholder="Search" type="text" />
    </MobileTemplate>
  </>
)

export default MainPage
