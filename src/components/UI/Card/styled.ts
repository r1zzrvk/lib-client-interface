import styled from 'styled-components'

import { theme } from '@constants'

import { ResponsiveImage } from '../ResponsiveImage'

const Wrapper = styled.a`
  display: flex;
  width: 100%;
  height: 180px;
  border-radius: ${theme.radiuses.sm}px;
  transition: 0.3s ease-in;
  cursor: pointer;
  text-decoration: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  }
`

const Image = styled(ResponsiveImage)`
  border-radius: ${theme.radiuses.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    border-radius: ${theme.radiuses.sm}px 0px 0px ${theme.radiuses.sm}px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    gap: ${theme.space.xs}px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0px 0px ${theme.space.xs}px ${theme.space.xs}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xs}px;
  }
`

const Icon = styled.div`
  padding: ${theme.space.xs}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px;
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
  Image,
  ButtonBlock,
  Content,
  Icon,
  ButtonWrapper,
  EmptyListsWrapper,
}
