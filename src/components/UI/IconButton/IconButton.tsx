import { FC } from 'react'
import { IconsSelector } from '@components'
import { theme } from '@constants'
import { Styled } from './styled'

type TIconButtonProps = {
  icon: string
  onClick: () => void
  color?: string
  size?: number
}

export const IconButton: FC<TIconButtonProps> = ({ icon, color = theme.colors.white, size, onClick }) => (
  <Styled.Wrapper onClick={onClick}>
    <IconsSelector icon={icon} color={color} size={size} />
  </Styled.Wrapper>
)
