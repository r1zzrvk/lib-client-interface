import { FC } from 'react'
import { MainBanner, MobileInput } from '@components'
import { MobileTemplate } from '@templates'

const MainPage: FC = () => (
  <>
    <MainBanner />
    <MobileTemplate>
      <MobileInput placeholder="Search" type="text" />
    </MobileTemplate>
  </>
)

export default MainPage
