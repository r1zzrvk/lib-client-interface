import styled from 'styled-components'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'

const Wrapper = styled.div`
  padding: ${theme.space.xl}px ${theme.space.lg}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    max-width: 960px;
    padding: ${theme.space.xl}px 120px ${theme.space.xl}px 120px;
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
    padding: ${theme.space.md}px;
    margin-top: ${theme.space.xl}px;
    border-radius: ${theme.radiuses.lg}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  }
`

export const Styled = {
  Wrapper,
  ActionWrapper,
  IconWrapper,
  Description,
}
