import { theme } from '@constants'
import styled from 'styled-components'

type TWrapperProps = {
  color: string
}

type TAccordionButtonProps = {
  color: string
}

type TAccordionItemProps = {
  active: boolean
}

type TAccordionIconProps = {
  active: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  color: ${({ color }) => color};
  border-bottom: 1px solid ${({ color }) => (color === theme.colors.white ? theme.colors.secondary : theme.colors.main)};
`

const AccordionButton = styled.button<TAccordionButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Source Sans 3', sans-serif;
  color: ${({ color }) => color};
  cursor: pointer;
  padding: ${theme.space.sm}px ${theme.space.lg}px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.regular};
  transition: 0.4s;
  background-color: inherit;

  &:hover {
    color: ${({ color }) => (color === theme.colors.white ? theme.colors.secondary : theme.colors.main)};
  }
`
const AccordionItem = styled.div<TAccordionItemProps>`
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px;
  display: ${({ active }) => (active ? 'block' : 'none')};
  overflow: hidden;
`

const AccordionIcon = styled.span<TAccordionIconProps>`
  font-size: ${theme.fonts.size.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-weight: ${theme.fonts.height.regular.md}px;
  transform: ${({ active }) => (active ? 'rotate(0deg)' : 'rotate(45deg)')};
  transition: 0.4s;
`

export const Styled = {
  Wrapper,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
}
