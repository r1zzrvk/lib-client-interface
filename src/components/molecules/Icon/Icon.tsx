import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import { theme } from '@constants'
import { TIcon } from '@types'

import { icons } from './constants'

export type TIconProps = {
  icon: TIcon
  color?: string
  size?: number
}

export const Icon: FC<TIconProps> = ({ icon, color = theme.colors.white, size = 24 }) => (
  <FontAwesomeIcon icon={icons[icon]} color={color} fontSize={size} />
)
