import { FC } from 'react'
import { BannerContent, BannerImage } from './molecules'
import { Wrapper } from './styled'

export const MainBanner: FC = () => (
  <Wrapper>
    <BannerImage />
    <BannerContent />
  </Wrapper>
)
