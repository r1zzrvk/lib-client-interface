import { FC } from 'react'
import { ResponsiveImage } from '@ui-kit'
import { BannerContent } from './molecules'
import { Wrapper } from './styled'

export const MainBanner: FC = () => (
  <Wrapper>
    <ResponsiveImage src="https://i.postimg.cc/mrzcmKHX/photos.png" alt="books" width={552} height={550} isEverywhere />
    <BannerContent />
  </Wrapper>
)
