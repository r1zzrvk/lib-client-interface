import { FC, ReactNode, useEffect, useRef } from 'react'

import { MenuItem } from './molecules'
import { Styled } from './styled'

type TPopoverProps = {
  children: ReactNode[]
  opened: boolean
  onClose: () => void
  positionX?: 'left' | 'right'
  positionY?: 'top' | 'bottom'
}

const Popover: FC<TPopoverProps> = ({ children, onClose, opened, positionX = 'right', positionY = 'bottom' }) => {
  const menuItems = children.slice(1, children.length)
  const rootEl = useRef<HTMLDivElement | null>(null)
  const button = document.getElementById('menu-children')

  useEffect(() => {
    const onClick = (e: Event) => {
      if (!rootEl?.current?.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
    }
  }, [onClose, opened])

  return (
    <Styled.PopoverWrapper ref={rootEl}>
      <div id="menu-children">{children[0]}</div>
      {opened && (
        <Styled.List positionX={positionX} positionY={positionY} buttonHeight={button?.offsetHeight}>
          {menuItems}
        </Styled.List>
      )}
    </Styled.PopoverWrapper>
  )
}

export const Menu = {
  Popover,
  MenuItem,
}
