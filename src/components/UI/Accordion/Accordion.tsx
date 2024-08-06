import { FC, ReactNode, useState } from 'react'

import { theme } from '@constants'

import { ActionIcon } from '../ActionIcon'
import { Styled } from './styled'

type TAccordionProps = {
  children: ReactNode
  title: string
}

export const Accordion: FC<TAccordionProps> = ({ title, children }) => {
  const [active, setActive] = useState(false)
  const [animation, setAnimation] = useState('Closing')

  const handleClick = () => {
    setAnimation(prev => (prev === 'Opening' ? 'Closing' : 'Opening'))
    if (!active) {
      setActive(true)

      return
    }

    setActive(false)
  }

  return (
    <Styled.Wrapper active={active}>
      <Styled.AccordionButton active={active} onClick={handleClick}>
        {title}
        <Styled.AccordionIcon active={active}>
          <ActionIcon icon="caretDown_solid" color={theme.colors.grey} backgroundColor={theme.colors.beige} />
        </Styled.AccordionIcon>
      </Styled.AccordionButton>
      <Styled.AccordionItem active={active} animation={animation}>
        {children}
      </Styled.AccordionItem>
    </Styled.Wrapper>
  )
}
