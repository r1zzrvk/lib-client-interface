import { theme } from '@constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: none;
  background-color: ${theme.colors.main};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px ${theme.space.xl2}px ${theme.space.xl2}px ${theme.space.xl2}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    gap: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 70px 50px 70px 50px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    gap: 120px;
    align-items: center;
    flex-direction: row;
    padding: 70px 120px 160px 120px;
  }
`
