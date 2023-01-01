import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  active: boolean
}

type TActiveDotProps = {
  isAnimate: boolean
}
const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: 0.4s ease-in-out;
  border-top: ${({ active }) => active && `3px solid ${theme.colors.main}`};
`
const ActiveDot = styled.div<TActiveDotProps>`
  background-color: ${theme.colors.main};
  width: 10px;
  height: 10px;
  margin-right: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  animation: click 0.6s ease-in-out;

  @keyframes click {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const Styled = {
  Wrapper,
  ActiveDot,
}
