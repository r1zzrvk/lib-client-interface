import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    background-color: ${theme.colors.main};
    display: flex;
    justify-content: end;
    align-items: center;
    padding: ${theme.space.lg}px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.xl2}px 0px;
  }
`

const TextBlock = styled.div`
  display: flex;
  gap: ${theme.space.lg}px;
`

export const Styled = {
  Wrapper,
  TextBlock,
}
