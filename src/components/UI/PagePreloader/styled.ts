import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.main};
`

const Logo = styled.div`
  -webkit-animation: scale-up-center 3s ease-in-out infinite alternate-reverse;
  animation: scale-up-center 3s ease-in-out infinite alternate-reverse;

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
`

export const Styled = {
  Wrapper,
  Logo,
}
