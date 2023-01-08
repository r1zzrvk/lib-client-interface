import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  active: boolean
  isColumn: boolean
}

type TActiveDotProps = {
  isAnimate: boolean
}
const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: ${({ isColumn }) => !isColumn && '0.4s ease-in-out'};
  box-shadow: ${({ active, isColumn }) => active && isColumn && `0px 2px 0px 0px ${theme.colors.main} inset`};
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
