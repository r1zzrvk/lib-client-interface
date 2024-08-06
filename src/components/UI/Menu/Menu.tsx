import { FC, ReactNode, useEffect, useRef } from 'react'

import { MenuItem } from './molecules'
import { Styled } from './styled'

type TPopoverProps = {
  children: ReactNode[]
  opened: boolean
  onClose: () => void
  position?: 'left' | 'right'
}

const Popover: FC<TPopoverProps> = ({ children, onClose, opened, position = 'right' }) => {
  const menuItems = children.slice(1, children.length)
  const rootEl = useRef<HTMLDivElement | null>(null)

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
      {children[0]}
      {opened && <Styled.List position={position}>{menuItems}</Styled.List>}
    </Styled.PopoverWrapper>
  )
}

export const Menu = {
  Popover,
  MenuItem,
}
