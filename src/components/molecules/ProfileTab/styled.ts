import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  isColumn: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.space.sm}px;
  border-radius: ${theme.radiuses.md}px;
  padding: ${({ isColumn }) => !isColumn && `${theme.space.lg}px ${theme.space.sm}px`};
`
const Content = styled.div`
  background-color: ${theme.colors.main};
  border-radius: ${theme.radiuses.md}px;
  padding: ${theme.space.lg}px;
`
export const Styled = {
  Wrapper,
  Content,
}
