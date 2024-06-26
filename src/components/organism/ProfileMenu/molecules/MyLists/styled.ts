import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled(Flexbox)`
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: 700px;
  }
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

const Dialog = styled.div`
  padding: 0px ${theme.space.sm}px ${theme.space.sm}px ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px;
  }
`

export const Styled = {
  Wrapper,
  ListsWrapper,
  Dialog,
}
