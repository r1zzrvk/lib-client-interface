import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.section`
  display: flex;
  margin-right: 40px;
  margin-left: 40px;

@media (min-width: ${theme.breakpoints.sm}px) {
  margin-right: 120px;
  margin-left: 100px;

}
`
const Icon = styled.div`
padding-right: ${theme.space.lg}px;

@media (min-width: ${theme.breakpoints.sm}px) {
  padding-right: ${theme.space.md}px;
}
`
export const Styled = {
  Wrapper,
  Icon
}