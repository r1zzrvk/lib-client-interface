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
`

const TabsContainer = styled.div<TTabsContainerProps>`
  padding: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
  margin: ${({ marginTop }) => getMargin(marginTop)};
`
export const Styled = {
  Wrapper,
  TabsContainer,
}
