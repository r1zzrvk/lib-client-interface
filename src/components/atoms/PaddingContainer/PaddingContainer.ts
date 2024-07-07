import styled from 'styled-components'

import { theme } from '@constants'

type TPaddingContainerProps = {
  padding: number
  mobOnly?: boolean
  withMaxHeight?: boolean
}

export const PaddingContainer = styled.div<TPaddingContainerProps>`
  padding: ${({ padding }) => `0px ${padding}px 0px ${padding}px`};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: ${({ mobOnly }) => mobOnly && 0}px;
    min-height: 100%;
    height: 100%;
  }
`
