import { theme } from "@constants"
import styled from "styled-components"

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
  color: ${({color}) => color};
  border-bottom: 1px solid ${theme.colors.secondary};
`

const AccordionButton = styled.button<TAccordionButtonProps>`
  display: flex;
  justify-content: space-between;
  font-family: 'Source Sans 3', sans-serif;
  color: ${({color}) => color};
  cursor: pointer;
  padding: 18px 30px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: ${theme.fonts.size.regular.md}px;
  transition: 0.4s;
  background-color: inherit;

  &:hover {
    color: ${theme.colors.secondary};
  }
`
const AccordionItem = styled.div<TAccordionItemProps>`
  padding: 0 18px;
  display: ${({active}) => active ? 'block' : 'none'};
  overflow: hidden;
`

const AccordionIcon = styled.span<TAccordionIconProps>`
  font-size: ${theme.fonts.size.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-weight: ${theme.fonts.height.regular.md}px;
  transform: ${({active}) => active ? 'rotate(0deg)' : 'rotate(45deg)'};
  transition: 0.4s;
`

export const Styled = {
  Wrapper,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
}