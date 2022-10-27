import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 25px 25px 0px 0px;
  background-color: ${theme.colors.white};
  padding: ${theme.space.md}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
