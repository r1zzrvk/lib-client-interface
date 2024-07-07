import styled from 'styled-components'

import { theme } from '@constants'

type TwrapperProps = {
  withoutPadding: boolean
}

const paddingMob = `${theme.space.sm}px ${theme.space.sm}px 82.5px ${theme.space.sm}px`
const withoutSidePaddingMob = `${theme.space.sm}px 0px ${theme.space.xl4}px 0px`
const padding = `0px ${theme.space.lg}px 0px ${theme.space.lg}px`

const Wrapper = styled.div<TwrapperProps>`
  padding: ${({ withoutPadding }) => (withoutPadding ? withoutSidePaddingMob : paddingMob)};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ withoutPadding }) => (withoutPadding ? '0px' : padding)};
  }
`

export const Styled = {
  Wrapper,
}
