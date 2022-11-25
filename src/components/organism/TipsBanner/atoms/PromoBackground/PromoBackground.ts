import { theme } from '@constants'
import styled from 'styled-components'

export const PromoBackground = styled.div`
  width: 700px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  opacity: 0.9;
  background-color: ${theme.colors.main};
  padding: ${theme.space.xl}px ${theme.space.lg}px ${theme.space.xl}px ${theme.space.lg}px;
  margin-left: ${theme.space.xl}px;
`
