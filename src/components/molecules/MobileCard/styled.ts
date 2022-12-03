import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-width: 128px;
  min-height: 160px;
  width: 128px;
  height: 160px;
  background-color: #f1eeee;
  border-radius: 24px;
  background-image: url('https://i.ibb.co/jw89YFm/Group-14.png');

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: none;
  }
`

export const Styled = {
  Wrapper,
}
