import { FC } from 'react'
import { useRouter } from 'next/router'

import { SmallCard } from '@components/molecules'

import { EPagePaths, TSmallCard } from '@types'

import { Styled } from './styled'

type TCategoriesSliderProps = {
  items: TSmallCard[]
}

export const CategoriesSlider: FC<TCategoriesSliderProps> = ({ items }) => {
  const router = useRouter()

  const handleCardClick = (title: string) => {
    router.push(`${EPagePaths.CATALOG}?category=${title}`)
  }

  return (
    <Styled.OutOfContainerWrap>
      <Styled.Wrapper>
        {items.map(({ description, id, image, title }) => (
          <SmallCard
            title={title}
            description={description}
            image={image}
            key={id}
            onClick={() => handleCardClick(title)}
          />
        ))}
      </Styled.Wrapper>
    </Styled.OutOfContainerWrap>
  )
}
