import { FC, ReactNode } from 'react'

import { theme } from '@constants'

import { Styled } from './styled'
import { Text } from '../Text'
import { ActionIcon } from '../ActionIcon'

type TModalProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'lg' | 'sm'
}

export const Modal: FC<TModalProps> = ({ children, isOpen, onClose, size = 'lg', title = '' }) => (
  <Styled.Wrapper isOpen={isOpen} onClick={() => onClose()}>
    <Styled.Modal onClick={e => e.stopPropagation()} size={size} id="modal">
      <Styled.Header>
        <Text
          color={theme.colors.grey}
          fontSizeMob={theme.fonts.size.header.sm}
          fontWeightMob={theme.fonts.weight.medium}
          fontHeightMob={theme.fonts.height.header.sm}
          fontSize={theme.fonts.size.header.sm}
          fontHeight={theme.fonts.height.header.sm}
        >
          {title}
        </Text>
        <Styled.Icon>
          <ActionIcon icon="cross_solid" color={theme.colors.grey} onClick={() => onClose()} />
        </Styled.Icon>
      </Styled.Header>
      {children}
    </Styled.Modal>
  </Styled.Wrapper>
)
