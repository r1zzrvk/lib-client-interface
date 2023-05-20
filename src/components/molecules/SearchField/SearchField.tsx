import { FC } from 'react'
import { Input, Modal } from '@ui-kit'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

type TSearchFieldProps = {
  onClick: (state: boolean) => void
  isOpen: boolean
  onChange: (search: string) => void
}

export const SearchField: FC<TSearchFieldProps> = ({ onClick, isOpen, onChange }) => {
  const { isMob } = useBreakpoint()

  return (
    <Styled.Wrapper>
      <Input
        placeholder="Type something..."
        type="text"
        isButton
        fluid={isMob}
        onClick={() => onClick(true)}
        onChange={e => onChange(e.target.value)}
      />
      <Modal isOpen={isOpen} onClose={() => onClick(false)}>
        nothing
      </Modal>
    </Styled.Wrapper>
  )
}
