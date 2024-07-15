import styled from 'styled-components'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'

const Wrapper = styled(Flexbox)`
  width: 100%;
`

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.sm}px;
  padding: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.lg}px 0px;
  }
`

export const Styled = {
  Wrapper,
  ListsWrapper,
}
