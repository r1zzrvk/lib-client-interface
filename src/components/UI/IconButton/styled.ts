import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
padding-right: ${theme.space.lg}px;
cursor: pointer;
transition: 0.4s;

@media (min-width: ${theme.breakpoints.sm}px) {
  padding-right: ${theme.space.md}px;
}

&:hover {
  scale: 1.2;
}
`

export const Styled = {
  Wrapper
}