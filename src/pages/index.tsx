import { FC } from 'react'
import { BackgroundColor, Footer, Header } from '@components'

const MainPage: FC = () => (
  <>
    <BackgroundColor>
      <Header />
    </BackgroundColor>
    <div style={{ height: '700px' }}></div>
    <Footer />
  </>
)

export default MainPage