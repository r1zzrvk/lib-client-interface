import { FC } from 'react'
import { TIcon } from '@types'
import { theme } from '@constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from './constants'
import { Styled } from './styled'

type TIconsSelectorProps = {
  icon: TIcon
  color?: string
  size?: number
  sidePadding?: number
  upDownPadding?: number
  isButton?: boolean
  withBorder?: boolean
  borderColor?: string
  onClick?: () => void
}

export const IconsSelector: FC<TIconsSelectorProps> = ({
  icon,
  color = theme.colors.white,
  size = 24,
  sidePadding = 0,
  upDownPadding = 0,
  isButton = false,
  withBorder = false,
  borderColor = theme.colors.main,
  onClick,
}) => (
  <Styled.Wrapper
    sidePadding={sidePadding}
    upDownPadding={upDownPadding}
    isButton={isButton}
    withBorder={withBorder}
    borderColor={borderColor}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icons[icon]} color={color} fontSize={size} />
  </Styled.Wrapper>
)
