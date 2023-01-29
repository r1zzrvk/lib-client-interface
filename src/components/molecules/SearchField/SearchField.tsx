import { Input, Modal } from '@components'
import { FC, useState } from 'react'
import { Styled } from './styled'

type TSearchFieldProps = {
  onClick: (state: boolean) => void
  isOpen: boolean
}

export const SearchField: FC<TSearchFieldProps> = ({ onClick, isOpen }) => {
  const [searchField, setSearchField] = useState('')
  return (
    <Styled.Wrapper>
      <Input
        placeholder="Type something..."
        type="text"
        isButton
        onClick={() => onClick(true)}
        onChange={e => setSearchField(e.target.value)}
      />
      <Modal isOpen={isOpen} onClose={() => onClick(false)}>
        {searchField || 'nothing'}
      </Modal>
    </Styled.Wrapper>
  )
}
