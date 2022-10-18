import { FC, ReactNode, useState } from "react";
import { Styled } from "./styled";
import { theme } from '@constants'

type TAccordionProps = {
  children: ReactNode
  title: string
  color?: string
}

export const Accordion: FC<TAccordionProps> = ({ title, children, color = theme.colors.white }) => {
  const [active, setActive] = useState(false)
  return (
    <Styled.Wrapper color={color}>
      <Styled.AccordionButton color={color} onClick={() => setActive(!active)}>
        {title}
        <Styled.AccordionIcon active={active}>{'\u2716'}</Styled.AccordionIcon>
      </Styled.AccordionButton>
      <Styled.AccordionItem active={active}>
        {children}
      </Styled.AccordionItem>
    </Styled.Wrapper>)
}