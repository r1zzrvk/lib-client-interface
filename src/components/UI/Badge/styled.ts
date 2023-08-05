import styled from 'styled-components'
import { theme } from '@constants'

type TBadgeProps = {
  checked: boolean
}

const Badge = styled.div`
  display: inline-block;
  flex-shrink: 0;
`

const Label = styled.label<TBadgeProps>`
  display: inline-block;
  cursor: pointer;
  padding: ${theme.space.xs3}px ${theme.space.xs}px;
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.sm}px;
  line-height: ${theme.fonts.height.regular.sm}px;
  background-color: ${({ checked }) => (checked ? theme.colors.beige : theme.colors.white)};
  border-radius: ${theme.radiuses.xs}px;
  user-select: none;
  border: none;
  transition: background-color 0.4s ease;
  box-shadow: 1px 1px 4px 0px rgba(144, 134, 133, 0.25), -1px -1px 4px 0px rgba(153, 139, 138, 0.25);

  :hover {
    text-decoration: underline;
  }
`

const Input = styled.input<TBadgeProps>`
  display: none;
`

export const Styled = {
  Badge,
  Label,
  Input,
}
