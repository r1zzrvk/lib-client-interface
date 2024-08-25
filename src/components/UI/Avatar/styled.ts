import styled from 'styled-components'

import { theme } from '@constants'

import { ResponsiveImage } from '../ResponsiveImage'

const Avatar = styled(ResponsiveImage)`
  border-radius: ${theme.radiuses.round}px;
`

const Wrapper = styled.div`
  flex-shrink: 0;
`

export const Styled = {
  Wrapper,
  Avatar,
}
