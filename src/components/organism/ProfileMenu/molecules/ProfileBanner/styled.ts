import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    padding: 16px 24px 16px 24px;
    border-radius: 24px;
  }
`
const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: ${theme.radiuses.round}px;
`

const TextWrapper = styled.div`
  flex-direction: column;
  margin-left: 32px;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
export const Styled = {
  Wrapper,
  TextWrapper,
  UserInfo,
  Avatar,
}
