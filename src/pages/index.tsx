import { FC } from 'react'
import { BackgroundColor, Footer, Header, MobileMenu } from '@components'

const MainPage: FC = () => (
  <>
    <BackgroundColor>
      <Header />
    </BackgroundColor>
    {/* <div style={{ height: '700px' }}></div> */}
    <MobileMenu />
    <Footer />
  </>
)

export default MainPage