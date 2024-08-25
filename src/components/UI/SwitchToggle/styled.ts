import styled from 'styled-components'

import { theme } from '@constants'

type TSwitchProps = {
  width: string
  height: string
  disabled?: boolean
  checked?: boolean
}

type TRoundProps = {
  width: string
  height: string
  margin: string
  left: string
  checked?: boolean
}

export const Switch = styled.div<TSwitchProps>`
  position: relative;
  border-radius: ${theme.radiuses.sm}px;
  background-color: ${({ checked }) => (checked ? theme.colors.main : theme.colors.grey_disabled)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s ease-in;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const Input = styled.input`
  display: none;
`

export const Round = styled.div<TRoundProps>`
  position: absolute;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radiuses.round}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  transition: 0.2s ease-in;
  left: ${({ checked, left }) => (checked ? left : '0px')};
`

export const Styled = {
  Switch,
  Input,
  Round,
}
