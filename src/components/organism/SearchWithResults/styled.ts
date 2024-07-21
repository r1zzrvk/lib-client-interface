import styled from 'styled-components'

import { theme } from '@constants'

const SearchWithResults = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    background-color: ${theme.colors.white};
    border-radius: ${theme.radiuses.md}px;
    padding: ${theme.space.sm}px ${theme.space.md}px ${theme.space.xl}px ${theme.space.md}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  }
`

const BadgesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.space.xs2}px;
  margin: 0px -${theme.space.sm}px;
  padding: ${theme.space.xs}px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: 0px -${theme.space.lg}px;
    padding: ${theme.space.sm}px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    flex-wrap: wrap;
    padding: ${theme.space.sm}px ${theme.space.xs3}px;
    margin: 0px;
  }
`

export const Styled = {
  SearchWithResults,
  BadgesContainer,
}
