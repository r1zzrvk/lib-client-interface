import { theme } from '@constants'
import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  background-color: ${theme.colors.beige};
  justify-content: center;
  flex-direction: column;
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;
  padding: ${theme.space.sm}px ${theme.space.sm}px 0px ${theme.space.sm}px;
`

export const Styled = {
  Background,
}
