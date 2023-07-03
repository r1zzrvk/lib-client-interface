import { FC } from 'react'
import { ResponsiveImage } from '@ui-kit'
import { Styled } from './styled'

export const BannerImage: FC = () => (
  <Styled.Wrapper>
    <ResponsiveImage src="https://i.postimg.cc/mrzcmKHX/photos.png" alt="books" width={552} height={550} isEverywhere />
  </Styled.Wrapper>
)
