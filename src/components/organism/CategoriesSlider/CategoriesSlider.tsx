import { FC } from 'react'
import { TSmallCard } from '@types'
import { SmallCard } from '@components/molecules'
import { Styled } from './styled'

type TCategoriesSliderProps = {
  items: TSmallCard[]
}

export const CategoriesSlider: FC<TCategoriesSliderProps> = ({ items }) => (
  <Styled.OutOfContainerWrap>
    <Styled.Wrapper>
      {items.map(({ description, id, image, title }) => (
        <SmallCard title={title} description={description} image={image} key={id} />
      ))}
    </Styled.Wrapper>
  </Styled.OutOfContainerWrap>
)
