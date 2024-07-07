import { FC, ReactNode, useState } from 'react'

import { theme } from '@constants'

import { Styled } from './styled'

type TAccordionProps = {
  children: ReactNode
  title: string
  color?: string
}

export const Accordion: FC<TAccordionProps> = ({ title, children, color = theme.colors.white }) => {
  const [active, setActive] = useState(false)
  const [animation, setAnimation] = useState('Closing')

  const handleClick = () => {
    setAnimation(prev => (prev === 'Opening' ? 'Closing' : 'Opening'))
    if (!active) {
      setActive(true)

      return
    }

    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  return (
    <Styled.Wrapper color={color} active={active}>
      <Styled.AccordionButton active={active} color={color} onClick={handleClick}>
        {title}
        <Styled.AccordionIcon active={active}>{'\u2716'}</Styled.AccordionIcon>
      </Styled.AccordionButton>
      <Styled.AccordionItem active={active} animation={animation} color={color}>
        {children}
      </Styled.AccordionItem>
    </Styled.Wrapper>
  )
}
