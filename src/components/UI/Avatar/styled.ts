import styled from 'styled-components'

import { theme } from '@constants'

import { ResponsiveImage } from '../ResponsiveImage'

const Avatar = styled(ResponsiveImage)`
  border-radius: ${theme.radiuses.round}px;
`

export const Styled = {
  Avatar,
}
