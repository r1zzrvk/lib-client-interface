import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;
  background-color: ${theme.colors.main};
  padding: ${theme.space.md}px ${theme.space.sm}px ${theme.space.md}px ${theme.space.sm}px;

  @media (min-width: 410px) {
    padding: ${theme.space.lg}px calc((100vw - 378px) / 2) ${theme.space.lg}px calc((100vw - 378px) / 2);
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px calc((100vw - 536px) / 2) ${theme.space.xl2}px calc((100vw - 536px) / 2);
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    gap: ${theme.space.lg}px;
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

export const Styled = {
  Wrapper,
}
