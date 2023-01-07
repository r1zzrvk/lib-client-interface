import { Input, Modal } from '@components'
import { FC } from 'react'
import { Styled } from './styled'

type TSearchFieldProps = {
  onClick: (state: boolean) => void
  isOpen: boolean
}

export const SearchField: FC<TSearchFieldProps> = ({ onClick, isOpen }) => (
  <Styled.Wrapper>
    <Input placeholder="Type something..." type="text" isButton onClick={() => onClick(true)} />
    <Modal isOpen={isOpen} onClose={() => onClick(false)}>
      askjdhfaksjdhbf
    </Modal>
  </Styled.Wrapper>
)
