import styled from 'styled-components'

import { theme } from '@constants'

type TWrapperProps = {
  active: boolean
}

type TAccordionButtonProps = {
  active: boolean
}

type TAccordionItemProps = {
  active: boolean
  animation?: string
}

type TAccordionIconProps = {
  active: boolean
}

const Wrapper = styled.div<TWrapperProps>`
  color: ${theme.colors.grey};
`

const buttonRadius = `${theme.radiuses.sm}px ${theme.radiuses.sm}px 0px 0px`
const itemRadius = `0px 0px ${theme.radiuses.sm}px ${theme.radiuses.sm}px`

const AccordionButton = styled.button<TAccordionButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.beige};
  font-family: 'Source Sans 3', sans-serif;
  color: ${theme.colors.grey};
  cursor: pointer;
  padding: ${theme.space.sm}px ${theme.space.sm}px;
  border-radius: ${({ active }) => (active ? buttonRadius : `${theme.radiuses.sm}px`)};
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  font-size: ${theme.fonts.size.header.xs}px;
  line-height: ${theme.fonts.height.header.xs}px;
  font-weight: ${theme.fonts.weight.regular};

  &:hover {
    transition: color 0.3s;
    color: ${theme.colors.grey_light};
  }
`

const AccordionItem = styled.div<TAccordionItemProps>`
  overflow: hidden;
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;
  background-color: ${theme.colors.beige};
  border-radius: ${({ active }) => (active ? itemRadius : `${theme.radiuses.sm}px`)};
  display: block;
  animation: ${({ animation }) => `${animation} 0.3s both`};
  z-index: 0;

  @keyframes Opening {
    0% {
      transform: scaleY(0);
      transform-origin: 0% 0%;
      opacity: 0;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  @keyframes Closing {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }

    100% {
      transform: scaleY(0);
      transform-origin: 0% 0%;
      opacity: 0;
      display: none;
    }
  }
`

const AccordionIcon = styled.span<TAccordionIconProps>`
  font-size: ${theme.fonts.size.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-weight: ${theme.fonts.height.regular.md}px;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 0.4s;
`

export const Styled = {
  Wrapper,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
}
