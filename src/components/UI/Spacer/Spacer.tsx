import { FC } from "react";
import { Styled } from "./styled";

type TSpacerProps = {
  size: number
  sizeMob?: number
  samespace?: boolean
}

export const Spacer: FC<TSpacerProps> = ({ size, sizeMob, samespace = false}) => {
  if(samespace) {
    sizeMob = size
  }
  return (
    <Styled.Spacer size={size} sizeMob={Number(sizeMob)} />
  )
}