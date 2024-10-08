import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: ${theme.space.lg}px 0px;
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    align-items: center;
  }
`

const ListsWrapper = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    box-sizing: border-box;
    padding: ${theme.space.lg}px ${theme.space.md}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    border-radius: ${theme.radiuses.md}px;
    background-color: ${theme.colors.white};
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin: ${theme.space.lg}px 120px ${theme.space.lg}px 120px;
    max-width: 700px;
  }
`

export const Styled = {
  Wrapper,
  ListsWrapper,
}
