import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  color: string
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
  min-width: 168px;
  min-height: 168px;
  max-width: 168px;
  max-height: 168px;
  background-color: ${({ color }) => color};
  border-radius: ${theme.radiuses.md}px;
`

export const Styled = {
  Wrapper,
}
