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
  margin: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: 0px;
    background-color: ${theme.colors.main};
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    align-items: center;
  }
`

const DesktopLayout = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: ${theme.space.xl}px 0px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    width: 700px;
  }
`

const TabsContainer = styled.div<TTabsContainerProps>`
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  margin: ${({ marginTop }) => getMargin(marginTop)};
`

const TabsWrapper = styled.div`
  @media (min-width: ${theme.breakpoints.tablet}px) {
    background-color: ${theme.colors.white};
    padding: ${theme.space.sm}px ${theme.space.md}px;
    border-radius: ${theme.radiuses.md}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  }
`

export const Styled = {
  Wrapper,
  TabsContainer,
  DesktopLayout,
  TabsWrapper,
}
