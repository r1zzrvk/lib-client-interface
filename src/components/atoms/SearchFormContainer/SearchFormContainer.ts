import styled from 'styled-components'
import { theme } from '@constants'
import { Flexbox } from '../Flexbox'

export const SearchFormContainer = styled(Flexbox)`
  padding: 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 0px 100px;
  }
`
