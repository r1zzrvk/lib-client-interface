import { theme } from '@constants'
import styled from 'styled-components'
import { ResponsiveImage } from '../ResponsiveImage'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  border-radius: ${theme.radiuses.sm}px;
  transition: 0.3s ease-in;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: ${theme.breakpoints.tablet}px) {
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);

    :hover {
      scale: 1.05;
    }
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
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: ${theme.space.xs}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${theme.space.xs}px;
  }
`

const Icon = styled.div`
  align-self: flex-end;
  padding: ${theme.space.xs}px;

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
