import { FC } from 'react'
import { ResponsiveImage } from '../ResponsiveImage'
import { Styled } from './styled'

export const PagePreloader: FC = () => (
  <Styled.Wrapper>
    <Styled.Logo>
      <ResponsiveImage isEverywhere src="/logotype.svg" alt="logotype" width={80} height={71} />
    </Styled.Logo>
  </Styled.Wrapper>
)
