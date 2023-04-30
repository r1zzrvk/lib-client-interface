import { theme } from '@constants'
import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  padding: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 40px 0px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    justify-content: space-around;
    padding: ${theme.space.xl3}px ${theme.space.xl4}px ${theme.space.xl3}px ${theme.space.xl4}px;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    justify-content: center;
    gap: 100px;
    padding: ${theme.space.xl3}px 156px ${theme.space.xl3}px 156px;
  }
`
