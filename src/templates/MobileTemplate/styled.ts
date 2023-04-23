import { theme } from '@constants'
import styled from 'styled-components'

type TwrapperProps = {
  withoutPadding: boolean
}

const padding = `${theme.space.sm}px ${theme.space.sm}px 82.5px ${theme.space.sm}px`
const withoutSidePadding = `${theme.space.sm}px 0px 82.5px 0px`

const Wrapper = styled.div<TwrapperProps>`
  padding: ${({ withoutPadding }) => (withoutPadding ? withoutSidePadding : padding)};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
