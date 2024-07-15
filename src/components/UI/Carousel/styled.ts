import styled from 'styled-components'

import { theme } from '@constants'

type TListProps = {
  isAnimate: boolean
  animationType: string
}

type TDotProps = {
  active: boolean
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const List = styled.div<TListProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  transition: transform 0.8s ease-in-out;
  animation: ${({ isAnimate, animationType }) => isAnimate && `${animationType} .8s ease-in`};

  @keyframes ParallaxIn {
    0% {
      opacity: 0.1;
      transform: translateX(0);
    }

    25% {
      opacity: 0;
      transform: translateX(100px);
    }

    50% {
      opacity: 0;
      transform: translateX(-100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes ParallaxOut {
    0% {
      opacity: 0.3;
      transform: translateX(0);
    }

    25% {
      opacity: 0;
      transform: translateX(-100px);
    }

    50% {
      opacity: 0;
      transform: translateX(100px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

const Paginator = styled.div`
  text-align: center;
  margin-top: ${theme.space.xl}px;
`

const Dot = styled.span<TDotProps>`
  cursor: pointer;
  height: 15px;
  width: ${({ active }) => (active ? '25px' : '15px')};
  margin: 0 2px;
  background-color: ${({ active }) => (active ? theme.colors.main : theme.colors.beige)};
  border-radius: ${theme.radiuses.round}px;
  display: inline-block;
  transition: all 0.6s ease;

  &:hover {
    background-color: ${theme.colors.main};
  }
`
export const Styled = {
  Wrapper,
  Paginator,
  Dot,
  List,
}
