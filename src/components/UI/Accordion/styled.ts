import styled from 'styled-components'

import { theme } from '@constants'

type TWrapperProps = {
  color: string
  active: boolean
}

type TAccordionButtonProps = {
  color: string
  active: boolean
}

type TAccordionItemProps = {
  active: boolean
  animation?: string
  color?: string
}

type TAccordionIconProps = {
  active: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  color: ${({ color }) => color};
`

const AccordionButton = styled.button<TAccordionButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Source Sans 3', sans-serif;
  color: ${({ color }) => color};
  cursor: pointer;
  padding: ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px 0px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  font-size: ${theme.fonts.size.header.xs}px;
  line-height: ${theme.fonts.height.header.xs}px;
  font-weight: ${theme.fonts.weight.regular};
  transition: 0.4s;
  background-color: inherit;
  border-bottom: ${({ active, color }) =>
    !active && `1px solid ${color === theme.colors.white ? theme.colors.secondary : theme.colors.main}`};

  &:hover {
    color: ${({ color }) => (color === theme.colors.white ? theme.colors.secondary : theme.colors.main)};
  }
`

const AccordionItem = styled.div<TAccordionItemProps>`
  padding: 0px ${theme.space.xs4}px 0px;
  overflow: hidden;
  display: ${({ active }) => (active ? 'block' : 'none')};
  animation: ${({ animation }) => `${animation} 0.5s both`};
  padding-bottom: ${theme.space.xs}px;
  border-bottom: ${({ color }) =>
    `1px solid ${color === theme.colors.white ? theme.colors.secondary : theme.colors.main}`};
  z-index: 0;

  @keyframes Opening {
    0% {
      transform: translateY(-300px);
      opacity: 0;
    }

    25% {
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes Closing {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }

    25% {
      opacity: 0;
    }

    100% {
      transform: translateY(-300px);
      opacity: 0;
    }
  }
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
