import { FC } from 'react'
import { BackgroundColor } from '@components'
import { BannerContent, BannerImage } from './molecules'

export const MainBanner: FC = () => (
  <BackgroundColor>
    <BannerImage />
    <BannerContent />
  </BackgroundColor>
)
