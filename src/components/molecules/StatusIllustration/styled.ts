import styled from 'styled-components'

import { Flexbox } from '@components/atoms'

type TWrapperProps = {
  isVisible: boolean
}

const Wrapper = styled(Flexbox)<TWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
`

export const Styled = {
  Wrapper,
}
