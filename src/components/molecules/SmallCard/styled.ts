import styled from 'styled-components'
import { theme } from '@constants'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: ${theme.radiuses.md}px;
  min-width: 264px;
  min-height: 256px;
  max-width: 264px;
  max-height: 256px;
  scroll-snap-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  padding: 0px ${theme.space.sm};
  gap: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.md}px;
  }
`

const TextContainer = styled.div`
  width: 100px;
`
export const Styled = {
  Wrapper,
  Content,
  TextContainer,
}
