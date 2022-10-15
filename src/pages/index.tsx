import { FC } from 'react'
import { Footer, Header } from '@components'
import { Styled } from './styled'

const MainPage: FC = () => (
  <>
    <Styled.Background>
      <Header />
    </Styled.Background>
    <div style={{ height: '700px' }}></div>
    <Footer />
  </>
)

export default MainPage