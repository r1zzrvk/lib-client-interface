import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  text-align: left;
  gap: 120px;
  background-color: ${theme.colors.main};
  padding: ${theme.space.xl}px;
`

export const Styled = {
  Wrapper,
}