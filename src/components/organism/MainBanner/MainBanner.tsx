import { FC } from 'react'
import { ResponsiveImage } from '@ui-kit'
import { BannerContent } from './molecules'
import { Styled } from './styled'

export const MainBanner: FC = () => (
  <Styled.Wrapper>
    <ResponsiveImage
      src="https://i.postimg.cc/mrzcmKHX/photos.png"
      alt="books"
      width={552}
      height={550}
      isLg
      isMd
      isSm
    />
    <ResponsiveImage src="https://i.postimg.cc/mrzcmKHX/photos.png" alt="books" width={382} height={380} isTablet />
    <ResponsiveImage src="https://i.postimg.cc/mrzcmKHX/photos.png" alt="books" width={288} height={286} isMob />
    <BannerContent />
  </Styled.Wrapper>
)
