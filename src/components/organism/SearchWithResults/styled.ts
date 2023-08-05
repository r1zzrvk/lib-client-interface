import styled from 'styled-components'
import { theme } from '@constants'

const SearchWithResults = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 600px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: 600px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: 700px;
  }
`

const BadgesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.space.xs2}px;
  margin: 0px -${theme.space.sm}px;
  padding: ${theme.space.xs2}px ${theme.space.sm}px ${theme.space.xs3}px ${theme.space.sm}px;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: 0px -${theme.space.lg}px;
    padding: ${theme.space.xs2}px ${theme.space.lg}px ${theme.space.xs3}px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xs2}px ${theme.space.xs3}px;
    margin: 0px;
  }
`

export const Styled = {
  SearchWithResults,
  BadgesContainer,
}
