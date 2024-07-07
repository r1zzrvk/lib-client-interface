import styled from 'styled-components'

import { theme } from '@constants'

type TWrapperProps = {
  marginTop: number | undefined
}

function getMargin(marginTop?: number): string {
  return marginTop
    ? `${marginTop}px -${theme.space.sm}px 0px -${theme.space.sm}px`
    : `0px -${theme.space.sm}px 0px -${theme.space.sm}px`
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: 'column';
  overflow-x: auto;
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  margin: ${({ marginTop }) => getMargin(marginTop)};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: ${({ marginTop }) => `${marginTop}px 0px 0px 0px`};
  }
`

export const Styled = {
  Wrapper,
}
