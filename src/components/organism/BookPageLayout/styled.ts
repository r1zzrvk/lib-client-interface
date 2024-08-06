import styled from 'styled-components'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radiuses.lg}px;
  padding: ${theme.space.xl}px ${theme.space.lg}px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin-top: ${theme.space.lg}px;
    max-width: 960px;
    padding: ${theme.space.xl}px;
  }
`

const ActionWrapper = styled(Flexbox)`
  max-width: 200px;
  border: 2px solid ${theme.colors.main};
  margin-bottom: ${theme.space.md}px;
  padding: ${theme.space.xs}px ${theme.space.lg}px;
  border-radius: ${theme.radiuses.md}px;
  cursor: pointer;
`

const IconWrapper = styled.div`
  padding: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${theme.colors.main};
`

const Description = styled.div`
  text-indent: ${theme.space.lg}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: ${theme.space.md}px 0px;
    margin-top: ${theme.space.xl}px;
    border-radius: ${theme.radiuses.lg}px;
  }
`

const ButtonWrapper = styled.div`
  padding: 0px ${theme.space.xs2}px;
`

const EmptyListsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.space.md}px ${theme.space.xs2}px;
`

export const Styled = {
  Wrapper,
  ActionWrapper,
  IconWrapper,
  Description,
  ButtonWrapper,
  EmptyListsWrapper,
}
