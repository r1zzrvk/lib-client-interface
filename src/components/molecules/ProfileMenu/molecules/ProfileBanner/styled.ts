import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.radiuses.md}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  padding: ${theme.space.sm}px ${theme.space.md}px ${theme.space.sm}px ${theme.space.md}px;
  margin: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
`

const TextWrapper = styled.div`
  flex-direction: column;
  margin-left: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin-left: ${theme.space.lg}px;
  }
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
export const Styled = {
  Wrapper,
  TextWrapper,
  UserInfo,
}
