import { theme } from '@constants'
import styled from 'styled-components'

type TStyledVariantProps = {
  variant: 'horizontal' | 'vertical'
  color?: string
}

const Wrapper = styled.div<TStyledVariantProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
  background-color: ${({ color }) => color};
  justify-content: space-between;
  border-radius: ${theme.radiuses.md}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  padding: ${theme.space.sm}px ${theme.space.md}px ${theme.space.sm}px ${theme.space.md}px;
  margin: 0px ${theme.space.sm}px 0px ${theme.space.sm}px;
`

const TextWrapper = styled.div<TStyledVariantProps>`
  flex-direction: column;
  margin-left: ${({ variant }) => (variant === 'horizontal' ? theme.space.sm : 0)}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin-left: ${({ variant }) => (variant === 'horizontal' ? theme.space.lg : 0)}px;
  }
`
const UserInfo = styled.div<TStyledVariantProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
  text-align: ${({ variant }) => (variant === 'horizontal' ? 'left' : 'center')};
`
export const Styled = {
  Wrapper,
  TextWrapper,
  UserInfo,
}
