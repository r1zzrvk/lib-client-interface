import { IconsSelector } from '@components'
import { theme } from '@constants'
import React, { FC } from 'react'
import { Styled } from './styled'

type TCarouselProps = {
  component: React.ReactNode
}

export const Carousel: FC<TCarouselProps> = ({ component }) => (
  <>
    <Styled.Wrapper>
      <Styled.Button>
        <IconsSelector icon="arrowRight" color={theme.colors.grey} />
      </Styled.Button>
      {component}
      <Styled.Button isRight>
        <IconsSelector icon="arrowRight" color={theme.colors.grey} />
      </Styled.Button>
    </Styled.Wrapper>
    <Styled.Paginator>
      <Styled.Dot />
      <Styled.Dot />
      <Styled.Dot />
    </Styled.Paginator>
  </>
)
