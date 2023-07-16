import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin-top: -224px;
    margin-left: -83px;
    z-index: 1;
    background-color: rgba(179, 163, 161, 0.8);
    padding-top: ${theme.space.sm}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin-left: 0px;
    margin-top: 0px;
    padding-top: 0px;
    z-index: 0;
  }
`

export const Styled = {
  Wrapper,
}
