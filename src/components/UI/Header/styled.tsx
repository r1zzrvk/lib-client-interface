import styled from 'styled-components'

import { theme } from '@constants'

type THeaderWrapperProps = {
  isScrolling: boolean
}

const animate = (isScrolling: boolean) => `${isScrolling ? 'scrollingOff' : 'scrollingOn'} 1s both`

const Wrapper = styled.header<THeaderWrapperProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.main};
  padding: ${theme.space.xs2}px ${theme.space.sm}px;
  height: 75px;
  z-index: 700;
  max-height: 135px;
  -webkit-animation: ${({ isScrolling }) => animate(isScrolling)};
  animation: ${({ isScrolling }) => animate(isScrolling)};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    position: fixed;
    top: 0;
    padding: ${theme.space.md}px ${theme.space.lg}px;
    height: 105px;

    @-webkit-keyframes scrollingOff {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-105px);
        transform: translateY(-105px);
      }
    }
    @keyframes scrollingOff {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-105px);
        transform: translateY(-105px);
      }
    }

    @-webkit-keyframes scrollingOn {
      0% {
        -webkit-transform: translateY(-105px);
        transform: translateY(-105px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes scrollingOn {
      0% {
        -webkit-transform: translateY(-105px);
        transform: translateY(-105px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xl}px 120px;
    height: 135px;

    @-webkit-keyframes scrollingOff {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-135px);
        transform: translateY(-135px);
      }
    }
    @keyframes scrollingOff {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-135px);
        transform: translateY(-135px);
      }
    }

    @-webkit-keyframes scrollingOn {
      0% {
        -webkit-transform: translateY(-135px);
        transform: translateY(-135px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes scrollingOn {
      0% {
        -webkit-transform: translateY(-135px);
        transform: translateY(-135px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
`

const TextBlock = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    gap: ${theme.space.lg}px;
  }
`

const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  padding: 0;
  margin: 0;
  gap: ${theme.space.lg}px;
`

export const Styled = {
  Wrapper,
  TextBlock,
  Menu,
}
