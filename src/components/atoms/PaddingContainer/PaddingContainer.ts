import { theme } from '@constants'
import styled from 'styled-components'

type TPaddingContainerProps = {
  padding: number
  mobOnly?: boolean
  withMaxHeight?: boolean
}

export const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: ${({ padding }) => `0px ${padding}px 0px ${padding}px`};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ mobOnly }) => mobOnly && 0}px;
    min-height: ${({ withMaxHeight }) => (withMaxHeight ? '65vh' : 'auto')};
  }
`
