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
  const { isMob, isTablet } = useBreakpoint()

  return (
    <Styled.Wrapper>
      <Input
        placeholder="Type something..."
        type="text"
        fluid={isMob}
        onChange={e => onChange(e.target.value)}
        onClick={() => onClick(true)}
        isButton={isMob || isTablet}
      />
      <Modal isOpen={isOpen} onClose={() => onClick(false)}>
        nothing
      </Modal>
    </Styled.Wrapper>
  )
}
