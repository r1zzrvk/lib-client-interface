import { theme } from '@constants'
import styled from 'styled-components'

type TButtonProps = {
  isRight?: boolean
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
const Button = styled.button<TButtonProps>`
  border: none;
  background-color: inherit;
  transform: ${({ isRight }) => isRight && 'rotate(180deg)'};
`

const Paginator = styled.div`
  text-align: center;
  margin-top: ${theme.space.xl}px;
`

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${theme.colors.beige};
  border-radius: ${theme.radiuses.round}px;
  display: inline-block;
  transition: background-color 0.6s ease;
`
export const Styled = {
  Wrapper,
  Button,
  Paginator,
  Dot,
}
