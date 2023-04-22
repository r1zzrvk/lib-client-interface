import { MobileCard } from 'components/molecules'
import { FC } from 'react'
import { Styled } from './styled'

const arr = [1, 2, 3, 4, 5, 6, 7]

export const CategoriesSlider: FC = () => (
  <Styled.OutOfContainerWrap>
    <Styled.Wrapper>
      {arr.map(item => (
        <MobileCard key={item} size="sm" imgUrl="https://i.ibb.co/jw89YFm/Group-14.png" />
      ))}
    </Styled.Wrapper>
  </Styled.OutOfContainerWrap>
)
