import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
  display: flex;
  justify-content: space-evenly;
  gap: 120px;
  align-items: stretch;
  text-align: left;
  background-color: ${theme.colors.main};
  padding: ${theme.space.xl}px;
  }
`

export const Styled = {
  Wrapper,
}