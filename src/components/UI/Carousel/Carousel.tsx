import React, { useState } from 'react'
import { IconsSelector, ItemList } from '@components/molecules'
import { theme } from '@constants'
import { usePagination } from '@hooks'
import { getPagesArray } from '@utils'
import { Styled } from './styled'

type TCarouselProps<T> = {
  component: (item: T) => React.ReactNode | Element
  items: T[]
  contentPerPage?: number
}

// eslint-disable-next-line react/function-component-definition
export function Carousel<T>({ component, items, contentPerPage = 3 }: TCarouselProps<T>) {
  const paginator = {
    contentPerPage,
    itemsCount: items.length,
  }
  const { firstIndex, lastIndex, totalPages, nextPage, prevPage, page, setPage } = usePagination(paginator)
  const pages = getPagesArray(totalPages)
  const [active, setActive] = useState(page)
  const [animation, setAnimation] = useState({
    isAnimate: false,
    animationType: '',
  })

  const handleClick = (num: number) => {
    setActive(num)
    setPage(num)
    setAnimation({
      isAnimate: true,
      animationType: num > page ? 'ParallaxIn' : 'ParallaxOut',
    })
  }

  const handleArrowClick = (fn: () => void, direction: boolean) => {
    fn()
    setActive(direction ? active + 1 : active - 1)
    setAnimation({
      isAnimate: true,
      animationType: direction ? 'ParallaxIn' : 'ParallaxOut',
    })
  }

  return (
    <>
      <Styled.Wrapper onAnimationEnd={() => setAnimation({ ...animation, isAnimate: false })}>
        <Styled.Button
          onClick={() => handleArrowClick(prevPage, false)}
          isInvisible={page === 1}
          disabled={page === 1}
          isLeft
        >
          <IconsSelector icon="caretLeft_solid" color={theme.colors.grey} />
        </Styled.Button>
        <Styled.List isAnimate={animation.isAnimate} animationType={animation.animationType}>
          <ItemList items={items.slice(firstIndex, lastIndex)} renderItem={component} />
        </Styled.List>
        <Styled.Button
          onClick={() => handleArrowClick(nextPage, true)}
          isInvisible={page === pages.length}
          disabled={page === pages.length}
        >
          <IconsSelector icon="caretRight_solid" color={theme.colors.grey} />
        </Styled.Button>
      </Styled.Wrapper>
      <Styled.Paginator>
        <ItemList
          items={pages}
          renderItem={(item: number) => (
            <Styled.Dot key={item} active={active === item} onClick={() => handleClick(item)} />
          )}
        />
      </Styled.Paginator>
    </>
  )
}
