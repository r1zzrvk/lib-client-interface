import { Flexbox } from '@components/atoms'
import styled from 'styled-components'

type TWrapperProps = {
  isVisible: boolean
}

const Wrapper = styled(Flexbox)<TWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`

export const Styled = {
  Wrapper,
}
