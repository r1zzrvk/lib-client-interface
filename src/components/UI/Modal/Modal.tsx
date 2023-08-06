import { theme } from '@constants'
import { IconsSelector } from 'components/molecules'
import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  sidePadding?: number
}

export const Modal: FC<TModalProps> = ({ children, isOpen, onClose, sidePadding = 0 }) => (
  <Styled.Wrapper isOpen={isOpen} onClick={() => onClose()}>
    <Styled.Modal onClick={e => e.stopPropagation()} sidePadding={sidePadding}>
      <Styled.Icon onClick={() => onClose()}>
        <IconsSelector icon="cross_solid" color={theme.colors.grey} />
      </Styled.Icon>
      {children}
    </Styled.Modal>
  </Styled.Wrapper>
)
