import { theme } from "@constants"
import styled from "styled-components"

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: block;
    text-align: left;
    background-color: ${theme.colors.main};
    padding: ${theme.space.xl}px;
  }
`

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    gap: 120px;
  }
`
const TabletMenu = styled.div`
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
  DesktopMenu,
  TabletMenu,
}