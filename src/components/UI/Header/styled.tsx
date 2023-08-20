import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.main};
  padding: ${theme.space.xs2}px ${theme.space.sm}px;
  min-height: 70px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.md}px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.lg}px 120px;
  }
`

const TextBlock = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    gap: ${theme.space.lg}px;
  }
`

export const Styled = {
  Wrapper,
  TextBlock,
}
