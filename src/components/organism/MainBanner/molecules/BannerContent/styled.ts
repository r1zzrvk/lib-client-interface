import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-end;
  margin-top: -140px;
  z-index: 1;
  background-color: ${theme.colors.main};
  padding: ${theme.space.sm}px;
  border-radius: ${theme.radiuses.sm}px;
  box-shadow: 4px 4px 8px 0px rgba(144, 134, 133, 0.25), -4px -4px 8px 0px rgba(153, 139, 138, 0.25);
  width: 256px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: 333px;
    margin-top: -224px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 100%;
    align-self: center;
    margin-left: 0px;
    margin-top: 0px;
    padding: 0px;
    z-index: 0;
    box-shadow: none;
  }
`

export const Styled = {
  Wrapper,
}
