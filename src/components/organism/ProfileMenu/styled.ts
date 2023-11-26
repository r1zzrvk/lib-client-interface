import { theme } from '@constants'
import styled from 'styled-components'

type TTabsContainerProps = {
  marginTop?: number
}

function getMargin(marginTop?: number): string {
  return marginTop
    ? `${marginTop}px -${theme.space.sm}px 0px -${theme.space.sm}px`
    : `0px -${theme.space.sm}px 0px -${theme.space.sm}px`
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
    margin: ${theme.space.xl}px 0px;
  }
`

const DesktopLayout = styled.div`
  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    padding: ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px;
  }
`

const TabsContainer = styled.div<TTabsContainerProps>`
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  margin: ${({ marginTop }) => getMargin(marginTop)};
`
export const Styled = {
  Wrapper,
  TabsContainer,
  DesktopLayout,
}
