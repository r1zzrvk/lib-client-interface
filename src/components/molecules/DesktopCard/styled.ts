import styled from 'styled-components'
import { theme } from '@constants'

const Wrapper = styled.section`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 264px;
    min-height: 256px;
    max-width: 264px;
    max-height: 256px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    border-radius: 24px;
  }
`

const Content = styled.div`
  display: flex;
  gap: ${theme.space.sm}px;
  padding: 0px ${theme.space.md}px;
`
export const Styled = {
  Wrapper,
  Content,
}
