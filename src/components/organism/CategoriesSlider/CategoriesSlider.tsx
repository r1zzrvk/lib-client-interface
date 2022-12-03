import { MobileCard } from 'components/molecules'
import { FC } from 'react'
import { Styled } from './styled'

export const CategoriesSlider: FC = () => (
  <Styled.Wrapper>
    <MobileCard />
    <MobileCard />
    <MobileCard />
  </Styled.Wrapper>
)
