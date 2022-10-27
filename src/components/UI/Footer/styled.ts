import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: block;
    text-align: left;
    background-color: ${theme.colors.main};
  }
`

export const Styled = {
  Wrapper,
}