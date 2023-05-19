import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: ${theme.radiuses.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    height: 200px;
  }
`

const Image = styled.img`
  height: 170px;
  min-width: 110px;
  max-width: 110px;
  border-radius: ${theme.radiuses.sm}px 0px 0px ${theme.radiuses.sm}px;
  object-fit: cover;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    &&& {
      height: 200px;
      min-width: 170px;
      max-width: 170px;
    }
  }
`

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.space.xs2}px ${theme.space.xs}px ${theme.space.xs2}px ${theme.space.xs2}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xs}px;
  }
`

const Icon = styled.div`
  padding: ${theme.space.xs2}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.sm}px;
  }
`
export const Styled = {
  Wrapper,
  Image,
  ButtonBlock,
  Content,
  Icon,
}
