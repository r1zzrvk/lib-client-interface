import { FC } from 'react'
import { Styled } from './styled'

type TSpacerProps = {
  size?: number
  sizeMob?: number
  samespace?: boolean
}

export const Spacer: FC<TSpacerProps> = ({ size, sizeMob, samespace = false }) => (
  <Styled.Spacer size={size} sizeMob={samespace ? size : Number(sizeMob)} />
)
