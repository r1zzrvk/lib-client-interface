import { theme } from '@constants'
import { IconsSelector } from 'components/molecules'
import { FC, ReactNode } from 'react'
import { Styled } from './styled'

type TModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<TModalProps> = ({ children, isOpen, onClose }) => (
  <Styled.Wrapper isOpen={isOpen} onClick={() => onClose()}>
    <Styled.Modal onClick={e => e.stopPropagation()}>
      <Styled.Icon onClick={() => onClose()}>
        {/* icon! */}
        <IconsSelector icon="exit_solid" color={theme.colors.grey} />
      </Styled.Icon>
      {children}
    </Styled.Modal>
  </Styled.Wrapper>
)
