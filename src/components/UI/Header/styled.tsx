import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.header`
  display: none;

@media (min-width: ${theme.breakpoints.tablet}px) {
  background-color: ${theme.colors.main};
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: ${theme.space.xl2}px;
}
`

export const Styled = {
  Wrapper
}