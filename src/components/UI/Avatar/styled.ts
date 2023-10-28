import styled from 'styled-components'
import { theme } from '@constants'
import { ResponsiveImage } from '../ResponsiveImage'

type AvatarProps = {
  hasAction?: boolean
}

const Avatar = styled(ResponsiveImage)<AvatarProps>`
  border-radius: ${theme.radiuses.round}px;
  cursor: ${({ hasAction }) => (hasAction ? 'pointer' : 'default')};
`

export const Styled = {
  Avatar,
}
