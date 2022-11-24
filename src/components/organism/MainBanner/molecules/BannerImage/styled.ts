import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.sm}px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-right: 50px;
  }
`

const Image = styled.img`
  width: 50%;
  max-width: 100%;
  height: auto;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`
export const Styled = {
  Wrapper,
  Image,
}
